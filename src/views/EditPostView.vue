<template>
    <HeaderCompo></HeaderCompo>
    <EditPostCompo></EditPostCompo>
    <FooterCompo></FooterCompo>
</template>

<script>
  import HeaderCompo from "@/components/HeaderCompo";
  import FooterCompo from "@/components/FooterCompo";
  import EditPostCompo from "@/components/EditPostCompo";
  export default {
    name: "EditPostView",
    components: {HeaderCompo, EditPostCompo, FooterCompo},
  }
</script>