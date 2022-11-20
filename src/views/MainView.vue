<template>
    <HeaderCompo></HeaderCompo>
    <div class="flexbox-container">
        <SideCompo></SideCompo>
        <div class="posts-container">
        <PostCompo></PostCompo>
        </div>
        <SideCompo></SideCompo>
    </div>
    <FooterCompo></FooterCompo>
</template>

<script>
import HeaderCompo from '@/components/HeaderCompo.vue'
import FooterCompo from '@/components/FooterCompo.vue'
import SideCompo from '@/components/SideCompo.vue'
import PostCompo from '@/components/PostCompo.vue'

export default {
  name: "MainView",
  components: {
    HeaderCompo,
    FooterCompo,
    SideCompo,
    PostCompo
  },
  data: function () {
    return {}
  }
}
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