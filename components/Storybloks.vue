<template>
  <div class="storybloks">
    <div v-for="(item, index) in content" :key="index">
      <content-card
        v-if="
          item.component === 'content card' &&
          item.layout !== 'hero' &&
          item.layout !== 'none'
        "
        :title="item.header"
        :image="item.image.filename"
        :alt-text="item.header"
        :vertical-alignment="item.alignment === 'top' ? 'top' : 'middle'"
        :alignment="item.layout === 'right' ? 'right' : 'left'"
      >
        <storyblok-rich-text
          v-if="typeof item.body === 'object'"
          :content="item.body"
        />
      </content-card>
      <v-hero
        v-if="
          item.component === 'content card' &&
          (item.layout === 'hero' || item.layout === 'none')
        "
        :background="item.image.filename"
        :title="item.header"
        :body="item.body"
        :cta-link="item.learn_more_link.cached_url"
      />
      <v-spacer v-if="item.component === 'spacer'" :size="item.size" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Storybloks',
  props: {
    content: {
      type: Array,
      required: true
    }
  }
}
</script>