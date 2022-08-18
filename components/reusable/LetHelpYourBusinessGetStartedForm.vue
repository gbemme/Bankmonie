<template>
<div id="LetHelpYourBusinessGetStartedForm">
  <div class="let md:tw-w-64 md:tw-mt-20 tw-mt-24 md:tw-px-0 tw-px-8">
    <span class="let-help md:tw-text-2xl tw-font-bold">Let's help your Business <span style="color: #009CDE">get started</span></span>
  </div>
  <div class="input-side md:tw-mt-12 tw-mt-14 md:tw-px-0 tw-px-8">
    <validation-observer v-slot="{handleSubmit}">
    <form @submit.prevent="handleSubmit(next)">
      <div class="md:tw-flex tw-justify-between md:tw-w-23.5">
        <div class="tw-flex tw-flex-col">
          <label>Firstname</label>
          <div>
            <validation-provider
              v-slot="{errors}"
              name="firstname"
              rules="required">
              <div class="tw-flex tw-flex-col">
              <input class="md:tw-w-44" type="text" placeholder="Enter Firstname" v-model="user.firstname">
              <span v-show="errors" class="err">{{errors[0]}}</span>
              </div>
            </validation-provider>

          </div>
        </div>
        <div class="tw-flex md:tw-mt-0 tw-mt-6 tw-flex-col">
          <label>Lastname</label>
          <validation-provider
          v-slot="{errors}"
          name="lastname"
          rules="required">
            <div class="tw-flex tw-flex-col">
            <input class="md:tw-w-44" type="text" placeholder="Enter Lastname" v-model="user.lastname">
            <span v-show="errors" class="err">{{errors[0]}}</span>
            </div>
          </validation-provider>
        </div>
      </div>
      <div class="md:tw-w-23.5 tw-flex tw-flex-col tw-my-6">
        <label>Email Address (Optional)</label>
        <validation-provider
        v-slot="{errors}"
        name="email Address"
        rules="email">
        <input class="tw-w-full" v-model="user.email" type="email" placeholder="Enter Email Address">
          <span v-show="errors" class="err">{{errors[0]}}</span>
        </validation-provider>
      </div>
      <div class="md:tw-w-23.5 tw-flex tw-flex-col">
        <label>Mobile Number</label>
        <validation-provider
        v-slot="{errors}"
        name="numeric"
        rules="required|numeric"
        >
        <input class="tw-w-full" id="Mobile" type="tel" placeholder="Enter Mobile Number" v-model="user.phone">
          <span v-show="errors" class="err">{{errors[0]}}</span>
        </validation-provider>
      </div>
      <h2 class="tw-mt-5 tw-text-lg tw-font-normal ">Gender</h2>
<!--      md:tw-block tw-hidden-->
      <div class="md:tw-flex md:tw-flex-col  tw-justify-between tw-w-23.5">
<!--        tw-hidden-->
        <label class="describe tw-my-3">How best do we describe you?</label>
<!--        THIS IS THE GENDER PART-->
        <div class="tw-flex tw-mt-2 tw-justify-between md:tw-w-23.5 tw-w-full md:tw-pr-0 tw-pr-8">
          <div class="gender md:tw-w-40 tw-w-40 tw-flex tw-items-center" @click="selectGenderType('male')" :class="user.gender==='male'?'active':'non-active'">
            <small :class="user.gender==='male'?'bg-active':'bg-non-active'"></small> <p class="tw-mt-4 tw-ml-2 tw-text-xs">Male</p>
          </div>
          <div class="gender md:tw-w-40 tw-w-40 tw-flex tw-items-center" @click="selectGenderType('female')" :class="user.gender==='female'?'active':'non-active'">
            <small :class="user.gender==='female'?'bg-active':'bg-non-active'"></small> <p class="tw-mt-4 tw-ml-2 tw-text-xs">Female</p>
          </div>
        </div>
<!--        GENDER SECTION END HERE.-->
      </div>

      <div class="tw-flex tw-mt-8 md:tw-justify-start tw-justify-end">
        <BaseButton :is-disable="user.gender===''" />
      </div>
      <div class="md:tw-hidden tw-flex tw-justify-between tw-items-center tw-mt-36">
        <h3 class="have-account tw-text-base tw-font-normal">Have Account?</h3>
        <h3 @click="$router.push('/signUp')" class="create-account tw-text-base tw-font-bold">Create Account</h3>
      </div>
    </form>
    </validation-observer>
  </div>
</div>
</template>


<script>

import BaseButton from "./BaseButton";
import {ValidationProvider, ValidationObserver} from 'vee-validate'
export default {
  name: "LetHelpYourBusinessGetStartedForm",
  components: {BaseButton, ValidationProvider, ValidationObserver},
  data(){
    return {
      user:{
        firstname:"",
        lastname:"",
        email:"",
        phone:"",
        gender:""
      }
    }
  },
  props:{
    steps: [Number]
  },
  methods:{
    next(){
    let userBusinessType =  JSON.parse(sessionStorage.getItem('userDetails'))
      let updateUser = Object.assign(userBusinessType,this.user)
      sessionStorage.setItem('userDetails',JSON.stringify(updateUser))
      this.$emit('increase')
    },
    selectGenderType(gender){
      return this.user.gender=gender
    }
  },
  // mounted() {
  //   sessionStorage.setItem('user.firstName','ibrahim')
  //   sessionStorage.setItem('lastName', 'ajao')
  //   sessionStorage.setItem('email', 'ajaoibra93@gmail.com')
  //   sessionStorage.setItem('mobile', '08022930290')
  //   sessionStorage.setItem('gender', 'male')
  // },
  // mounted() {
  //   this.$session.set("user.mobile", "08022930290");
  //   console.log(this.$session.get("mobile"));
  // }

}
</script>

<style scoped>
.gender{
  border: 0.3px solid #808080;
  border-radius: 10px;
  height: 36px;
  padding: 11px 9px 11px 9px;
}

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
.err{
  color: red;
  font-size: 12px;
}
input{
  background: #F2F2F2;
  border-radius: 8px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  padding: 16px;
  color: #282828;
}
input:focus{
  outline: none;
}
label{
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #333333;
}
.describe{
  color: #808080;
}
small{
  width: 12px;
  height: 12px;
  /*border: 0.3px solid grey;*/
  border-radius: 10px;
}

span{
  line-height: 22px;
  letter-spacing: -0.03em;
  color: #002433;
}
.have-account{
  line-height: 19px;
  display: flex;
  align-items: center;
  letter-spacing: -0.02em;
  color: #000000;
}
.create-account{
  line-height: 19px;
  display: flex;
  align-items: center;
  letter-spacing: -0.02em;
  color: #01E068
}

</style>
