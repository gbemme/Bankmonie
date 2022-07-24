<template>
<div id="services" class="md:tw-w-4/6 tw-w-5/6 tw-pt-20 tw-m-auto">
  <div >
    <h3 class="tw-text-4xl tw-font-bold tw-px-9 md:tw-px-0 md:tw-text-5xl md:tw-font-bold">Explore our<span style="color:#009CDE;"> services</span></h3>
  </div>
  <div class="md:tw-flex  md:tw-m-auto tw-justify-between md:tw-items-center tw-px-9 md:tw-px-0">
    <div  class="md:tw-w-17 ">
      <div v-for="(data,i) in leftList" :key="i">
        <img class="tw-w-9 tw-h-9 tw-mb-6 tw-mt-8 hover:tw-rotate-45 tw-transform "  :src="data.image" alt="">
        <h2 class="tw-text-2xl tw-mb-3 tw-font-bold" v-html="data.title"></h2>
        <div >
          <h4 v-html="data.description">

          </h4>
        </div>
      </div>
    </div>
    <div class="md:tw-mx-6 tw-hidden md:tw-block">
      <img src="/lady-image.png" alt="">
    </div>
    <div  class="md:tw-w-17 md:tw-pr-5">
      <div v-for="(data,i) in rightList" :key="i">
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
h4{
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  letter-spacing: -0.02em;

  color: #808080;


}

</style>
