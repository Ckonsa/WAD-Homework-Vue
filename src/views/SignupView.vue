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
  components: {HeaderCompo, SignupCompo, FooterCompo},
}
</script>

  <style scoped>
  .signup-container {
      flex-grow: 2;
      display: flex;
      flex-direction: column;
      height: 70%;
      align-content: center;
      justify-self: center;
      margin: 50px;
      background-color: var(--post-top-bottom-blue);
      border-radius: 15px;
      border: none;
  }
</style>
