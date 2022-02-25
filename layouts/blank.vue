<template>
  <div class="l-container">
    <v-spacer size="triple" />
    <main>
      <router-view />
    </main>
    <v-spacer size="triple" />
  </div>
</template>

<script>
export default {
  name: 'BlankLayout',
  mode: 'out-in'
}
</script>