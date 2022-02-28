<template>
  <div class="stories l-container">
    <h1>
      Stories tagged with <em>{{ slug }}</em>
    </h1>
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
  name: 'TaggedStories',
  asyncData({ app, params, redirect }) {
    const slug = params.slug.replaceAll('-', ' ')
    return app.$storyapi
      .get('cdn/stories/', {
        version: 'published',
        with_tag: slug.toLowerCase()
      })
      .then((res) => {
        return {
          stories: res.data.stories,
          slug
        }
      })
      .catch((res) => {
        redirect('/error')
      })
  },
}
</script>