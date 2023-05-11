<template>
<div>
  <div class="tw-block md:tw-w-3/4 md:tw-flex md:tw-flex-row md:tw-m-auto md:tw-justify-between tw-flex-col tw-pt-16">
    <div class=" md:tw-w-15.9 md:tw-mr-16">
    <img @click="$router.push('/')" class="tw-cursor-pointer tw-w-36 md:tw--mt-6 md-tw--mb-6" src="/Bankme-logo.svg" alt="">
      <!-- <span class="tw-flex tw-mb-5 tw-items-center tw-font-semibold"><img src="/bank-logo.png" alt="">ankMe</span> -->
      <p class="tw-text-base tw-font-normal tw-p-1 md:tw-mt-3 ">A better, affordable way to collect payments.</p>
      <p class="tw-text-base tw-font-normal tw-p-1 md:tw--mt-6">
        BankMe delivers exceptional payment experiences that drives business growth and keep your customers coming back
      </p>
    </div>
    <div class="md:tw-flex md:tw-flex-row md:tw-justify-between md:tw:w-6/12 tw-flex">
      <div class="tw-mr-16">
        <h3 class="navigate tw-text-xl tw-mb-4">Navigate</h3>
        <p class="tw-cursor-pointer" @click="$emit('navigate', '#about')">About Us</p>
        <p class="tw-cursor-pointer" @click="$emit('navigate','#faq')">FAQs</p>
        <!-- <p>About Us</p> -->
      </div>
      <div class="tw-ml-16">
        <h3 class="service-follow-us tw-text-xl tw-font-semibold tw-mb-4">Services</h3>
        <p>Agency Banking</p>
        <p class="tw-cursor-pointer" @click="$emit('navigate','#services')">Services</p>
        <!-- <p>Services</p> -->
      </div>
    </div>
    <div>
        <h3 class="service-follow-us tw-text-xl tw-font-semibold tw-mb-4">Follow Us</h3>
        <div class="tw-flex tw-justify-between tw-w-34 tw-h-5">
          <a href="https://www.facebook.com/" target="_blank">
            <img src="~/static/facebook-logo.svg" alt="FACEBOOK" ref="https://www.facebook.com/">
          </a>
          <a href="https://www.twitter.com/BankMeHQ" target="_blank">
            <img src="~/static/twitter-logo.svg" alt="" ref="https://www.twitter.com/">
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <img src="~/static/instagram-icon.svg" alt="" ref="https://www.instagram.com/">
          </a>
          <a href="https://www.whatsapp.com/" target="_blank">
            <img src="~/static/whatsapp-logo-fill.svg" alt="" ref="https://www.whatsapp.com/">
          </a>
        </div>
    </div>
  </div>
  <div class="footer md:tw-w-3/4 md:tw-m-auto md:tw-flex md:tw-justify-end tw-w-full tw-py-6 tw-text-sm tw-font-semibold">
    <span style="color: #002433">BankMe by <span style="color: #009CDE">Mango Technologies Limited</span> <span>|{{d.getFullYear()}} All Rights Reserved</span></span>
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
