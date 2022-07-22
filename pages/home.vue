<template>
<v-app>
  <HeroPage/>
  <Upgrade/>
  <WhyBankMonie/>
  <FrequentlyAskQuestion/>
</v-app>
</template>

<script>
import HeroPage from "~/components/landingPage/HeroPage";
import Upgrade from "../components/landingPage/Upgrade";
import WhyBankMonie from "../components/WhyBankMonie";
import FrequentlyAskQuestion from "../components/FrequentlyAskQuestion";
export default {
  name: "home",
  components: {FrequentlyAskQuestion, WhyBankMonie, Upgrade, HeroPage}
}
</script>

<style scoped>

</style>
