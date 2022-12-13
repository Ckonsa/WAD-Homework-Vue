const createExamplePosts = false;

const Pool = require('pg').Pool;

// this code will work and a table will be created if you have already created the "testWad" database.
const pool = new Pool({
    user: "postgres",
    password: "root", // Enter your password here
    database: "testWad", //Try to use the same name for your database
    host: "localhost",
    port: "5432"
});


const execute = async(query) => {
  try {
      await pool.connect(); // create a connection
      await pool.query(query); // executes a query
      return true;
  } catch (error) {
      console.error(error.stack);
      return false;
  }
};

const createPosttasbleQuery = `
  CREATE TABLE IF NOT EXISTS "posttable" (
	    id SERIAL PRIMARY KEY,         
	    createtime VARCHAR(200) NOT NULL,
	    text VARCHAR(400) NOT NULL
    );`;

const createUsersTableQuery = `
    CREATE TABLE IF NOT EXISTS "users" (
        id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
        email VARCHAR(200) NOT NULL UNIQUE,
        password VARCHAR(200) NOT NULL 
    );`;


const addExamplePosts = async(examplePosts) => {
  if (createExamplePosts == false) return;
  examplePosts = [
    {id: 1, createTime: "Nov 22, 2022", text: "OOPS! Seems like I'm a little late:((("},
    {id: 2, createTime: "Nov 10, 2022", text: "Anyone knows in which room is the lab today!?"},
    {id: 3, createTime: "Oct 31, 2022", text: "My table is sooooo crowded"},
    {id: 4, createTime: "Oct 27, 2022", text: "I was thinking about starting a sleeping blog, what do you guys think??"},
    {id: 5, createTime: "Oct 16, 2022", text: "Can anyone bring me some coffee??"},
    {id: 6, createTime: "Oct 16, 2022", text: "Thinking of life #deep"},
    {id: 7, createTime: "Oct 16, 2022", text: "Did you guys see the new photo?!!"},
    {id: 8, createTime: "Sept 29, 2022", text: "Study date with my bestiess! :D"},
    {id: 9, createTime: "Sept 28, 2022", text: "Why do I keep missing my class???"},
    {id: 10, createTime: "Sept 12, 2022", text: "I love my cat soooooo much! <33"}
  ]
  try {
    for (let i = 0; i < examplePosts.length; i++) {
      const post = examplePosts[i]
      await pool.query(
          "INSERT INTO posttable(createtime, text) values ($1, $2)    RETURNING*",
          [post.createTime, post.text]
      );
      console.log('Example post created');
    }
  }
  catch (err) {
    console.error(err.message);
  };
};


// Execute the queries  
execute(createPosttasbleQuery)
.then(result => {
    if (result) {
        console.log('If does not exists, table "posttable" is created');
    }
})
.then(() => execute(createUsersTableQuery))
.then(result => {
  if (result) {
      console.log('If does not exists, table "users" is created');
  }
})
.then(() => addExamplePosts());


module.exports = pool;