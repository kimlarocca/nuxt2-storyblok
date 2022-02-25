<template>
  <div class="error-page l-container u-align--center">
    <error-animation aria-hidden="true" />
    <v-spacer />
    <p>404 Page Error</p>
    <v-spacer />
    <h3>Sorry, the page you're looking for appears to be extinct.</h3>
    <v-spacer size="double" />
    <p><nuxt-link to="/">Click here to return to the home page!</nuxt-link></p>
    <v-spacer size="double" />
  </div>
</template>

<script>
export default {
  name: 'Error',
  layout: 'blank'
}
</script>

<style lang="scss">
.error-page {
  .error-animation {
    width: 300px !important;
  }
}
</style>