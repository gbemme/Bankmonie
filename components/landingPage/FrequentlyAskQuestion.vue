<template>
<div id="faq" class="faq md:tw-mt-8">
  <div class="md:tw-w-4/6 md:tw-px-4 md:tw-m-auto md:tw-pb-20 tw-w-full tw-px-10 tw-pb-8">
    <div class="faq-heading tw-mb-8 tw-text-4xl tw-font-bold md:tw-w-4/12">
      <h2>Frequently <span style="color: #009CDE">Asked</span>  Questions.</h2>
    </div>
    <div class="form">
        <v-row justify="center">
          <v-expansion-panels flat>
            <v-expansion-panel class="tw-mb-4"
              v-for="(data,i) in questions"
              :key="i">

              <v-expansion-panel-header class="tw-font-bold">{{ data.question }}</v-expansion-panel-header>
              <v-expansion-panel-content class="tw-font-extralight tw-text-gray-400">
                {{data.answer}}
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-row>
    </div>
    <div class="md:tw-flex tw-justify-between tw-mt-4 tw-mb-20">
      <h4 class="question tw-w-12/12 tw-text-2xl tw-font-normal tw-mb-4">Still Have Questions we Have not Answered?</h4>
      <a href="mailto:hello@bankme.africa">
      <button class="btn-talk tw-w-40 tw-h-14 tw-rounded-2xl tw-text-base tw-font-semibold">Talk to Us</button>
    </a>
    </div>
    <div class="md:tw-flex tw-justify-center">
      <div class="talk-to-us md:tw-flex md:tw-justify-center tw-rounded-3xl tw-hidden md:tw-block md:tw-w-full md:tw-h-full">
        <div class="tw-mt-16 tw-mb-12">
<!--          <h3 class="become-agent tw-flex tw-text-3xl tw-w-48">Become a BankMe agent</h3>-->
                <h3 class="become-agent tw-text-3xl tw-w-7/12">Become a BankMe Agent</h3>
        <span class="tw-w-22">
            <p class="tw-font-normal tw-text-base tw-w-80" style="color: #ffffff">
              Run your mobile money business with BankMe and make money with ease.
            </p>
          <a href="mailto:hello@bankme.africa" class="">
            <button style="background: #FFFFFF" class="tw-rounded-lg tw-font-semibold tw-text-base tw-text-primary-bankme tw-px-11 tw-py-3">Talk to us</button>
          </a>
        </span>
       </div>
      </div>
<!--        <img class="tw-hidden md:tw-block md:tw-w-full" src="/talk-to-us-bg.png" alt="">-->
<!--      <img class="tw-hidden md:tw-block md:tw-w-full" src="/become-agent.png" alt="">-->
      <div class="talk-to-us-mobile md:tw-hidden tw-pt-56 tw-pb-16 tw-items-center tw-h-full tw-w-full">
        <h3 class="become-agent tw-text-3xl tw-text-center tw-m-auto tw-w-48 tw-flex">Become a BankMe Agent</h3>
            <p class="tw-font-normal tw-text-center tw-w-64 tw-m-auto tw-text-base" style="color: #ffffff">
              Run your mobile money business with BankMe and make money with ease.
            </p>
          <a href="mailto:hello@bankme.africa" class="tw-flex tw-justify-center">
            <button style="background: #FFFFFF" class="tw-rounded-lg tw-font-semibold tw-text-base tw-text-primary-bankme tw-px-11 tw-py-3">Talk to us</button>
          </a>
      </div>
    </div>
  </div>
  <div class="contact-section tw-px-10">
    <div class="md:tw-w-3/4 md:tw-flex md:tw-flex-row md:tw-m-auto md:tw-justify-between tw-flex-col tw-pt-16">
      <div class=" md:tw-w-15.9 tw-mr-16">
        <img @click="$router.push('/')" class="tw-cursor-pointer tw-w-36 md:tw--mt-6 md-tw--mb-6" src="/Bankme-logo.svg" alt="">
        <!-- <span @click="$router.push('/')" class="tw-flex tw-items-center tw-text-3xl tw-font-semibold"><img class="tw-mb-3" src="/bank-logo.png" alt="">ankMe</span> -->
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
        <div class="tw-flex tw-items-center tw-justify-between tw-w-34 tw-h-5">
          <a href="https://www.facebook.com/" target="_blank">
            <img src="~/static/facebook-logo.svg" alt="FACEBOOK" ref="https://www.facebook.com/">
          </a>
          <a href="https://www.twitter.com/@BankMeHQ" target="_blank">
            <img src="~/static/twitter-logo.svg" alt="" ref="https://www.twitter.com/">
          </a>
          <a href="https://www.linkedin.com/company/bankme-by-mango-technologies-limited" target="_blank">
            <img src="~/static/linkedin-logo.svg" alt="" ref="https://www.linkedin.com/">
          </a>
          <a href="https://www.whatsapp.com/" target="_blank">
            <img src="~/static/whatsapp-logo-fill.svg" alt="" ref="https://www.whatsapp.com/09134001002">
          </a>
        </div>
    </div>
    </div>
    <div class="footer md:tw-w-3/4 md:tw-m-auto md:tw-flex md:tw-justify-end tw-w-full tw-py-6 tw-text-sm tw-font-semibold">
      <span style="color: #002433">Bank<span style="color: #009CDE">Me by Mango Technologies Limited</span> <span>|{{d.getFullYear()}} All Rights Reserved</span></span>
    </div>
    <div>

    </div>
  </div>

