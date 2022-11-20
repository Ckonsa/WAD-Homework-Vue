<template>
  <div class="post" v-for="postItem in postsList" :key="postItem.id">
      <div class="post-top">
        <img class="icon" :src="postItem.authorIcon" alt="Icon">
        <p>{{postItem.createTime}}</p>
      </div>

      <div class="post-content">
        <img v-if="postItem.postimage!=null" :src=postItem.postimage alt="Content Image">
        <p>{{postItem.text}}</p>
      </div>
    <div class="post-bottom">
      <div class="comment-container">
        <img class="icon" src="@/assets/images/student.png" alt="Icon">
        <input class="comment" type="text" placeholder="Write a comment...">
      </div>
      <div class="likes">
        <img @click="increment(postItem.id)" src="@/assets/images/like-icon.png" alt="Like Button">
        <p>{{ postItem.likes }}</p>
      </div>
    </div>
  </div>
  <button class="resetLikesButton" @click="resetLikes">Reset likes</button>
</template>

<script>
export default {
name: "PostCompo",
data: function() {
  return {
  }},
  computed: {
    postsList() {
      return this.$store.state.postsList
    }
  },
  methods: {
    increment(postID) {
      this.$store.commit("increment", postID)
    },
    resetLikes() {
      this.$store.commit("resetLikes")
    }
  }
}
</script>


<style scoped>

.resetLikesButton {
  display: flex;
  justify-self: center;
  width: 100px;
  height: 30px;
  background-color: var(--post-top-bottom-blue);
  border-color: var(--post-top-bottom-blue);
  border-radius: 10px;
  text-align: center;
  display:table-cell;
  vertical-align:middle;
}

.post {
    background-color: var(--almost-white);
    border-style: solid;
    border-color: var(--almost-white);
    border-radius: 10px;
}

.post > * {
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
.comment-container + img {
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
.post-content > img {
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
.likes > img {
  width: 40px;
  height: 40px;
  padding-bottom: 10px;
  padding-right: 5px;
}

@media screen and (max-width: 480px) {
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