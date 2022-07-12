<template>
<div class="bg-img">
  <LandingPageHeader/>
  <div class=" md:tw-flex tw-justify-between tw-items-center tw-m-auto md:tw-w-10/12 tw-pt-28 tw-px-4">
    <div class="provide-pos">
      <div class="md:tw-text-left tw-text-center md:tw-text-6xl tw-text-4xl">
        <span class="md:tw-flex">Providing <span class="afford"> Affordable</span></span>
        <h2>Financial Services.</h2>
      </div>

      <p class="md:tw-text-left md:tw-w-96 md:tw-mt-6 tw-text-center tw-text-base">At bankmonie we provide financial services in your local community and make money while at it.</p>
      <div class="tw-flex tw-justify-center md:tw-block md:tw-my-14 tw-my-9">
      <v-btn
        color="#009CDE"
        depressed
        elevation="2"
        large
        class=""
      >Get POS Terminal</v-btn>
      </div>
    </div>
    <div class="hero-img-dv">
    <img class="tw-hidden md:tw-block" src="/man-hero.png" alt="">
      <img class="md:tw-hidden tw-w-112" src="/man-hero-mobile.png" alt="">
    </div>
  </div>
</div>
</template>

<script>
import LandingPageHeader from "~/components/landingPage/LandingPageHeader";
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
.hero-img-page{
  /*display: flex;*/
  /*justify-content: space-between;*/
  /*width: 83%;*/
  /*margin: auto;*/
}
.provide-pos{
  font-family: Gelion;
  font-style: normal;
  font-weight: 700;
  color: #012169;
}
.provide-pos .afford{
  color: #009CDE;
}
.provide-pos p{
  font-family: Gelion;
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
.hero-img-page .hero-img-dv{
  border-radius: 20px 20px 0 0;
}

.v-btn{
  text-transform: capitalize!important;
}

</style>
