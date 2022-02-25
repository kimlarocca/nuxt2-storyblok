<template>
  <div class="index l-container u-align--center">
    <v-spacer />
    <h1>Nuxt 3 / Storyblok Starter Project</h1>
    <v-spacer size="double" />
    <p>
      <nuxt-link to="/stories">Stories</nuxt-link> |
      <nuxt-link to="/tags">Tags</nuxt-link> |
      <nuxt-link to="/styleguide">Styleguide</nuxt-link>
    </p>
    <v-spacer size="double" />
  </div>
</template>

<script>
export default {
  name: 'Index',
}
</script>