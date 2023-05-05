<template>
<div class="wrapper tw-px-8 md:tw-px-0">
  <div class="header">
    <v-app-bar
      absolute
      app
      elevation="0"
      color="transparent"
      class="md:tw-w-10/12 tw-flex tw-m-auto tw-justify-between tw-items-center"
    >
      <img class="tw-w-36 md:tw-w-44" src="/logo.svg" alt="">
      <v-spacer class=" tw-hidden md:tw-block"></v-spacer>
      <div class="login tw-hidden md:tw-block tw-text-sm tw-mt-6">
        <v-btn
          class="ma-2 md:tw-w-44 md:tw-h-14 tw-text-sm tw-font-semibold tw-rounded-xl"
          outlined
          color="#009CDE"
        >
          Log In
        </v-btn>
      </div>


    </v-app-bar>
  </div>

  <div class=" md:tw-w-10/12 md:tw-m-auto md:tw-mb-12 md:tw-pl-4">
    <div class="md:tw-w-64 tw-mt-28">
      <h2 class="tw-text-3xl tw-font-semibold">Let's get <h2 style="color: #009CDE">you started</h2></h2>
    </div>
      <div class="md:tw-flex md:tw-justify-between">
  <div class="input-side tw-mt-28">
    <form action="">
      <div class="tw-flex tw-justify-between tw-w-23.5">
        <div class="tw-flex tw-flex-col">
          <label>Firstname</label>
          <input class="tw-w-44" type="text" placeholder="Enter Firstname">
        </div>
        <div class="tw-flex tw-flex-col">
          <label>Lastname</label>
          <input class="tw-w-44" type="text" placeholder="Enter Lastname">
        </div>
      </div>
      <div class="tw-w-23.5 tw-flex tw-flex-col tw-my-6">
        <label>Email Address (Optional)</label> <input type="text" placeholder="Enter Email Address">
      </div>
      <div class="tw-w-23.5 tw-flex tw-flex-col">
        <label>Mobile Number</label> <input type="text" placeholder="Enter Mobile Number">
      </div>
      <h2 class="tw-mt-5">Gender</h2>
      <div class="tw-flex tw-flex-col tw-justify-between tw-w-23.5">
        <label class="describe tw-my-3">How best do we describe you?</label>
        <div class="tw-flex tw-justify-between">
          <div class="gender tw-cursor-pointer tw-flex tw-items-center"><small></small> <p class="tw-mt-4 tw-ml-2 tw-text-xs">Male</p></div>
          <div class="gender tw-cursor-pointer tw-flex tw-items-center"><small></small> <p class="tw-mt-4 tw-ml-2 tw-text-xs">Female</p></div>
        </div>
      </div>
<!--      <div class="form-one tw-flex md:tw-w-25 tw-rounded-xl md:tw-h-9 tw-h-9 tw-items-center tw-pl-3 tw-py-p-3 tw-mb-2">-->
<!--        <div class="tw-w-3 tw-h-3 tw-mr-3"> </div>-->
<!--        <small>Registered Business</small>-->
<!--      </div>-->
<!--      <div class="form-one tw-flex md:tw-w-25 tw-rounded-xl md:tw-h-9 tw-h-9 tw-items-center tw-pl-3 tw-py-p-3">-->
<!--       <div class="tw-w-3 tw-h-3 tw-mr-3"> </div>-->
<!--       <small>Individual Business</small>-->
<!--      </div>-->
<!--      <div class="next tw-mt-12">-->
<!--      <button>Next</button>-->
<!--      </div>-->
      <BaseButton/>
    </form>
  </div>

      <div class="female md:tw-block tw-hidden">
        <div class="female-bg tw-absolute tw--mr-44 animate__animated animate__fadeInTopRight"><img src="~/static/female-ambassador-bg.png" alt=""></div>
        <div class="tw-relative tw-mr-20"><img src="~/static/female-ambassador.png" alt=""></div>
      </div>
      </div>
  </div>
        <Footer/>
</div>
</template>

<script>
import BaseButton from "~/components/reusable/BaseButton";
import Footer from "~/components/reusable/Footer";
export default {
  name: "LetGetYouStarted",
  components: {Footer,BaseButton},
  // data(){
  //   return{
  //     d: new Date()
  //   }
  // }
}
</script>

<style scoped>
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
  border: 0.3px solid grey;
  border-radius: 10px;
}
.gender{
  border: 0.3px solid #808080;
  border-radius: 10px;
  width: 170px;
  height: 36px;
  padding: 11px 9px 11px 9px;
}
h2{
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: -0.03em;
  color: #002433;
}




/*the login xternal style*/
.form-one{
  border: 0.3px solid #808080;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: -0.03em;
  color: #808080;
}
.form-one div{
  border: 1px solid #000000;
  border-radius: 11px;
  box-sizing: border-box;
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
.login .ma-2{
  letter-spacing: -0.02em !important;
}
.female-bg{
 right: 350px;
  top: 145px;
}
h2{
  color: #000000;
}
h3{
  color: #002433;
  letter-spacing: -0.03em;
}
p{
  color: #808080;
}
.navigate{
  color: #01E068;
}
.service-follow-us{
  color: #002433;
}
</style>
