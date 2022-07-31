<template>
  <div class="wrapper">
    <div class="content md:tw-px-0 tw-px-6">
      <div class="head tw-flex md:tw-w-10/12 tw-m-auto tw-justify-between">
        <div class="tw-mt-6"><img class="tw-w-36 md:tw-w-44" src="/logo.svg" alt=""></div>
        <div class="create-acct md:tw-block tw-hidden tw-mt-6"><button>Create Account</button></div>
        <div class="md:tw-hidden tw-mt-6"><img src="~/static/menu-icon.svg" alt=""></div>
      </div>
      <div class="joshua-details md:tw-w-44.75 md:tw-flex tw-block">
        <div class="joshua md:tw-block tw-hidden">
          <img src="~/static/joshua-ambass.png" alt="">
        </div>
        <div class="md:tw-w-23.3 tw-m-auto">
          <div  class="md:tw-w-53.25 tw-mb-7 tw-mt-24">
            <h2 class="tw-text-2xl tw-font-bold tw-leading-7">Welcome Back <h2 style="color: #009CDE"> Joshua.</h2></h2>
          </div>
          <form action="">
            <div class="tw-flex tw-flex-col tw-my-6">
              <label>Email Address</label> <input class="tw-py-3 tw-px-4 tw-text-sm tw-leading-4" type="text" placeholder="Enter Email">
            </div>
            <div class="tw-flex tw-flex-col tw-my-5">
              <label>Password</label> <input class="tw-py-2 tw-px-4 tw-text-sm tw-leading-4" type="text" placeholder="Enter Password">
            </div>

            <button class="log-in tw-w-37.75 tw-mt-5 tw-h-14 tw-mt-10 tw-text-base tw-leading-5 tw-font-semibold">Log In</button>
            <div class="md:tw-hidden tw-flex tw-mt-14 tw-justify-between tw-items-center">
              <h3 class="have-account">Have Account?</h3>
              <h3 class="create-account">Create Account</h3>
            </div>
          </form>
        </div>
      </div>
    </div>
<div class="md:tw-px-0 tw-px-6">
    <Footer/>
</div>
  </div>
</template>

<script>
import Footer from "../reusable/Footer";
export default {
  name: "WelcomeBackJosh",
  components: {Footer}
}
</script>

<style scoped>

.joshua-details{
  justify-content: space-between;
}
.joshua{
  /*transform: matrix(-1, 0, 0, 1, 0, 0);*/
}
.create-acct{
  border: 1.4px solid #009CDE;
  height: 50px;
  /*display: flex;*/
  /*flex-direction: row;*/
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
.have-account{
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  letter-spacing: -0.02em;
  color: #000000;
}
.create-account{
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  letter-spacing: -0.02em;
  color: #01E068
}
@media (max-width: 600px){
  .content {
    background: #FFFFFF;
  }
}
</style>
