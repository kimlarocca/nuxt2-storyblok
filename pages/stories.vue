<template>
  <div class="stories l-container">
    <h1>Stories</h1>
    <v-spacer />
    <p v-for="(story, index) in stories" :key="index">
      <nuxt-link :to="`/${story.slug}`" class="stories-post">
        {{ story.name }}
      </nuxt-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Stories',
  asyncData({ app, redirect }) {
    return app.$storyapi
      .get('cdn/stories/', {
        version: 'published',
      })
      .then((res) => {
        return {
          stories: res.data.stories,
        }
      })
      .catch((res) => {
        redirect('/error')
      })
  },
}
</script>