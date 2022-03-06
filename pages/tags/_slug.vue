<template>
  <div class="blog l-container">
    <h1>
      Stories tagged with <em>{{ slug }}</em>
    </h1>
    <v-spacer size="triple" />
    <div class="l-grid l-grid--3up l-grid--large-gutters">
      <div v-for="(story, index) in stories" :key="index">
        <nuxt-link :to="`/${story.slug}`" class="blog-post">
          <img
            :src="
              story.content.image && story.content.image.filename
                ? story.content.image.filename
                : '/placeholder.png'
            "
            :alt="
              story.content.image && story.content.image.alt
                ? story.content.image.alt
                : story.name
            "
          />
          <template v-if="story.tag_list.length > 0">
            <v-tag
              v-for="(tag, tagIndex) in story.tag_list"
              :key="tagIndex"
              :name="tag"
              :slug="`tags/${tag}`"
            />
            <v-spacer />
          </template>
          <h2 class="like-h4">{{ story.name }}</h2>
          <template v-if="story.content.short_description">
            <v-spacer />
            <storyblok-rich-text :content="story.content.short_description" />
          </template>
          <v-spacer />
          <p class="blog-post-date">{{ formatDate(story.published_at) }}</p>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import helpers from '~/mixins/helpers'
export default {
  name: 'TaggedStories',
  mixins: [helpers],
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
  }
}
</script>