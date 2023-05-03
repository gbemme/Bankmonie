<template>
<v-app>
  <HeroPage @navigate="goToPage"/>
  <!-- <Transition name="fade" mode="out-in"> -->
    <Upgrade/>
  <!-- </Transition>  -->
  <OurServices/>
  <!-- <Transition name="fade" mode="out-in"> -->
    <WhyBankMonie class="md:tw-mb-16"/>
   <!-- </Transition> -->
  <FrequentlyAskQuestion @navigate="goToPage"/>
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
  components: { OurServices, FrequentlyAskQuestion, WhyBankMonie, Upgrade, HeroPage},
  methods:{
    goToPage(id){
      setTimeout(()=>{
        this.$scrollToTop(id);
      }, 300)
    },
  }
}
</script>

<style scoped>

</style>
