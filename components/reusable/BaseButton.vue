<template>
  <div>
    <v-btn
      depressed
      color="#009CDE"
      class="next"
      :disabled="isDisable"
      type="submit"
      @click="$emit('click')"
    >
     {{text}}
    </v-btn>
  </div>
<!--  <div class="tw-mt-12">-->
<!--    <button  type="button" class="next" :disabled="isDisable" >Next</button>-->
<!--  </div>-->
</template>

<script>
export default {
  name: "BaseButton",
  props:{
    isDisable: [Boolean],
    text:{
      type:String,
      default:'Next'
    }
  }
}
</script>

<style scoped>
.next{
  text-transform: capitalize!important;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.02em;
  color: #F2F2F2;
  width: 161px;
  height: 56px;
  border-radius: 12px;
}

</style>
