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
<!--        <LetHelpYourBusinessGetStart/>-->
        <SignUpLayout/>
<!--        <LetHelpYouGetStartedForm/>-->
<!--        <JustAMomentAlmostDoneForm/>-->
<!--        <LetHelpYourBusinessGetStarted/>-->
<!--    <Header/>-->
  </v-app>
</template>

<script>
import LetGetYouStarted from "../components/loginPage/LetGetYouStarted";
import SubmitForm from "../components/loginPage/SubmitForm";
import Header from "../components/reusable/Header";
import LetHelpYourBusinessGetStarted from "../components/loginPage/LetHelpYourBusinessGetStarted";
import LetHelpYourBusinessGetStartedForm from "../components/reusable/LetHelpYourBusinessGetStartedForm";
import JustAMomentAlmostDone from "../components/reusable/JustAMomentAlmostDoneForm";
import JustAMomentAlmostDoneForm from "../components/reusable/JustAMomentAlmostDoneForm";
import Layout from "../components/loginPage/SignUpLayout";
import SignUpLayout from "../components/loginPage/SignUpLayout";
import LetHelpYouGetStartedForm from "../components/reusable/LetHelpYouGetStartedForm";
export default {
  name: 'InspirePage',
  components: {
    LetHelpYouGetStartedForm,
    SignUpLayout,
    Layout,
    JustAMomentAlmostDoneForm,
    JustAMomentAlmostDone,
    LetHelpYourBusinessGetStartedForm,
    LetHelpYourBusinessGetStarted, Header, SubmitForm, LetGetYouStarted}
}
</script>
