<template>
<div>
          <div class="heading md-tw-px-0 tw-px-8 md:tw-w-65.25 tw-mt-28">
            <span class="tw-text-2xl tw-leading-7 tw-font-bold">Just a Moment <span style="color: #009CDE">Almost Done</span></span>
          </div>
  <div class="input-side md-tw-px-0 tw-px-8">
    <validation-observer v-slot="{handleSubmit}">
    <form @submit.prevent="handleSubmit(submitForm)">
      <div class="tw-w-94 tw-flex tw-flex-col tw-my-6">
        <label>State</label>
        <validation-provider
        v-slot="{errors}"
        name="state"
        rules="required">
          <input class="tw-w-full" v-model="user.state" type="text" placeholder="State">
          <span v-show="errors" class="err">{{errors[0]}}</span>
        </validation-provider>
      </div>
      <div class="tw-w-94 tw-flex tw-flex-col">
        <label>Local government Area of state</label>
        <validation-provider
          v-slot="{errors}"
          name="lga"
          rules="required">
          <input class="tw-w-full" v-model="user.lga" type="text" placeholder="LGA">
          <span v-show="errors" class="err">{{errors[0]}}</span>
        </validation-provider>
      </div>

      <h2 class="tw-mt-5">Agent</h2>
      <div class="tw-flex tw-flex-col tw-justify-between tw-w-23.5">
        <label class="tw-my-3">Are you an existing Money Agent?</label>
        <div class="tw-flex tw-justify-between">

          <div class="agent tw-flex tw-items-center" @click="selectAgent('yes')" :class="user.agent==='yes'?'active':'non-active'">
            <small :class="user.agent==='yes'?'bg-active':'bg-non-active'"></small> <p class="tw-mt-4 tw-ml-2 tw-text-xs">Yes</p>
          </div>

          <div class="agent tw-flex tw-items-center" @click="selectAgent('no')" :class="user.agent==='no'?'active':'non-active'">
            <small :class="user.agent==='no'?'bg-active':'bg-non-active'"></small> <p class="tw-mt-4 tw-ml-2 tw-text-xs">No</p>
          </div>
        </div>
      </div>
      <div class="tw-mt-8">
      <BaseButton :is-disable="user.agent===''"  :text="'Submit Application'"/>
      </div>
<!--      <SubmitButton />-->
    </form>
    </validation-observer>
  </div>
</div>
</template>

<script>
import SubmitButton from "./SubmitButton";
import BaseButton from "./BaseButton";
import {ValidationObserver, ValidationProvider} from "vee-validate";
export default {
  name: "JustAMomentAlmostDoneForm",
  components: {BaseButton, SubmitButton, ValidationObserver, ValidationProvider},
  data(){
    return{
      user:{
        state:"",
        lga:"",
        agent:""
      }
    }
  },
  methods:{
  async submitForm(){
    let userData =  JSON.parse(sessionStorage.getItem('userDetails'))
    let updateUser = Object.assign(userData,this.user)
    const response = await fetch('https://bankmonie.herokuapp.com/waitlist/', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updateUser) // body data type must match "Content-Type" header
    }).then(res=>{
      console.log(res)
      this.$router.push('/')
    })
    .catch(err=>{
      console.log(err)
    })
    // if(response)
    // return response.json(); // pa
    // this.$rou// rses JSON response into native JavaScript objects

  },

    selectAgent(agent) {
      return this.user.agent=agent
    }
  }
}
</script>

<style scoped>

.err{
  font-size: 12px;
  color: red;
}
input{
  background: #F2F2F2;
  border-radius: 8px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  padding: 12px 16px 12px 16px;
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
small{
  width: 12px;
  height: 12px;
  border: 0.3px solid grey;
  border-radius: 10px;
}
.agent{
  border: 0.3px solid #808080;
  border-radius: 10px;
  width: 170px;
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

</style>
