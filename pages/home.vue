<template>
<v-app>
  <HeroPage/>
  <Upgrade/>
</v-app>
</template>

<script>
import HeroPage from "~/components/landingPage/HeroPage";
import Upgrade from "../components/landingPage/Upgrade";
export default {
  name: "home",
  components: {Upgrade, HeroPage}
}
</script>

<style scoped>

</style>
