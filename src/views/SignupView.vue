<template>
  <HeaderCompo></HeaderCompo>
    <p>Hello World!</p>
  <FooterCompo></FooterCompo>
</template>

<script>
import HeaderCompo from "@/components/HeaderCompo";
import FooterCompo from "@/components/FooterCompo";
export default {
    name: "SignupView",
  components: {FooterCompo, HeaderCompo},
}
</script>

