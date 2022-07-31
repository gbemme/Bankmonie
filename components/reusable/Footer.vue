<template>
<div>
  <div class="tw-block md:tw-w-3/4 md:tw-flex md:tw-flex-row md:tw-m-auto md:tw-justify-between tw-flex-col tw-pt-16">
    <div class=" md:tw-w-15.9 md:tw-mr-16">
      <span class="tw-flex tw-mb-5 tw-items-center tw-font-semibold"><img src="/bank-logo.png" alt="">ankMonie</span>
      <p class="tw-text-sm tw-font-normal">We give instant settlements on our platform because we know that you would</p>
    </div>
    <div class="md:tw-flex md:tw-flex-row md:tw-justify-between md:tw:w-6/12 tw-flex">
      <div class="tw-mr-16">
        <h3 class="navigate tw-text-xl tw-mb-4">Navigate</h3>
        <p class="tw-text-sm tw-font-normal">About Us</p>
        <p class="tw-text-sm tw-font-normal">FAQs</p>
        <p class="tw-text-sm tw-font-normal">About Us</p>
      </div>
      <div class="tw-ml-16">
        <h3 class="service-follow-us tw-text-xl tw-font-semibold tw-mb-4">Services</h3>
        <p class="tw-text-sm tw-font-normal">Agency Banking</p>
        <p class="tw-text-sm tw-font-normal">Services</p>
        <p class="tw-text-sm tw-font-normal">Services</p>
      </div>
    </div>
    <div>
      <div class="tw-mb-5">
        <h3 class="tw-text-xl tw-font-bold">Follow Us</h3>
      </div>
      <div class="tw-flex tw-justify-between tw-w-34 tw-h-5">
        <img src="~/static/facebook-logo.svg" ref="www.facebook.com" alt="">
        <img src="~/static/twitter-logo.svg" ref="www.twitter.com" alt="">
        <img  ref="www.instagram.com" src="~/static/instagram-icon.svg" alt="">
        <img ref="www.telegram.com" src="~/static/telegram-logo.svg" alt="">
      </div>
    </div>
  </div>
  <div class="footer md:tw-w-3/4 md:tw-m-auto md:tw-flex md:tw-justify-end tw-w-full tw-py-6 tw-text-sm tw-font-semibold">
    <span style="color: #002433">Bank<span style="color: #009CDE">Monie</span> <span>|{{d.getFullYear()}} All Rights Reserved</span></span>
  </div>
</div>
</template>

<script>
export default {
  name: "Footer",
  data(){
    return{
      d: new Date()
    }
  }
}
</script>

<style scoped>
.navigate{
  color: #01E068;
}
.service-follow-us{
  color: #002433;
}
p{
  color: #808080;
}

</style>
