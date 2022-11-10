<template>
    <HeaderCompo></HeaderCompo>
    <div class="flexbox-container">
        <SideCompo></SideCompo>
        <SideCompo></SideCompo>
    </div>
    <FooterCompo></FooterCompo>
</template>

<script>
import HeaderCompo from '../components/HeaderCompo.vue'
import FooterCompo from '../components/FooterCompo.vue'
import SideCompo from '../components/SideCompo.vue'

export default {
  components: {
    HeaderCompo,
    FooterCompo,
    SideCompo
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