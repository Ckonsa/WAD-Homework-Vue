<template>
  <HeaderCompo></HeaderCompo>
  <div class=signup-container>
    <SignupCompo></SignupCompo>
  </div>
  <FooterCompo></FooterCompo>
</template>

<script>
import HeaderCompo from "@/components/HeaderCompo";
import FooterCompo from "@/components/FooterCompo";
import SignupCompo from "@/components/SignupCompo";
export default {
    name: "SignupView",
  components: {FooterCompo, HeaderCompo, SignupCompo},
}

</script>

  <style scoped>
  .signup-container {
      flex-grow: 2;
      display: flex;
      flex-direction: column;
      height: 70%;
      /* max-width: 700px; */
      align-content: center;
      justify-self: center;
      margin-top: 50px;
      margin-left: 15%;
      margin-right: 15%;
      background-color: var(--post-top-bottom-blue);
      border-radius: 15px;
      border: none;
  }
</style>
