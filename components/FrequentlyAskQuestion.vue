<template>
<div class="faq">
  <div class="md:tw-w-3/4 md:tw-m-auto md:tw-pb-20 tw-w-full tw-px-10 tw-pb-8">
    <div class="faq-heading tw-mb-8 tw-text-4xl tw-font-bold md:tw-w-4/12">
      <h2>Frequently <span style="color: #009CDE">Asked</span>  Questions.</h2>
    </div>
    <div class="form">
        <v-row justify="center">
          <v-expansion-panels>
            <v-expansion-panel class="tw-mb-4 tw-rounded-2xl"
              v-for="(data,i) in questions"
              :key="i">

              <v-expansion-panel-header>{{data.question}}</v-expansion-panel-header>
              <v-expansion-panel-content>
                {{data.answer}}
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-row>
    </div>
    <div class="md:tw-flex tw-justify-between tw-mt-4 tw-mb-20">
      <h4 class="question tw-w-12/12 tw-text-2xl tw-font-normal tw-mb-4">Still Have Questions we Have not Answered?</h4>
      <button class="btn-talk tw-w-40 tw-h-14 tw-rounded-2xl tw-text-base tw-font-semibold">Talk to Us</button>
    </div>
    <div class="md:tw-flex tw-justify-center">
      <img class="tw-hidden md:tw-block" src="/become-agent.png" alt="">
      <img class="md:tw-hidden" src="/round-mobile-with-button.png" alt="">
    </div>
  </div>
  <div class="contact-section tw-px-10">
    <div class="md:tw-w-3/4 md:tw-flex md:tw-flex-row md:tw-m-auto md:tw-justify-between tw-flex-col tw-pt-16">
      <div class="md:tw-w-3/12 tw-mr-16">
        <span class="tw-flex tw-mb-5 tw-items-center tw-font-semibold"><img class="tw-mb-" src="/bank-logo.png" alt="">ankMonie</span>
        <small>We give instant settlements on our platform because we know that you would</small>
      </div>
      <div class="md:tw-flex md:tw-flex-row md:tw-justify-between md:tw:w-6/12 tw-flex">
      <div class="tw-mr-16">
        <h3 class="navigate tw-text-xl tw-mb-4">Navigate</h3>
        <p>About Us</p>
        <p>FAQs</p>
        <p>About Us</p>
      </div>
      <div class="tw-ml-16">
        <h3 class="service-follow-us tw-text-xl tw-font-semibold tw-mb-4">Services</h3>
        <p>Agency Banking</p>
        <p>Services</p>
        <p>Services</p>
      </div>
      </div>
      <div class="md:tw-block md:tw-w-3/12">
        <img src="/social-icon.svg" alt="">
      </div>
    </div>
    <div class="footer md:tw-w-3/4 md:tw-m-auto md:tw-flex md:tw-justify-end tw-w-full tw-py-6 tw-text-sm tw-font-semibold">
      <span style="color: #002433">Bank<span style="color: #009CDE">Monie</span> <span>|2021 All Rights Reserved</span></span>
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
          question:"What is you Name",
          answer:"At a bankMonie we provide a financial services in your local community and make money while on it"
        },
        {
          question:"What is you Name",
          answer:"At a bankMonie we provide a financial services in your local community and make money while on it"
        },
        {
          question:"What is you Name",
          answer:"At a bankMonie we provide a financial services in your local community and make money while on it"
        },
        {
          question:"What is you Name",
          answer:"At a bankMonie we provide a financial services in your local community and make money while on it"
        },
        {
          question:"What is you Name",
          answer:"At a bankMonie we provide a financial services in your local community and make money while on it"
        }

      ]
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
