const createExamplePosts = true;

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
	    "id" SERIAL PRIMARY KEY,         
	    "authoricon" VARCHAR(200) NOT NULL,
	    "createtime" VARCHAR(200) NOT NULL,
	    "text" VARCHAR(400) NOT NULL,
	    "postimage" VARCHAR(200),
      "likes" INT
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
    {id: 1, authorIcon: "/assets/images/student2.png",createTime: "Nov 22, 2022", text: "OOPS! Seems like I'm a little late:(((", postimage: "@/assets/images/postImage2.jpg", likes: 0},
    {id: 2, authorIcon: "/assets/images/student3.png",createTime: "Nov 10, 2022", text: "Anyone knows in which room is the lab today!?", postimage: null, likes: 23},
    {id: 3, authorIcon: "/assets/images/student.png",createTime: "Oct 31, 2022", text: "My table is sooooo crowded", postimage: "@/assets/images/postImage.jpg", likes: 10},
    {id: 4, authorIcon: "/assets/images/student5.png",createTime: "Oct 27, 2022", text: "I was thinking about starting a sleeping blog, what do you guys think??", postimage: null, likes: 14},
    {id: 5, authorIcon: "/assets/images/student5.png",createTime: "Oct 16, 2022", text: "I made my profile picture the one that was taken of me sleeping haha", postimage: null, likes: 64},
    {id: 6, authorIcon: "@/assets/images/student3.png",createTime: "Oct 16, 2022", text: "Sorry, forgot to add it to the last post lol", postimage: "@/assets/images/sleeping-man.jpg", likes: 56},
    {id: 7, authorIcon: "@/assets/images/student3.png",createTime: "Oct 16, 2022", text: "Did you guys see the new photo?!!", postimage: null, likes: 3},
    {id: 8, authorIcon: "@/assets/images/student.png",createTime: "Sept 29, 2022", text: "Study date with my bestiess! :D", postimage: "@/assets/images/students.jpg", likes: 99},
    {id: 9, authorIcon: "@/assets/images/student2.png",createTime: "Sept 28, 2022", text: "Why do I keep missing my class???", postimage: null, likes: 3},
    {id: 10, authorIcon: "@/assets/images/student4.png",createTime: "Sept 12, 2022", text: "Look, a pic of my cat! <33", postimage: "@/assets/images/kitten.jpg", likes: 100}
  ]
  try {
    for (let i = 0; i < examplePosts.length; i++) {
      const post = examplePosts[i]
      const newpost = await pool.query(
          "INSERT INTO posttable(authoricon, createtime, text, postimage, likes) values ($1, $2, $3, $4, $5)    RETURNING*",
            [post.authorIcon, post.createTime, post.text, post.postimage, post.likes]
      );
      console.log('Created example post');
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