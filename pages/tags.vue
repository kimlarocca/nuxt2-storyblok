<template>
  <div class="tags l-container">
    <h1>Tags</h1>
    <v-spacer />
    <p v-for="(tag, index) in tags" :key="index">
      <nuxt-link :to="`/${tag.name}`"> {{ tag.name }} </nuxt-link>({{
        tag.taggings_count
      }})
    </p>
  </div>
</template>

<script>
export default {
  asyncData({ app, redirect }) {
    return app.$storyapi
      .get('cdn/tags/', {
        version: 'published'
      })
      .then((res) => {
        return {
          tags: res.data.tags
        }
      })
      .catch((res) => {
        redirect('/error')
      })
  }
}
</script>