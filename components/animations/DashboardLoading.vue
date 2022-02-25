<template>
  <Lottie :options="defaultOptions" class="dashboard-loading" />
</template>

<script>
import Lottie from 'vue-lottie/src/lottie'
import * as animationData from './DashboardLoadingJson.json'

export default {
  name: 'DashboardLoading',
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
