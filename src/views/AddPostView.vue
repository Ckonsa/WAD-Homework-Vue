<template>
    <HeaderCompo></HeaderCompo>
    <AddPostCompo></AddPostCompo>
    <FooterCompo></FooterCompo>
</template>

<script>
  import HeaderCompo from "@/components/HeaderCompo";
  import FooterCompo from "@/components/FooterCompo";
  import AddPostCompo from "@/components/AddPostCompo";
  export default {
    name: "AddPostView",
    components: {HeaderCompo, AddPostCompo, FooterCompo},
  }
</script>