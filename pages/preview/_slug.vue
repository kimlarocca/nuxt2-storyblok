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
  name: 'StoryblokSlugPreview',
  layout: 'blank',
  asyncData ({ app, context, params }) {
    return app.$storyapi.get(`cdn/stories/${params.slug}`, {
      version: 'draft'
    }).then((res) => {
      return res.data
    }).catch((res) => {
      if (!res.response) {
        // eslint-disable-next-line no-console
        console.error(res)
        context.error({ statusCode: 404, message: 'Failed to receive content from the storyblok api' })
      } else {
        // eslint-disable-next-line no-console
        console.error(res.response.data)
        context.error({ statusCode: res.response.status, message: res.response.data })
      }
    })
  },
  data () {
    return {
      story: { content: {} }
    }
  },
  mounted () {
    this.$storybridge(() => {
      // eslint-disable-next-line
      const storyblokInstance = new StoryblokBridge()

      // Use the input event for instant update of content
      storyblokInstance.on('input', (event) => {
        // eslint-disable-next-line no-console
        console.log(this.story.content)
        if (event.story.id === this.story.id) {
          this.story.content = event.story.content
        }
      })

      // Use the bridge to listen the events
      storyblokInstance.on(['published', 'change'], (event) => {
        // window.location.reload()
        this.$nuxt.$router.go({
          path: this.$nuxt.$router.currentRoute,
          force: true
        })
      })
    })
  }
}
</script>
