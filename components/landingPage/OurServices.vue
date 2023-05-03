<template>
<div id="services" class="md:tw-w-4/6 tw-w-5/6 tw-pt-20 tw-m-auto">
  <div >
    <h3 class="tw-text-4xl tw-font-bold tw-px-9 md:tw-px-0 md:tw-text-5xl md:tw-font-bold">Power Your Business with a Comprehensive <span style="color:#009CDE;"> POS Device</span></h3>
  </div>
  <div class="md:tw-flex md:tw-m-auto tw-justify-between tw-px-9 md:tw-px-0">
    <div  class="md:tw-w-17 tw-mt-5">
      <div class="left" v-for="(data,i) in leftList" :key="i">
        <img class="tw-w-9 tw-h-9 tw-mb-6 tw-mt-8 hover:tw-rotate-45 tw-transform "  :src="data.image" alt="">
        <h2 class="tw-text-2xl tw-mb-3 tw-font-bold" v-html="data.title"></h2>
        <div >
          <h4 v-html="data.description">

          </h4>
        </div>
      </div>
    </div>
    <div class="md:tw-mx-6 md:tw-mt-64 tw-hidden md:tw-block">
      <img src="/lady-image.png" alt="">
    </div>
    <div  class="md:tw-w-17 md:tw-pr-5 tw-mt-5">
      <div class="right" v-for="(data,i) in rightList" :key="i">
        <img class="tw-w-9 tw-h-9 tw-mb-6 tw-mt-8 hover:tw-rotate-45 tw-transform"  :src="data.image" alt="">
        <h2 class="tw-text-2xl tw-mb-3 tw-font-bold" v-html="data.title"></h2>
        <div >
          <h4 v-html="data.description">

          </h4>
        </div>
      </div>

    </div>

  </div>
</div>
</template>

<script>
export default {
  name: "OurServices",
  data(){
    return{
      leftList:[
        {
          image:'/dollar-image.svg',
          title:'Business-First POS',
          description:'<span class="tw-font-normal">We have<span class="tw-font-bold">  designed a POS </span>device that prioritizes the needs of businesses. ' +
            'BankMe offers competitive rates, fast settlement times, and tailored' +
            'features to help streamline their payment processes and grow their revenue.</span>'
        },
        {
          image:'/green-bg.svg',
          title:'Secure Payments',
          description:'<span>Our POS<span class="tw-font-bold"> device</span> prioritizes the safety of your business and customers.' +
            'With end-to-end encryption, you can trust that sensitive data is always ' +
            ' protected during the payment process and that every fraudulent transaction is flagged.</span>'
        },
        {
          image:'/blue-bg.svg',
          title:'Instant Dispute Resolution',
          description:'<span>The <span class="tw-font-bold">BankMe POS</span> is equipped with instant dispute resolution on failed transactions.' +
            'No more waiting for days or even weeks to resolve payment issues, ' +
            ' so you and your customers can continue with your transactions seamlessly.</span>'
        },
      ],
      rightList:[
        {
          image:'/lemon-bg.svg',
          title:'<span>A DIY Transactions </span><span style="color: #01E068">Dashboard</span>',
          description:'<span>Our dashboard<span class="tw-font-bold"> provides</span> a clear and concise overview of your transactions,' +
            'allowing you to quickly identify discrepancies, easily reconcile all your transactions and gain ' +
            'a better understanding of your business finances.</span>'
        },
        {
          image:'/blue-bg.svg',
          title:'Transfer to any bank account',
          description:'<span>With our <span class="tw-font-bold">POS device</span>, transferring funds to any bank account in Nigeria has never been easier.' +
            'Our user-friendly interface allows merchants and agents to transfer payments quickly and securely.</span>'
        },
        {
          image:'/dark-blue-bg.png',
          title:'Compatible With All Card Types',
          description:'<span> BankMe <span class="tw-font-bold">POS</span> is compatible with all card types, including Visa, Verve, and Mastercard. ' +
            'Your customers can easily pay for their purchases using the card they prefer, without any limitations</span>'
        },
      ]

    }
  }

}
</script>

<style scoped>
h4{
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #808080;
}
.left{
  min-height: 300px;
}
.right{
  min-height: 300px;
}
</style>
