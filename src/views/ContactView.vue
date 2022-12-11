<template>
    <HeaderCompo></HeaderCompo>
    <div class="flexbox-container">
        <SideCompo></SideCompo>
        <ContactCompo></ContactCompo>
        <SideCompo></SideCompo>
    </div>

    <FooterCompo></FooterCompo>
</template>

<script>
  import HeaderCompo from "@/components/HeaderCompo";
  import FooterCompo from "@/components/FooterCompo";
  import ContactCompo from "@/components/ContactCompo";
  import SideCompo from "@/components/SideCompo.vue";
  export default {
    name: "ContactView",
    components: {HeaderCompo, ContactCompo, SideCompo, FooterCompo},
  }
</script>

<style scoped>
  .flexbox-container {
    display: flex;
    justify-content: space-between;
    align-content: stretch;
}
</style>