<template>
  <div class="posts-container">
    <button class="centeredButton" @click="logout">Logout</button>
    <div class="post" v-for="postItem in postList" :key="postItem.id">
      <!--Added click event to the post top and content, so the post bottom with comment section and like button would still be functional-->
        <div @click="toEditView(postItem.id)" class="post-top"> 
          <img class="icon" src="@/assets/images/default-comment.png" alt="Icon">
          <p>{{ postItem.createtime }}</p>
        </div>
        <div @click="toEditView(postItem.id)" class="post-content">
          <!--<img v-if="postItem.postimage!=null" src="@/assets/images/postImage.jpg" alt="Content Image">-->
          <p>{{ postItem.text }}</p>
        </div>
        <div class="post-bottom">
          <div class="comment-container">
            <img class="icon" src="@/assets/images/default-account.png" alt="Icon">
            <input class="comment" type="text" placeholder="Write a comment...">
          </div>
          <div class="likes">
            <img src="@/assets/images/like-icon.png" alt="Like Button">
            <p>{{ postItem.likes }}</p>
          </div>
        </div>
    </div>
    <div class="buttons">
      <!-- <button class="centeredButton" @click="resetLikes">Reset likes</button> -->
      <button class="centeredButton"><router-link to="/addpost"><a>Add post</a></router-link></button>
      <button class="centeredButton" @click="deletePosts">Delete posts</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostCompo",
  data() {
    return {
      postList: [],
    };
  },
  methods: {
    toEditView(id) {
      this.$router.push("/editpost/"+id);
    },
    fetchPosts() {
      fetch(`http://localhost:3000/api/posts/`)
        .then((response) => response.json())
        .then((data) => (this.postList = data))
        .catch((err) => console.log(err.message));
    },
    deletePosts() {
      let options = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
      }
      fetch(`http://localhost:3000/api/posts/`, options)
        .then(() => window.location.reload())
        .catch((err) => console.log(err.message));
    },
    logout() {
      fetch(`http://localhost:3000/auth/logout/`, {
        credentials: 'include',
      })
        .then((data) => {
          console.log(data);
          console.log('jwt removed');
          //console.log('jwt removed:' + auth.authenticated());
          //this.$router.push("/login");
          location.assign("/login");
        })
        .catch((e) => {
          console.log(e);
          console.log("error logout");
        });
    }
  },
  mounted() {
    this.fetchPosts();
  },
  // data: function() {
  //   return {
  //   }},
  //   computed: {
  //     postsList() {
  //       return this.$store.state.postsList
  //     }
  //   },
  //   methods: {

  //     increment(postID) {
  //       this.$store.commit("increment", postID)
  //     },
  //     resetLikes() {
  //       this.$store.commit("resetLikes")
  //     }
  //   }
}
</script>


<style scoped>
.posts-container {
  flex-grow: 2;
  max-width: 600px;
  margin: 15px;
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 15px;
}

.centeredButton {
  display: flex;
  justify-self: center;
  width: 100px;
  height: 30px;
  background-color: var(--post-top-bottom-blue);
  border-color: var(--post-top-bottom-blue);
  border-radius: 10px;
  text-align: center;
  display: table-cell;
  vertical-align: middle;
  text-decoration: double;
  cursor: pointer;
}

.centeredButton a {
  text-decoration: none;
}

.centeredButton:hover {
  background-color: var(--header-footer-hover-blue);
}

.buttons {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}

.post {
  background-color: var(--almost-white);
  border-style: solid;
  border-color: var(--almost-white);
  border-radius: 10px;
}

.post>* {
  padding: 10px;
  border-radius: 10px;
}

.post-top {
  background-color: var(--post-top-bottom-blue);
  padding-right: 20px;
  display: flex;
  justify-content: space-between;
}

.post-bottom {
  background-color: var(--post-top-bottom-blue);
  align-items: center;
  height: 60px;
  display: flex;
  justify-content: space-between;
}

.comment-container {
  display: flex;
  justify-content: left;
}

.comment {
  width: 170px;
  height: 30px;
  margin: 5px;
  border-radius: 15px;
}

.comment-container .icon {
  width: 43px;
  height: 43px;
  padding-right: 2px;
  padding-left: 6px;
}

.comment-container+img {
  width: 40px;
  height: 40px;
  margin-bottom: 3px;
}

.post-content {
  text-align: justify;
  font-size: 16px;
}

.post-content::first-letter {
  font-size: large;
}

.post-content>img {
  width: 100%;
  object-fit: contain;
}

.likes {
  padding-right: 10px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  font-family: 'Courier New', Courier, monospace;
}

.likes>img {
  width: 40px;
  height: 40px;
  padding-bottom: 10px;
  padding-right: 5px;
  cursor: pointer;
}

.hiddenText {
  display: none;
}

@media screen and (max-width: 480px) {
  .posts-container {
    margin: 10px 0 0;
    row-gap: 10px;
  }

  .comment {
    width: auto;
  }

  button {
    margin-bottom: 15px;
  }
}

@media screen and (max-width: 320px) {
  .comment-container .icon {
    display: none;
  }
}
</style>