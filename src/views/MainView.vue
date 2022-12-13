<template>
    <HeaderCompo></HeaderCompo>
    <div class="flexbox-container">
        <SideCompo></SideCompo>
        <PostCompo></PostCompo>
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
</style>