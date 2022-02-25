<template>
  <div class="l-container">
    <h1>
      {{ story.name }}
    </h1>
    <v-spacer size="double" />
    <div v-for="(item, index) in story.content" :key="index">
      <storyblok-rich-text v-if="typeof item === 'object'" :content="item" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'StoryblokSlug',
  asyncData ({ app, params, error, redirect }) {
    return app.$storyapi.get(`cdn/stories/${params.slug}`, {
      version: 'published'
    }).then((res) => {
      return res.data
    }).catch((res) => {
        redirect('/error')
    })
  },
  data () {
    return {
      story: { content: {} }
    }
  }
}
</script>
