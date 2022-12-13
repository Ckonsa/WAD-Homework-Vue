<template>
    <HeaderCompo></HeaderCompo>
    <LoginCompo></LoginCompo>
    <FooterCompo></FooterCompo>
  </template>
  
  <script>
  import HeaderCompo from "@/components/HeaderCompo";
  import FooterCompo from "@/components/FooterCompo";
  import LoginCompo from "@/components/LoginCompo";
  export default {
    name: "LoginView",
    components: {HeaderCompo, LoginCompo, FooterCompo},
  }
  </script> 