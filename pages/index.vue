<template>
  <div class="blog l-container">
    <h1>The Blog</h1>
    <v-spacer size="triple" />
    <div class="l-grid l-grid--2up l-grid--large-gutters blog-featured-post">
      <nuxt-link :to="`/${stories[0].slug}`" class="blog-post">
        <img
          :src="
            stories[0].content.image && stories[0].content.image.filename
              ? stories[0].content.image.filename
              : '/placeholder.png'
          "
          :alt="
            stories[0].content.image && stories[0].content.image.alt
              ? stories[0].content.image.alt
              : stories[0].name
          "
        />
      </nuxt-link>
      <div>
        <template v-if="stories[0].tag_list.length > 0">
          <v-tag
            v-for="(tag, tagIndex) in stories[0].tag_list"
            :key="tagIndex"
            :name="tag"
            :slug="`tags/${tag}`"
          />
          <v-spacer />
        </template>
        <nuxt-link :to="`/${stories[0].slug}`"
          ><h2>{{ stories[0].name }}</h2></nuxt-link
        >
        <template v-if="stories[0].content.short_description">
          <v-spacer />
          <storyblok-rich-text
            :content="stories[0].content.short_description"
          />
        </template>
        <v-spacer />
        <p class="blog-post-date">{{ formatDate(stories[0].published_at) }}</p>
      </div>
    </div>
    <v-spacer size="triple" />
    <div class="l-grid l-grid--3up l-grid--large-gutters">
      <div
        v-for="(story, index) in stories.slice(1, stories.length)"
        :key="index"
      >
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
  name: 'Home',
  mixins: [helpers],
  asyncData ({ app, redirect }) {
    return app.$storyapi.get(`cdn/stories/`, {
      version: 'published',
      content_type: 'page', // get only page types
    }).then((res) => {
      return res.data
    }).catch((res) => {
        redirect('/error')
    })
  },
  data () {
    return {
      stories: { content: {} }
    }
  }
}
</script>