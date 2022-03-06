<template>
  <div class="blog l-container">
    <h1>The Blog</h1>
    <v-spacer size="triple" />
    <div class="l-grid l-grid--2up l-grid--large-gutters">
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
          height="400"
          width="600"
        />
      </nuxt-link>
      <div>
        <p>{{ formatDate(stories[0].published_at) }}</p>
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
            height="400"
            width="600"
          />
          <p>{{ formatDate(story.published_at) }}</p>
          <h6>{{ story.name }}</h6>
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
export default {
  name: 'Home',
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
  },
  methods: {
    formatDate (date) {
      // format date and time with javascript
      const d = new Date(date)
      // const month = `0${d.getMonth() + 1}`.slice(-2)
      // get month name
      const monthName = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ][d.getMonth()]
      // const month = `0${d.getMonth() + 1}`.slice(-2)
      const day = `0${d.getDate()}`.slice(-2)
      const year = d.getFullYear()
      // const hours = `0${d.getHours()}`.slice(-2)
      // const minutes = `0${d.getMinutes()}`.slice(-2)
      // return `${day}/${month}/${year} ${hours}:${minutes}`
      return `${monthName} ${day}, ${year}`
    }
  }
}
</script>

<style lang="scss">
.blog {
  .blog-post {
    border-bottom: none;
    height: 100%;
    img {
      opacity: 1;
      transition: var(--transition);
      margin-bottom: var(--space-3);
      border-radius: 8px;
    }
    &:hover {
      border-bottom: none;
      opacity: var(--opacity-on-hover);
    }
  }

  .blog-post-date {
    font-size: var(--font-size-4);
    text-transform: uppercase;
  }
}
</style>