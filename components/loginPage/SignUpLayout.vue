<template>
  <div class="wrapper" id="SignUpLayout">
    <div class="header">
      <v-app-bar
        absolute
        app
        elevation="0"
        color="transparent"
        class="md:tw-w-10/12 tw-flex tw-m-auto tw-justify-between tw-items-center"
      >
      <img @click="$router.push('/')" class="tw-cursor-pointer tw-mt-4 tw-w-36 md:tw-w-44" src="/Bankme-logo.svg" alt="">

        <v-spacer class=" tw-hidden md:tw-block"></v-spacer>
<!--        <div class="login tw-hidden md:tw-block tw-text-sm tw-mt-6">-->
<!--          <v-btn-->
<!--            class="ma-2 md:tw-w-44 md:tw-h-14 tw-text-sm tw-font-semibold tw-rounded-xl"-->
<!--            outlined-->
<!--            color="#009CDE"-->
<!--          >-->
<!--            Log In-->
<!--          </v-btn>-->
<!--        </div>-->

      </v-app-bar>
    </div>
    <div class=" md:tw-w-10/12 md:tw-m-auto md:tw-mb-12 md:tw-pl-4">

      <div class="md:tw-flex md:tw-justify-between md:tw-mt-24">
        <div>
          <LetHelpYouGetStartedForm @increase="incrementStep" :steps="steps" v-if="steps===1"/>
          <LetHelpYourBusinessGetStartedForm @increase="incrementStep" :steps="steps" v-else-if="steps===2"/>
          <JustAMomentAlmostDoneForm v-else/>
        </div>

        <div class="female md:tw-block tw-hidden">
          <div class="female-bg tw-absolute tw--mr-44 animate__animated animate__fadeInTopRight"><img src="~/static/female-ambassador-bg.png" alt=""></div>
          <div class="tw-relative tw-mr-20"><img src="~/static/female-ambassador.png" alt=""></div>
        </div>
      </div>
    </div>
    <div class="md:tw-px-0 tw-px-8">
       <Footer/>
    </div>

  </div>
</template>

<script>
import Footer from "../reusable/Footer";
import LetHelpYouGetStartedForm from "../reusable/LetHelpYouGetStartedForm";
import JustAMomentAlmostDoneForm from "../reusable/JustAMomentAlmostDoneForm";
import LetHelpYourBusinessGetStartedForm from "../reusable/LetHelpYourBusinessGetStartedForm";
export default {
  name: "SignUpLayout",
  components: {LetHelpYourBusinessGetStartedForm, JustAMomentAlmostDoneForm, LetHelpYouGetStartedForm, Footer},
  data(){
    return{
      steps: 1
    }
  },
  methods:{
    incrementStep(){
      this.steps++
    }
  }
}

</script>

<style scoped>
.wrapper{
  background: linear-gradient(181.04deg, #FAFDFF 0.89%, #FFFFFF 108.71%);
}
.heading{
  color: #002433;
  height: 57px;
  letter-spacing: -0.03em;
}
log-in-btn{
  margin: 8px;
  color: #002433;
  width: 176px;
  height: 56px;
  font-size: 14px;
  font-weight: 600;
}
.female-bg{
  right: 350px;
  top: 80px;
}

</style>
