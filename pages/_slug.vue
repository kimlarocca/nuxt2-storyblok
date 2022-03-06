<template>
  <div>
    <storybloks
      v-if="typeof story.content.body === 'object'"
      :content="story.content.body"
    />
  </div>
</template>

<script>
export default {
  name: 'Slug',
  asyncData ({ app, params, redirect }) {
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
