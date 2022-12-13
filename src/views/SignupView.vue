<template>
  <HeaderCompo></HeaderCompo>
  <SignupCompo></SignupCompo>
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
