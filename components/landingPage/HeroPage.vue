<template>
<div class="bg-img">
  <LandingPageHeader @navigate="goToPage"/>
  <div id="home" class=" md:tw-flex tw-justify-between tw-items-center tw-m-auto md:tw-w-10/12 tw-pt-28 tw-px-4">
    <div class="provide-pos">
      <div class="md:tw-text-left tw-text-center md:tw-text-4 tw-text-4xl animate__animated animate__heartBeat">
        <span class="">Seamless and Delightful</span>
        <span class="afford">In-Person Payments </span>
        <h2>for Your Business</h2>
      </div>

      <p class="md:tw-text-left md:tw-w-96 md:tw-mt-6 tw-text-center tw-text-3xl">
        BankMe makes it easy for you to accept and process payments with
        our POS terminals. No more high fees or slow payment processing.
        Accept payments from customers faster than ever before.
      </p>
      <div class="tw-flex tw-justify-center md:tw-block md:tw-my-14 tw-my-9">
      <v-btn
        color="#009CDE"
        depressed
        elevation="2"
        large
        to="/signUp"
        class="white--text font-weight-bold"
      >Get POS Terminal</v-btn>
      </div>
    </div>
    <div>
    <div class="hero-img-dv tw-hidden md:tw-block">
      <div class="tw-flex md:tw-items-end md:tw-justify-end md:tw--mr-16 md:tw-mt-11 tw-transform hover:tw-scale-90">
<!--        <img draggable="false" class="md:tw-w-72 animate__animated animate__backInDown  " src="/income-rate.svg" alt="">-->
      </div>
      <div class="tw-flex md:tw--ml-16 md:tw-mt-28">
<!--        <img class="md:tw-w-72 animate__animated animate__backInRight" src="/income-rate-two.svg" alt="">-->
      </div>
       <div class="tw-flex md:tw-items-end md:tw-justify-end md:tw-mt-3 md:tw--mr-16">
<!--        <img class="md:tw-w-72 animate__animated animate__backInUp" src="/income-rate-two.svg" alt="">-->
       </div>
    </div>
      <img class="md:tw-hidden tw-w-112 tw-ml-5" src="/new-hero-guy.png" alt="">
    </div>

  </div>
</div>
</template>

<script>
import LandingPageHeader from "~/components/landingPage/LandingPageHeader";
import "animate.css"
export default {
  name: "HeroPage",
  components:{LandingPageHeader},
  methods:{
    goToPage(id){
      this.$emit('navigate',id)
    }
  }
}
</script>

<style scoped>
.bg-img{
  background: #E5F7FF;
  /*background: linear-gradient(181.04deg, #EBF9FF 0.89%, #FFFFFF 108.71%);*/
  /* background-image: url("./static/MacBook Pro - 12home-bg.png"); */
  background-repeat: no-repeat;
  background-size: cover;
}
.animate__animated.animate__backInDown{
  animation-duration: 3s;
}
.animate__animated.animate__backInUp{
  animation-duration: 3s;
}
.animate__animated.animate__backInRight{
  animation-duration: 3s;
}
.provide-pos{
  font-style: normal;
  font-weight: 700;
  color: #012169;
  font-family: Gelion,serif;
}
.provide-pos .afford{
  color: #009CDE;
}
.provide-pos p{
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: -0.02em;
  color: #808080;
}
.provide-pos button{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #009CDE;
  border-radius: 12px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: -0.02em;
  color: #FFFFFF;
}
.hero-img-dv{
  background-image: url("/new-hero-guy.png");
  background-size: cover;
  background-repeat: no-repeat;
  height: 600px;
  width: 600px;
  margin-bottom: -40px;

}

.v-btn{
  text-transform: capitalize!important;
}

</style>
