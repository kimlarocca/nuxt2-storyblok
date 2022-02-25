<template>
  <Lottie :options="defaultOptions" class="error-animation" />
</template>

<script>
import Lottie from 'vue-lottie/src/lottie'
import * as animationData from './ErrorAnimationJson.json'

export default {
  name: 'ErrorAnimation',
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
