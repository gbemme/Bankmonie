<template>
  <div class="wrapper-bg">
    <div class="content md:tw-px-0 tw-px-4">
      <div class="head tw-flex md:tw-w-10/12 tw-m-auto tw-justify-between">
        <div class="tw-mt-6"><img class="tw-w-36 md:tw-w-44" src="/logo.svg" alt=""></div>
        <div class="create-acct tw-mt-6"><button>Create Account</button></div>
      </div>

      <div class="tw-w-23.3 tw-m-auto ">
        <div  class="tw-w-53.25 tw-mb-7 tw-mt-24">
          <h2 class="tw-text-2xl tw-font-bold tw-leading-7">Welcome Back <h2 style="color: #009CDE"> Administrator.</h2></h2>
        </div>
        <form action="">
          <div class="tw-flex tw-flex-col tw-my-6">
            <label>Email Address</label> <input class="tw-py-3 tw-px-4 tw-text-sm tw-leading-4" type="text" placeholder="Enter Email">
          </div>
          <div class="tw-flex tw-flex-col tw-my-5">
            <label>Password</label> <input class="tw-py-2 tw-px-4 tw-text-sm tw-leading-4" type="text" placeholder="Enter Password">
          </div>
          <span class="tw-flex tw-w-40 tw-justify-between tw-items-center">
        <input class="check-b" type="checkbox">
      <h4 class="keep-me tw-mt-5 tw-text-base tw-leading-5">Keep Me Signed In</h4>
        </span>
          <button class="log-in tw-w-37.75 tw-mt-5 tw-h-14 tw-text-base tw-leading-5 tw-font-semibold">Log In</button>
        </form>
      </div>
    </div>
    <div class="footer-bg md:tw-px-0 tw-px-4">
      <Footer/>
    </div>
  </div>
</template>

<script>
import Footer from "../reusable/Footer";
export default {
  name: "WelcomeBackAdmin",
  components: {Footer}
}
</script>

<style scoped>
.create-acct{
  border: 1.4px solid #009CDE;
  width: 179px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px;
  gap: 10px;
  border-radius: 12px;
}
.create-acct button{
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  letter-spacing: -0.02em;
  color: #002433;
}
.content{
  background-color: #FAFDFF;
  background-repeat: no-repeat;
  background-size: cover;
}

h2{
  letter-spacing: -0.03em;
  color: #002433;
}
label{
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #333333;
}
input{
  gap: 8px;
  height: 50px;
  background: #F2F2F2;
  border-radius: 8px;
  color: #828282;
}
.check-b{
  width: 18px;
  height: 18px;
}
.keep-me{
  color: #000000;
  padding-bottom: 20px;
}
.log-in{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px;
  gap: 10px;
  background: #002433;
  border-radius: 12px;
  letter-spacing: -0.02em;
  color: #FFFFFF;
}
</style>
