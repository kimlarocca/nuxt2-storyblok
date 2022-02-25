<template>
  <Lottie
    class="loading-icon"
    :options="defaultOptions"
  />
</template>

<script>
import Lottie from 'vue-lottie/src/lottie.vue'
import * as animationData from './VLoadingJson.json'

export default {
  name: 'VLoading',
  components: {
    Lottie
  },
  data () {
    return {
      defaultOptions: {
        animationData: animationData.default
      }
    }
  }
}
</script>

<style lang="scss">
.loading-icon {
  max-width: 80px !important;
  margin-left: 0 !important;

  path {
    stroke: var(--color-text);
  }
}
</style>
