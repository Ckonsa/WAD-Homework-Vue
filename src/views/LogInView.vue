<template>
    <HeaderCompo></HeaderCompo>
    <div class=login-container>
      <LoginCompo></LoginCompo>
    </div>
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
  
    <style scoped>
.login-container {
        flex-grow: 2;
        display: flex;
        flex-direction: column;
        height: 70%;
        align-content: center;
        justify-self: center;
        margin: 50px 20% 50px 20%;
        background-color: var(--post-top-bottom-blue);
        border-radius: 15px;
        border: none;
    }
  
    @media screen and (max-width: 550px) {
    .login-container {
          margin: 50px;
      }
  }
  </style>
  