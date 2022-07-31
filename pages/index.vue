<template>
<v-app>
  <HeroPage/>
  <Upgrade/>
  <OurServices/>
  <WhyBankMonie/>
  <FrequentlyAskQuestion/>
</v-app>
</template>

<script>
import HeroPage from "~/components/landingPage/HeroPage";
import Upgrade from "../components/landingPage/Upgrade";
import WhyBankMonie from "../components/landingPage/WhyBankMonie";
import FrequentlyAskQuestion from "~/components/landingPage/FrequentlyAskQuestion";
import OurServices from "~/components/landingPage/OurServices";
export default {
  name: "home",
  components: { OurServices, FrequentlyAskQuestion, WhyBankMonie, Upgrade, HeroPage}
}
</script>

<style scoped>

</style>
