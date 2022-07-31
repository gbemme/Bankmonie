<template>
<div class="wrapper">
  <div class="header">
    <v-app-bar
      absolute
      app
      elevation="0"
      color="#FAFDFF"
      class="md:tw-w-10/12 tw-flex tw-m-auto tw-justify-between tw-items-center"
    >
      <img class="tw-w-36 md:tw-w-44" src="/logo.svg" alt="">

      <v-spacer class=" tw-hidden md:tw-block"></v-spacer>
      <div class="login tw-hidden md:tw-block tw-mt-6">
        <v-btn
          class="ma-2 md:tw-w-44.5 md:tw-h-14 tw-rounded-2xl"
          outlined
          color="#009CDE"
        >
          <p>Create Account</p>
        </v-btn>
      </div>

    </v-app-bar>
  </div>
</div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
.wrapper{
  background-color: lightblue;
  background-size: cover;
  background-repeat: no-repeat;
}
p{
  color: #002433;
  font-weight: 600;
  font-size: 10px;
  line-height: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: -0.02em;
  margin-top: 18px;
}

</style>
