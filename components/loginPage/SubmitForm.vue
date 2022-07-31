<template>
<div class="wrapper">
  <div class="header">
    <v-app-bar
      absolute
      app
      elevation="0"
      color="transparent"
      class="md:tw-w-10/12 tw-flex tw-m-auto tw-justify-between tw-items-center"
    >
      <img class="tw-w-36 md:tw-w-44" src="/logo.svg" alt="">

      <!--      <v-spacer class=" tw-hidden md:tw-block"></v-spacer>-->
      <!--      <div  class="button-text tw-hidden md:tw-block">-->
      <!--        <v-btn   href="#home" text>Home</v-btn>-->
      <!--        <v-btn  href="#about" text>About Us</v-btn>-->
      <!--        <v-btn  href="#services" text>Services</v-btn>-->
      <!--        <v-btn href="#faq" text>FAQs</v-btn>-->
      <!--      </div>-->

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
    <div class="heading md:tw-w-full tw-mt-28">
      <h2 class="tw-text-2xl tw-leading-7 tw-font-bold">Just a Moment <h2 style="color: #009CDE">Almost Done</h2></h2>
    </div>
    <div class="md:tw-flex md:tw-justify-between">
      <div class="input-side">
        <form for="demo" action="" id="submit">
          <div class="tw-w-94 tw-flex tw-flex-col tw-my-6">
            <label>State</label> <input type="text" placeholder="Select state">
          </div>
          <div class="tw-w-94 tw-flex tw-flex-col">
            <label>Local government Area of state</label> <input type="text" placeholder="Select LGA">
          </div>
<!--            <v-row justify="center">-->
<!--              <v-expansion-panels>-->
<!--                <v-expansion-panel class="tw-my-4 tw-w-94"-->
<!--                                   v-for="(data,i) in questions"-->
<!--                                   :key="i">-->
<!--                  <v-expansion-panel-label>{{data.label}}</v-expansion-panel-label>-->
<!--                  <v-expansion-panel-header>{{data.question}}</v-expansion-panel-header>-->
<!--                  <v-expansion-panel-content> {{data.answer}}</v-expansion-panel-content>-->
<!--                </v-expansion-panel>-->
<!--              </v-expansion-panels>-->
<!--            </v-row>-->
          <h2 class="tw-mt-5">Gender</h2>
          <div class="tw-flex tw-flex-col tw-justify-between tw-w-23.5">
            <label class="tw-my-3">Are you an existing Money Agent?</label>
            <div class="tw-flex tw-justify-between">
              <div class="gender tw-flex tw-items-center"><small></small> <p class="tw-mt-4 tw-ml-2 tw-text-xs">Yes</p></div>
              <div class="gender tw-flex tw-items-center"><small></small> <p class="tw-mt-4 tw-ml-2 tw-text-xs">No</p></div>
            </div>
          </div>
              <SubmitButton/>
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
import SubmitButton from "../reusable/SubmitButton";
import Footer from "../reusable/Footer";
export default {
  name: "SubmitForm",
  components: {Footer, SubmitButton},
  data(){
    return {
      // questions: [
      //   {
      //     label: "State",
      //     question: "Select State",
      //     answer: ["Abia","Adamawa","Ogun","Anambra","Bauchi","Bayelsa","Lagos","Kwara","Kano","Abuja"]
      //   },
      //   {
      //     label: "Local Government Area of State",
      //     question: "Select LGA",
      //     answer: ["Ifelodun","VI","LMLG","Yaba","LILG","Lugbe","Auchi","Ikeja","Eti-osa","SomoluBariga"]
      //   }
      // ]
    }
    },
}
</script>

<style scoped>
.wrapper{
  background: linear-gradient(181.04deg, #FAFDFF 0.89%, #FFFFFF 108.71%);
}
.heading{
  color: #002433;
  height: 57px;
  letter-spacing: -0.03em;
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
.gender{
  border: 0.3px solid #808080;
  border-radius: 10px;
  width: 170px;
  height: 36px;
  padding: 11px 9px 11px 9px;
}
.female-bg{
  right: 350px;
  top: 145px;
}


</style>
