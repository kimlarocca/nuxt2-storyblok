<template>
  <Lottie :options="defaultOptions" class="login-animation" />
</template>

<script>
import Lottie from 'vue-lottie/src/lottie'
import * as animationData from './LoginAnimationJson.json'

export default {
  name: 'LoginAnimation',
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