</div>

</template>

<script>
export default {
  name: "FrequentlyAskQuestion",
  data(){
    return{
      questions:[
        {
          question:'What is the best POS in Nigeria?',
          answer:"There are various good POS providers in Nigeria but the BankMe POS machine stands out amongst the rest for its instant settlements, competitive pricing, seamless onboarding and the ability to work with your existing bank."
        },
        {
          question:'How reliable is your POS Network ?',
          answer:"Our POS terminal is built with world class technology and a reliable payment infrastructure that completes POS transactions in seconds - we are here to serve you."
        },
        {
          question:'Would I need to open a new bank account to get a POS ?',
          answer:"No, Our POS works with your existing Nigerian bank account whether that’s a personal bank account or business account."
        },
        {
          question:'Can I get more than one BankMe POS terminal for my business?',
          answer:"Yes, large businesses can order multiple terminals to meet their needs."
        },
        {
          question:'How can customers reach you to rectify transaction issues ?',
          answer:"You can reach our customer support team via various channels including email, whatsapp call or our physical address."
        },
        {
          question:'Who is BankMe ?',
          answer: "BankMe is a product of Mango Technologies Limited. We offer financial services to help businesses and individuals actualize their financial goals and beyond by providing top-notch customer-centric solutions."
        },
        {
          question:'Do you have an office address ?',
          answer:"We're located at 279 Herbert Macaulay Way, Yaba, Lagos, Nigeria. You can reach out to us physically for support or through our other support channels (email, whatsapp, call, etc.). Also, we deliver nationwide, but don't worry if you're not in Lagos - we can still deliver our POS Device to anywhere in the country and support you while you use it."
        },
      ],
      d: new Date()
    }
  },
  methods:{
    printDate(){
      let d = 1
      console.log(this.d,this.questions)
      return d
    }
  }
}
</script>

<style scoped>
.faq{
  background: linear-gradient(181.04deg, #EBF9FF 0.89%, #FFFFFF 108.71%);
  padding-top: 75px;
}
.faq-heading{
  color: #002433;
}
.form{
  margin-bottom: 50px!important;
}
.question{
  color: #002433;
  width: 300px;
}
.talk-to-us{
  background-image: url("/talk-to-us-bg.png");
}
.talk-to-us-mobile{
  background-image: url("/talk-to-us-mobile.png");
  border-radius: 40px;
}
.become-agent{
  color: #FFFFFF;
}
.btn-talk{
  background-color: #002433;
  color: white;
  border-radius: 10px;
}
.contact-section{
  background: #FFFFFF;
}
.navigate{
  color: #01E068;
}
.service-follow-us{
  color: #002433;
}

</style>
