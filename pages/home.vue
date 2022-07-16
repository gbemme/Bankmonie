<template>
<v-app>
  <HeroPage/>
  <Upgrade/>
  <WhyBankMonie/>
</v-app>
</template>

<script>
import HeroPage from "~/components/landingPage/HeroPage";
import Upgrade from "../components/landingPage/Upgrade";
import WhyBankMonie from "../components/WhyBankMonie";
export default {
  name: "home",
  components: {WhyBankMonie, Upgrade, HeroPage}
}
</script>

<style scoped>

</style>
