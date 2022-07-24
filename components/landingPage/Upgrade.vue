<template>
<div class="wrapper">
  <div class="md:tw-w-96 tw-m-auto tw-px-4 md:tw-px-0 md:tw-text-center md:tw-pt-24 tw-pt-16">
  <span class="md:tw-text-4xl tw-text-3xl md:tw-font-bold">Upgrade your <span style="color: #009CDE;">business</span> & <span style="color: #01E068;">earn</span> more with us</span>
  </div>
  <div class="md:tw-w-3/6 md:tw-m-auto tw-hidden"><img src="/img-square.png" alt=""></div>
  <div class="tw-mt-9 md:tw-flex md:tw-justify-center md:tw-mt-7">
    <div class=" md:tw-bg-white md:tw-mr-8 md:tw-shadow-sm md:tw-rounded-xl md:tw-w-80 md:tw-px-2 md:tw-py-2">
      <p class="tw-px-9 tw-font-normal tw-text-base tw-text-sm md:tw-pt-2">With <span class="md:tw-font-bold">BankMonie</span> you can make money by becoming a mobile money agent and provide banking services to your customers.</p>
    </div>
  <div class=" md:tw-bg-white md:tw-shadow-sm md:tw-rounded-xl md:tw-w-80 md:tw-px-2 md:tw-py-2">
      <p class="tw-px-9 tw-text-sm tw-font-normal md:tw-pt-2">We also enable you to provide services such as cash transfer, cash withdrawal and airtime top-up reliably and profitably.</p></div>
  </div>
  <div class="md:tw-flex md:tw-justify-center md:tw-w-3/4 tw-m-auto tw-pt-12">
    <img  src="/pos-images.png" alt="">
  </div>
  <div class="md:tw-w-3/4 md:tw-m-auto tw-w-5/6 tw-pt-20">
  <h3 class="tw-text-4xl tw-font-bold tw-px-9 md:tw-px-0 md:tw-text-5xl md:tw-font-bold">Explore our<span style="color:#009CDE;"> services</span></h3>
  </div>
  <div class="md:tw-flex md:tw-w-3/4 md:tw-m-auto tw-justify-center md:tw-items-center tw-px-9 md:tw-px-0">
    <div  class="md:tw-w-96 md:tw-pr-5">
       <div v-for="(data,i) in leftList" :key="i">
        <img class="tw-w-9 tw-h-9 tw-mb-6 tw-mt-8"  :src="data.image" alt="">
        <h2 class="tw-text-2xl tw-mb-3 tw-font-bold" v-html="data.title"></h2>
         <div v-html="data.description"></div>
      </div>
    </div>
    <div class="md:tw-mx-6 tw-hidden md:tw-block">
      <img src="/lady-image.png" alt="">
    </div>
    <div  class="md:tw-w-96 md:tw-pr-5">
      <div v-for="(data,i) in rightList" :key="i">
        <img class="tw-w-9 tw-h-9 tw-mb-6 tw-mt-8"  :src="data.image" alt="">
        <h2 class="tw-text-2xl tw-mb-3 tw-font-bold" v-html="data.title"></h2>
        <div v-html="data.description"></div>
      </div>

    </div>

  </div>

</div>
</template>

<script>
export default {
  name: "Upgrade",
  data(){
    return{
      leftList:[
        {
          image:'/dollar-image.svg',
          title:'Agency Banking',
          description:'<span class="tw-font-normal">With <span class="tw-font-bold">Bankmonie</span> you can make money by becoming a ' +
            'mobile money agent and provide banking services' +
            ' to your SMEs and businesses</span>'
        },
        {
          image:'/green-bg.svg',
          title:'Service Name',
          description:'<span>With <span class="tw-font-bold">Bankmonie</span> you can make money by becoming a ' +
            'mobile money agent and provide banking services' +
            ' to your SMEs and businesses</span>'
        },
        {
          image:'/blue-bg.svg',
          title:'Service Name',
          description:'<span>With <span class="tw-font-bold">Bankmonie</span> you can make money by becoming a ' +
            'mobile money agent and provide banking services' +
            ' to your SMEs and businesses</span>'
        },
      ],
      rightList:[
        {
          image:'/lemon-bg.svg',
          title:'<span>Digital </span><span style="color: #01E068">Banking</span>',
          description:'<span>With <span class="tw-font-bold">Bankmonie</span> you can make money by becoming a ' +
            'mobile money agent and provide banking services' +
            ' to your SMEs and businesses</span>'
        },
        {
          image:'/blue-bg.svg',
          title:'Agency Banking',
          description:'<span>With <span class="tw-font-bold">Bankmonie</span> you can make money by becoming a ' +
            'mobile money agent and provide banking services' +
            ' to your SMEs and businesses</span>'
        },
        {
          image:'/dark-blue-bg.png',
          title:'Agency Banking',
          description:'<span>With <span class="tw-font-bold">Bankmonie</span> you can make money by becoming a ' +
            'mobile money agent and provide banking services' +
            ' to your SMEs and businesses</span>'
        },
      ]

    }
  }
}
</script>

<style scoped>
.wrapper{
  background: linear-gradient(180deg, #F0FAFF -20%, #F5FCFF 0.75%, #FFFFFF 78.04%);
}

</style>
