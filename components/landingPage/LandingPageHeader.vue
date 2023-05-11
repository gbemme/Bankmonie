<template>
<div >
  <v-app-bar
    absolute
    app
    elevation="0"
    color="transparent"
    class="md:tw-w-10/12 tw-flex tw-m-auto tw-justify-between tw-pt-4"
  >
    <img @click="$router.push('/')" class="tw-hidden md:tw-block tw-cursor-pointer tw-w-36 md:tw-w-44 md:tw--mt-6" src="/Bankme-logo.svg" alt="">
    <img @click="$router.push('/')" class="md:tw-hidden tw-cursor-pointer tw-w-12 tw-h-14" src="/b-logo.png" alt="">
    <v-spacer class=" tw-hidden md:tw-block"></v-spacer>
    <div class="button-text tw-hidden md:tw-block">
        <v-btn class="tw-text-xl" @click="$emit('navigate','#home')"  text>Home</v-btn>
        <v-btn class="text-large" @click="$emit('navigate','#about')" text>About Us</v-btn>
        <v-btn class="tw-cursor-pointer" @click="$emit('navigate','#services')"  text>Services</v-btn>
        <v-btn class="tw-cursor-pointer" @click="$emit('navigate','#faq')" text>FAQs</v-btn>
    </div>


    <v-spacer class=""></v-spacer>
    <div class="tw-hidden tw-font-bold md:tw-block md:tw-text-lg">
      <v-btn
        style="font-weight: 500 !important;"
        class="register-btn ma-2"
        outlined
        color="#009CDE"
        to="/signUp"
      >
        Register
      </v-btn>
    </div>
    <div class="tw-hidden tw-font-bold md:tw-block md:tw-text-lg">
    <v-btn
      style="font-weight:500 !important; border:none !important"
      class="login-btn ma-2 ml-10"
      outlined
    >
    <a style="color: white;" href="https://bankme.paypad.com.ng/" target="_blank">
      Login</a>
    </v-btn>
  </div>
  <div class="md:tw-hidden tw-mt-6 tw-flex">
      <v-btn v-if="register"
        style="font-weight:400 !important; padding:0px !important;" class="register-btn tw-px-1"
        outlined  color="#009CDE" to="/signUp">Register
      </v-btn>
      <v-btn v-if="login"
        style="font-weight:400 !important; background-color: #009CDE; border:none !important"
        class="tw-px-2 tw-ml-2" outlined>
        <a style="color: white;" href="https://bankme.paypad.com.ng/" target="_blank">
        Login</a>
      </v-btn>
      <img v-if="menu" src="~/static/menu-icon.svg" alt="" @click="openMobileLoginRegisterBtn">
    </div>
  </v-app-bar>

</div>
</template>

<script>
export default {
  name: "LandingPageHeader",
  data(){
    return{
      menu: false,
      register: true,
      login: true,
    }
  },
  methods:{
    goToHome(){
      // setTimeout(()=>{
        this.$scrollToTop('#faq');
      // }, 300)
    },
  // openMobileLoginRegisterBtn(){
  //   this.menu = false;
  //   this.register = true;
  //   this.login = true;
  //   }
  }

}
</script>

<style scoped>
/* .register-btn{
  font-size:24px !important;
  width: 75px !important;
  padding: 5px 10px 5px 10px !important;
} */
.button-text {
  font-style: normal;
  font-weight: 400;
  font-size: 24px !important;
  line-height: 19px;
  letter-spacing: -0.02em;
  color: #002433;

}
.v-btn{
  text-transform: capitalize!important;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.02em;
}


.bank-monie h3{
  /*position: absolute;*/
  width: 147.45px;
  height: 38px;
  left: 172.55px;
  top: 32px;
  color: #002433;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  letter-spacing: -0.02em;
}
.nav{
  width: 40%;
  margin: auto;
  display: flex;
  justify-content: space-evenly;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.02em;
  color: #002433;
}
.nav .home{
  /*font-family: Gelion;*/
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.02em;
  color: #009CDE;
}
.login-btn{
  background-color: #009CDE;
  padding-left: 25px !important;
  padding-right: 25px !important;
}
.login{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px;
  gap: 10px;
  position: absolute;
  width: 179px;
  height: 50px;
  right: 125px;
  border: 1.4px solid #009CDE;
  border-radius: 12px;
  color: #002433;
  text-align: center;
}
.login button{
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  letter-spacing: -0.02em;
  color: #002433;
  /* Bankmonie/Primary/DarkBalckBlue */
}

</style>
