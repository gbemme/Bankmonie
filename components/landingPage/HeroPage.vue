<template>
<div class="bg-img">
  <LandingPageHeader/>
  <div id="home" class=" md:tw-flex tw-justify-between tw-items-center tw-m-auto md:tw-w-10/12 tw-pt-28 tw-px-4">
    <div class="provide-pos">
      <div class="md:tw-text-left tw-text-center md:tw-text-6xl tw-text-4xl animate__animated animate__heartBeat">
        <span class="md:tw-flex">Providing<span class="afford">Affordable</span></span>
        <h2>Financial Services.</h2>
      </div>

      <p class="md:tw-text-left md:tw-w-96 md:tw-mt-6 tw-text-center tw-text-base">At bankmonie we provide financial services in your local community and make money while at it.</p>
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
        <img draggable="false" class="md:tw-w-72 animate__animated animate__backInDown  " src="/income-rate.svg" alt="">
      </div>
      <div class="tw-flex md:tw--ml-16 md:tw-mt-28">
        <img class="md:tw-w-72 animate__animated animate__backInRight" src="/income-rate-two.svg" alt="">
      </div>
       <div class="tw-flex md:tw-items-end md:tw-justify-end md:tw-mt-3 md:tw--mr-16">
        <img class="md:tw-w-72 animate__animated animate__backInUp" src="/income-rate-two.svg" alt="">
       </div>
    </div>
      <img class="md:tw-hidden tw-w-112" src="/man-hero-mobile.png" alt="">
    </div>

  </div>
</div>
</template>

<script>
import LandingPageHeader from "~/components/landingPage/LandingPageHeader";
import "animate.css"
export default {
  name: "HeroPage",
  components:{LandingPageHeader}
}
</script>

<style scoped>
.bg-img{
  background-image: url("./static/MacBook Pro - 12home-bg.png");
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
  font-size: 18px;
  line-height: 26px;
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
  background-image: url("/hero-image-guy.png");
  background-size: cover;
  background-repeat: no-repeat;
  height: 600px;
  width: 600px;

}

.v-btn{
  text-transform: capitalize!important;
}

</style>
