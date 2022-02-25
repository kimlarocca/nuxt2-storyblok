<template>
  <div class="index l-container u-align--center">
    <login-animation aria-hidden="true" />
    <v-spacer size="double" />
    <img src="/images/logo.png" alt="equalicert logo" />
    <v-spacer />
    <h1 class="like-p">
      Welcome! Please login to access your Equalicert Essentials Dashboard:
    </h1>
    <v-spacer size="double" />
    <v-button
      @click="
        $router.push({
          path: '/dashboard',
        })
      "
    >
      Click Here To Login
    </v-button>
    <v-spacer size="double" />
  </div>
</template>

<script>
export default {
  name: 'Index',
  layout: 'blank'
}
</script>

<style lang="scss">
.index {
  .login-animation {
    width: 300px !important;
    @media all and (min-width: $medium) {
      width: 500px !important;
    }
  }
}
</style>
