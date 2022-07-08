<template>
<div >
  <v-app-bar
    absolute
    app
    elevation="0"
  color="transparent"
    class="md:tw-w-10/12 tw-flex tw-m-auto tw-justify-between tw-items-center tw-pt-1"
  >
    <img class="tw-w-36 md:tw-w-44" src="/logo.svg" alt="">

    <v-spacer class=" tw-hidden md:tw-block"></v-spacer>
    <div  class="button-text tw-hidden md:tw-block">
        <v-btn text>Home</v-btn>
        <v-btn text>About Us</v-btn>
        <v-btn text>Services</v-btn>
        <v-btn text>FAQs</v-btn>
    </div>


    <v-spacer class=" tw-hidden md:tw-block"></v-spacer>
    <div class="tw-hidden md:tw-block md:tw-text-sm">
      <v-btn
        class="ma-2 "
        outlined
        color="#009CDE"
      >
        Log In
      </v-btn>
    </div>


  </v-app-bar>


</div>
</template>

<script>
export default {
  name: "LandingPageHeader",

}
</script>

<style scoped>
*{
  font-family: Gelion;
}
.button-text{
  font-family: 'Gelion';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.02em;
  color: #002433;

}
.v-btn{
  text-transform: capitalize!important;
}


.bank-monie h3{
  /*position: absolute;*/
  width: 147.45px;
  height: 38px;
  left: 172.55px;
  top: 32px;
  color: #002433;
  font-family: 'Gelion';
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
  font-family: Gelion;
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
  /*left: 1350px;*/
  /*top: 28px;*/
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
