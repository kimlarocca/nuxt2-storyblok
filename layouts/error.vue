<template>
  <div class="error-page l-container u-align--center">
    <error-animation aria-hidden="true" />
    <v-spacer />
    <p>{{ error.statusCode }} Page Error</p>
    <v-spacer />
    <h3>Sorry! The page you're looking for appears to be extinct.</h3>
    <v-spacer size="double" />
    <v-button
      @click="
        $router.push({
          path: '/',
        })
      "
    >
      return to the home page
    </v-button>
    <v-spacer size="double" />
  </div>
</template>

<script>
export default {
  name: 'ErrorLayout',
  layout: 'blank',
  props: {
    error: {
      type: Object,
      default: null
    }
  }
}
</script>