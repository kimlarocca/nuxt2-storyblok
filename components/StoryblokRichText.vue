<template>
  <div class="storyblok-rich-text">
    <h1
      v-if="content.type === 'heading' && content.attrs.level === 1"
      v-interpolation
      v-html="richText"
    />
    <h2
      v-else-if="content.type === 'heading' && content.attrs.level === 2"
      v-interpolation
      v-html="richText"
    />
    <h3
      v-else-if="content.type === 'heading' && content.attrs.level === 3"
      v-interpolation
      v-html="richText"
    />
    <h4
      v-else-if="content.type === 'heading' && content.attrs.level === 4"
      v-interpolation
      v-html="richText"
    />
    <h5
      v-else-if="content.type === 'heading' && content.attrs.level === 5"
      v-interpolation
      v-html="richText"
    />
    <h6
      v-else-if="content.type === 'heading' && content.attrs.level === 6"
      v-interpolation
      v-html="richText"
    />
    <blockquote
      v-else-if="content.type === 'blockquote'"
      v-interpolation
      v-html="richText"
    />
    <hr v-else-if="content.type === 'horizontal_rule'">
    <ul
      v-else-if="content.type === 'bullet_list'"
      v-interpolation
      v-html="richText"
    />
    <ol
      v-else-if="content.type === 'ordered_list'"
      v-interpolation
      v-html="richText"
    />
    <p
      v-else
      v-interpolation
      v-html="richText"
    />
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      default: null,
      required: true
    }
  },
  computed: {
    richText () {
      return this.$storyapi.richTextResolver.render(this.content)
    }
  }
}
</script>

<style lang="scss">
.storyblok-rich-text {
  &:last-child {
    margin-bottom: var(--space-4);
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  hr,
  ul,
  ol,
  blockquote,
  code {
    margin-bottom: var(--space-4);
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
