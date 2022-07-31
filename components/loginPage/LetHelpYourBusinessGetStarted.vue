<template>
  <div class="wrapper tw-px-8 md:tw-px-0">
    <div clas="header">
      <div class="head tw-flex md:tw-w-10/12 tw-m-auto tw-justify-between">
        <div class="tw-mt-6"><img class="tw-w-36 md:tw-w-44" src="/logo.svg" alt=""></div>
        <div class="login-btn md:tw-block md:tw-w-44.75 tw-hidden tw-mt-6"><button>Log In</button></div>
        <div class="md:tw-hidden tw-mt-6"><img src="~/static/menu-icon.svg" alt=""></div>
      </div>
        </div>

    <div class=" md:tw-w-10/12 md:tw-m-auto md:tw-mb-12 md:tw-pl-4">
      <div class="let md:tw-w-64 md:tw-mt-20 tw-mt-24">
        <h2 class="let-help md:tw-text-2xl tw-font-bold">Let's help your Business <h2 style="color: #009CDE">get started</h2></h2>
      </div>
      <div class="md:tw-flex md:tw-justify-between">
        <div class="input-side md:tw-mt-12 tw-mt-14">
          <form action="">
            <div class="md:tw-flex tw-justify-between md:tw-w-23.5">
              <div class="tw-flex tw-flex-col">
                <label>Firstname</label>
                <input class="md:tw-w-44" type="text" placeholder="Enter Firstname">
              </div>
              <div class="tw-flex md:tw-mt-0 tw-mt-6 tw-flex-col">
                <label>Lastname</label>
                <input class="md:tw-w-44" type="text" placeholder="Enter Lastname">
              </div>
            </div>
            <div class="md:tw-w-23.5 tw-flex tw-flex-col tw-my-6">
              <label>Email Address (Optional)</label> <input type="text" placeholder="Enter Email Address">
            </div>
            <div class="md:tw-w-23.5 tw-flex tw-flex-col">
              <label>Mobile Number</label> <input type="text" placeholder="Enter Mobile Number">
            </div>
            <h2 class="tw-mt-5 tw-text-lg tw-font-normal md:tw-block tw-hidden">Gender</h2>
            <div class="md:tw-flex md:tw-flex-col tw-hidden tw-justify-between tw-w-23.5">
              <label class="describe tw-my-3">How best do we describe you?</label>
              <div class="tw-flex tw-justify-between">
                <div class="gender tw-flex tw-items-center"><small></small> <p class="tw-mt-4 tw-ml-2 tw-text-xs">Male</p></div>
                <div class="gender tw-flex tw-items-center"><small></small> <p class="tw-mt-4 tw-ml-2 tw-text-xs">Female</p></div>
              </div>
            </div>

            <div class="tw-flex md:tw-justify-start tw-justify-end">
            <BaseButton/>
            </div>
            <div class="md:tw-hidden tw-flex tw-justify-between tw-items-center tw-mt-36">
              <h3 class="have-account tw-text-base tw-font-normal">Have Account?</h3>
              <h3 class="create-account tw-text-base tw-font-bold">Create Account</h3>
            </div>
          </form>
        </div>

        <div class="female md:tw-block tw-hidden">
          <div class="female-bg tw-absolute tw--mr-44 animate__animated animate__fadeInTopRight"><img src="~/static/female-head-bg.png" alt=""></div>
          <div class="tw-relative tw-mr-20"><img src="~/static/female-ambassador.png" alt=""></div>
        </div>
      </div>
    </div>
      <Footer/>
  </div>
</template>

<script>
import Footer from "../reusable/Footer";
import BaseButton from "../reusable/BaseButton";
export default {
  name: "LetHelpYourBusinessGetStarted",
  components: {BaseButton, Footer}
}
</script>

<style scoped>
.login-btn{
  border: 1.4px solid #009CDE;
  height: 50px;
  justify-content: center;
  align-items: center;
  padding: 16px;
  gap: 10px;
  border-radius: 12px;
}
.login-btn button{
  width: 37px;
  margin: auto;
  display: flex;
  justify-items: center;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  align-items: center;
  letter-spacing: -0.02em;
  color: #002433;
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
.female-bg{
  right: 350px;
}
@media screen and (max-width: 500px) {
  .let{
    width: 245px;
  }
.let-help{
    font-size: 28px;
  }
}

</style>
