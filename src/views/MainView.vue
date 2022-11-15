<template>
    <HeaderCompo></HeaderCompo>
    <div class="flexbox-container">
        <SideCompo></SideCompo>
        <div class="posts-container">
        <PostCompo :postsList="postsList"></PostCompo>
        </div>
        <SideCompo></SideCompo>
    </div>
    <FooterCompo></FooterCompo>
</template>

<script>
import HeaderCompo from '../components/HeaderCompo.vue'
import FooterCompo from '../components/FooterCompo.vue'
import SideCompo from '../components/SideCompo.vue'
import PostCompo from '../components/PostCompo.vue'

export default {
  name: "MainView",
  components: {
    HeaderCompo,
    FooterCompo,
    SideCompo,
    PostCompo
  },
  data: function() {
    return {
      postsList: [
        {id: 1, authorIcon: "../assets/images/student3.png",createTime: "Oct 20, 2022",text: "OOPS! Seems like I'm a little late:(((",image: "../assets/images/postImage2.jpg"},
        {id: 2, authorIcon: "../assets/images/student2.png",createTime: "Oct 22, 2022",text: "Anyone knows in which room is the lab today!?",image: null}
      ]}}}
</script>

<style scoped>
  .flexbox-container {
    display: flex;
    justify-content: space-between;
    align-content: stretch;
}
.posts-container {
    flex-grow: 2;
    max-width: 600px;
    margin: 15px;
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 15px;
}
@media screen and (max-width: 480px) {
  .posts-container {
        margin: 10px 0 0;
        row-gap: 10px;
    }
}

</style>