<template>
  <div>
    <div class="tw-w-64 tw-mb-10">
      <span class="tw-text-3xl tw-font-semibold">Let's help you <span style="color: #009CDE">get started</span></span>
    </div>
    <p class="tw-w-118 tw-font-normal tw-text-lg tw-leading-5">What best describe your business</p>
    <div @click="selectBusinessType('Registered Business')" :class="user.businessType==='Registered Business'?'active':'non-active'" class="form-one tw-flex md:tw-w-25 tw-rounded-xl md:tw-h-9 tw-h-9 tw-items-center tw-pl-3 tw-py-p-3 tw-mb-2">
      <div :class="user.businessType==='Registered Business'?'bg-active':'bg-non-active'" class="tw-w-3 tw-h-3 tw-mr-3"> </div>
      <small>Registered Business</small>
    </div>
    <div @click="selectBusinessType('Individual Business')" :class="user.businessType==='Individual Business'?'active':'non-active'" class="form-one tw-flex md:tw-w-25 tw-rounded-xl md:tw-h-9 tw-h-9 tw-items-center tw-pl-3 tw-py-p-3">
      <div :class="user.businessType==='Individual Business'?'bg-active':'bg-non-active'" class="tw-w-3 tw-h-3 tw-mr-3"> </div>
      <small>Individual Business</small>
    </div>
    <div class="next tw-mt-12">
      <BaseButton :is-disable="user.businessType===''" @click="next"/>
    </div>
  </div>

</template>

<script>
import BaseButton from "./BaseButton";
export default {
  name: "LetHelpYouGetStartedForm",
  components: {BaseButton},
  data(){
    return{
      user:{
        businessType:""

      }
    }
  },
  props:{
    steps: [Number]
  },
  methods:{
    next(){
      sessionStorage.setItem('userDetails',JSON.stringify(this.user))

      this.$emit('increase')
    },
    selectBusinessType(type){
      console.log(type)
     return this.user.businessType=type
    }
  }
}
</script>

<style scoped>
.form-one{
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: -0.03em;
  color: #808080;
}
/*.form-one div{*/
/*  box-sizing: border-box;*/
/*  border: 1px solid #000000;*/
/*}*/
.active{
  border: 0.3px solid #009CDE;
}
.non-active{
  border: 0.3px solid #808080;
}
.bg-active{
  background-color: #009CDE;
  border-radius: 11px;
}
.bg-non-active{
  border-radius: 11px;
  box-sizing: border-box;
  border: 1px solid #000000;
}
.form small{
  width: 94px;
  height: 14px;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: -0.03em;
  color: #808080;
}
span{
  color: #000000;
}
p {
  height: 16.74px;
  letter-spacing: -0.03em;
  color: #002433;
}

</style>
