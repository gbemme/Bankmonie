<template>
<!--  <v-row>-->
<!--    <v-col class="text-center">-->
<!--      <img-->
<!--        src="/v.png"-->
<!--        alt="Vuetify.js"-->
<!--        class="mb-5"-->
<!--      >-->
<!--      <blockquote class="blockquote">-->
<!--        &#8220;First, solve the problem. Then, write the code.&#8221;-->
<!--        <footer>-->
<!--          <small>-->
<!--            <em>&mdash;John Johnson</em>-->
<!--          </small>-->
<!--        </footer>-->
<!--      </blockquote>-->
<!--    </v-col>-->
<!--  </v-row>-->
  <v-app>
<!--    <LetGetYouStarted/>-->
<!--    <SubmitForm/>-->
<!--    <WelcomeBackAdmin/>-->
<!--    <WelcomeBackJosh/> -->
        <LetHelpYourBusinessGetStarted/>
<!--    <Header/>-->
  </v-app>
</template>

<script>
import LetGetYouStarted from "../components/loginPage/LetGetYouStarted";
import SubmitForm from "../components/loginPage/SubmitForm";
import Header from "../components/reusable/Header";
import WelcomeBackAdmin from "../components/loginPage/WelcomeBackAdmin";
import WelcomeBackJosh from "../components/loginPage/WelcomeBackJosh";
import LetHelpYourBusinessGetStarted from "../components/loginPage/LetHelpYourBusinessGetStarted";
export default {
  name: 'InspirePage',
  components: {LetHelpYourBusinessGetStarted, WelcomeBackJosh, WelcomeBackAdmin, Header, SubmitForm, LetGetYouStarted}
}
</script>
