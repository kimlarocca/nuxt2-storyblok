<template>
  <div class="l-container">
    <v-spacer />
    <the-header layout="right">
      <template #logo>
        <div class="logo">
          <nuxt-link to="/" class="logo">
            <img src="/logo.png" alt="logo" />
            <h6>Your Company Name</h6>
          </nuxt-link>
        </div>
      </template>
      <template #menu>
        <the-menu
          layout="right"
          :primary-nav="[
            {
              url: 'http://www.google.com',
              text: 'Primary Link 1',
            },
            {
              url: 'http://www.google.com',
              text: 'Primary Link 2',
            },
            {
              url: 'http://www.google.com',
              text: 'Primary Link 3',
            },
          ]"
          :secondary-nav="[
            {
              url: 'http://www.google.com',
              text: 'Secondary Link 1',
            },
            {
              url: 'http://www.google.com',
              text: 'Secondary Link 2',
            },
            {
              url: 'http://www.google.com',
              text: 'Secondary Link 3',
            },
          ]"
        >
          <template #logo>
            <img src="/logo.png" alt="logo" />
          </template>
          <template #component>
            <nuxt-link to="/contact">
              <v-button> Contact Us </v-button>
            </nuxt-link>
          </template>
        </the-menu>
      </template>
    </the-header>
    <v-spacer size="triple" />
    <main>
      <nuxt keep-alive />
    </main>
    <v-spacer size="triple" />
    <the-footer
      company-name="Your Company Name"
      :navigation="[
        {
          url: 'tel:+1-908-246-8546',
          text: '(908) 246-8546',
        },
        {
          url: 'mailto:Lukeelectric13@gmail.com',
          text: 'Email Us',
        },
        {
          url: 'https://www.google.com/maps/place/Luke+Electric+LLC/@40.7005691,-74.9635502,15z/data=!4m5!3m4!1s0x0:0x935b5fafd5a5016a!8m2!3d40.7005691!4d-74.9635502',
          text: 'Directions',
        },
      ]"
    >
      <template #logo>
        <img src="/logo.png" alt="logo" />
      </template>
    </the-footer>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  mode: 'out-in',
  components: {
    TheFooter: () => import('vue-evolve/src/components/TheFooter'),
    TheHeader: () => import('vue-evolve/src/components/TheHeader'),
    TheMenu: () => import('vue-evolve/src/components/TheMenu'),
  },
}
</script>

<style lang="scss">
.logo,
.logo:active {
  height: auto;
  border-bottom: none;
  padding: 0;
  display: flex;
  align-items: center;

  &:hover {
    border-bottom: none;
  }

  img {
    max-height: 35px;
    margin-right: var(--space-2);
  }

  h5 {
    color: var(--color-text);
  }
}

header {
  ul.secondary-navigation {
    margin-left: 0;
  }
}

footer {
  border-top: solid 1px var(--color-light-gray);
}

footer .v-spacer {
  padding: var(--space-1);
}

footer p {
  font-style: italic;
  font-size: var(--font-size-5) !important;
}
</style>