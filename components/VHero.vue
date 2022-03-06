<template>
  <div class="hero" :style="{ backgroundImage: `url('${background}')` }">
    <div v-if="background" class="hero-overlay" />
    <div
      class="hero-content"
      :class="background ? 'has-background' : 'no-background l-container'"
    >
      <h2 class="hero-title">{{ title }}</h2>
      <v-spacer size="double" />
      <storyblok-rich-text :content="body" />
      <template v-if="ctaLink">
        <v-spacer size="double" />
        <nuxt-link :to="ctaLink" class="button">
          {{ cta }}
        </nuxt-link>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VHero',
  props: {
    background: {
      type: String,
      default: null
    },
    body: {
      type: Object,
      default: null
    },
    title: {
      type: String,
      default: null
    },
    cta: {
      type: String,
      default: 'Learn More'
    },
    ctaLink: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss">
.hero {
  text-align: center;
  background-size: cover;
  position: relative;

  .has-background {
    padding: 200px 50px;
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
      color: white !important;
    }

    .hero-title {
      color: white;
    }

    .button,
    a,
    a:visited,
    a:active {
      color: white;
      transition: var(--transition);

      &:hover {
        color: var(--color-primary);
      }
    }

    .button,
    .button,
    .button:visited,
    .button:active {
      background: none;
      border: solid 2px white;

      &:hover {
        background: white;
        border: solid 2px white;
      }
    }
  }

  @media all and (max-width: 1000px) {
    padding: 50px 25px;
  }

  .hero-overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: RGBA(0, 0, 0, 0.65);
  }

  .hero-content {
    z-index: 10;
    position: relative;
  }
}
</style>
