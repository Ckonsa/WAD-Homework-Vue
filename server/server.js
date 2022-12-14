const express = require('express');
const pool = require('./database');
const cors = require('cors')
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

const port = process.env.PORT || 3000;

const app = express();

app.use(cors({ origin: 'http://localhost:8080', credentials: true }));

app.use(express.json());
app.use(cookieParser());

const secret = "gdgdhdbcb770785rgdzqws"; // Maybe we need to change it
const maxAge = 60 * 60;
const generateJWT = (id) => {
    return jwt.sign({ id }, secret, { expiresIn: maxAge })
}

app.get('/auth/authenticate', async(req, res) => {
    const token = req.cookies.jwt;
    let authenticated = false; 
    try {
        if (token) {
            await jwt.verify(token, secret, (err) => { 
                if (err) { 
                    res.send({ "authenticated": authenticated }); // authenticated = false
                } else { 
                    authenticated = true;
                    res.send({ "authenticated": authenticated }); // authenticated = true
                }
            })
        } else { 
            res.send({ "authenticated": authenticated }); // authenticated = false
        }
    } catch (err) {
        res.status(400).send(err.message);
    }
});

app.post('/api/posts', async(req, res) => {
    try {
        const post = req.body;
        const newpost = await pool.query(
            "INSERT INTO posttable(createTime, text) values ($1, $2)    RETURNING*",
            [new Date().toJSON().slice(0,10).replace(/-/g,'/'), post.text]
        );
        res.json(newpost);
    } catch (err) {
        console.error(err.message);
    }
});

app.get('/api/posts', async(req, res) => {
    try {
        const posts = await pool.query(
            "SELECT * FROM posttable"
        );
        res.json(posts.rows);
    } catch (err) {
        console.error(err.message);
    }
});

app.delete('/api/posts', async(req, res) => {
    try {
        const deletepost = await pool.query(
            "DELETE FROM posttable * RETURNING*"
        );
        res.json(deletepost);
    } catch (err) {
    console.error(err.message);
    }
});

app.get('/api/posts/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const posts = await pool.query(
            "SELECT * FROM posttable WHERE id = $1", [id]
        );
        res.json(posts.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

app.put('/api/posts/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const post = req.body;
        const updatepost = await pool.query(
            "UPDATE posttable SET (text) = ($2) WHERE id = $1 RETURNING*", [id, post.body]
        );
        res.json(updatepost);
    } catch (err) {
        console.error(err.message);
    }
});

app.delete('/api/posts/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const deletepost = await pool.query(
            "DELETE FROM posttable WHERE id = $1 RETURNING*", [id]
        );
        res.json(deletepost);
    } catch (err) {
        console.error(err.message);
    }
});

app.post('/auth/signup', async(req, res) => {
    try {
        const { email, password } = req.body;
        const salt = await bcrypt.genSalt();
        const bcryptPassword = await bcrypt.hash(password, salt)
        const authUser = await pool.query(
            "INSERT INTO users(email, password) values ($1, $2) RETURNING*", [email, bcryptPassword]
        );
        const token = await generateJWT(authUser.rows[0].id);
        res
            .status(201)
            .cookie('jwt', token, { maxAge: 6000000, httpOnly: true })
            .json({ user_id: authUser.rows[0].id })
            .send;
        location.assign("/login");
    } catch (err) {
        console.error(err.message);
        res.status(400).send(err.message);
    }
});

app.post('/auth/login', async(req, res) => {
    try {
        const { email, password } = req.body;
        const user = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
        if (user.rows.length === 0) return res.status(401).json({ error: "User is not registered" });
        const validPassword = await bcrypt.compare(password, user.rows[0].password);
        if (!validPassword) return res.status(401).json({ error: "Incorrect password" });
        const token = await generateJWT(user.rows[0].id);
        res
            .status(201)
            .cookie('jwt', token, { maxAge: 6000000, httpOnly: true })
            .json({ user_id: user.rows[0].id })
            .send;
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
});

app.get('/auth/logout', (req, res) => {
    res.status(202).clearCookie('jwt').json({ "Msg": "Cookie cleared" }).send
});

app.listen(port, () => {
    console.log("Server is listening to port " + port)
}); 