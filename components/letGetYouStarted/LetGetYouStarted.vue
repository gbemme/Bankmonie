<template>
<div>
  <div>
  <v-app-bar
    absolute
    app
    elevation="0"
    color="transparent"
    class="md:tw-w-10/12 tw-flex tw-m-auto tw-justify-between tw-items-center tw-pt-1"
  >
    <img class="tw-w-36 md:tw-w-44" src="/logo.svg" alt="">

<!--    <v-spacer class=" tw-hidden md:tw-block"></v-spacer>-->
<!--    <div  class="button-text tw-hidden md:tw-block">-->
<!--      <v-btn text>Home</v-btn>-->
<!--      <v-btn text>About Us</v-btn>-->
<!--      <v-btn text>Services</v-btn>-->
<!--      <v-btn text>FAQs</v-btn>-->
<!--    </div>-->


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
  <div class=" md:tw-w-3/4 md:tw-m-auto md:tw-flex md:tw-justify-between md:tw-items-center  md:tw-mt-20">
      <div>
        <h2>Let's help you get started</h2>
  <div>
    <v-text-field
      label="Main input"
      :rules="rules"
      hide-details="auto"
    >
        <v-container
          class="px-0"
          fluid
        >
          <v-radio-group v-model="radioGroup">
            <v-radio
              v-for="n in 1"
              :key="n"
              :label="`Radio ${n}`"
              :value="n"
            ></v-radio>
          </v-radio-group>
        </v-container>
    </v-text-field>
    <v-text-field label="Another input">
        <v-container
          class="px-0"
          fluid
        >
          <v-radio-group v-model="radioGroup">
            <v-radio
              v-for="n in 1"
              :key="n"
              :label="`Radio ${n}`"
              :value="n"
            ></v-radio>
          </v-radio-group>
        </v-container>
    </v-text-field>
    <div class="my-2">
      <v-btn
        x-large
        color="success"
        dark
      >
        Next
      </v-btn>
    </div>
  </div>
      </div>
      <div class="ambassador">
        <img src="/female-abassador.png" alt="">
      </div>
  </div>
</div>
</template>

<script>
export default {
  name: "LetGetYouStarted"
}
</script>

<style scoped>
.login button {
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  letter-spacing: -0.02em;
  color: #002433;
}
.ambassador{
  background-image: url("/female-ambassador-bg.png");
}

</style>
