<template>
  <div class="l-container">
    <v-spacer />
    <the-header layout="right">
      <template #logo>
        <div class="logo">
          <nuxt-link to="/dashboard" class="logo">
            <img
              src="/images/logo-minimalist.png"
              width="51"
              height="70"
              alt="Equalicert Dashboard Logo"
            />
            <h6>Company Name</h6>
          </nuxt-link>
        </div>
      </template>
      <template #button>
        <nuxt-link to="settings" class="icon-only">
          <v-button class="icon-only" aria-label="settings" icon="fal fa-cog" />
        </nuxt-link>
        <nuxt-link to="logout" class="icon-only">
          <v-button
            class="icon-only"
            aria-label="logout"
            icon="fal fa-arrow-right-from-bracket"
          />
        </nuxt-link>
      </template>
    </the-header>
    <v-spacer size="triple" />
    <main>
      <nuxt keep-alive />
    </main>
    <v-spacer size="triple" />
    <the-footer
      company-name="Equalicert, Inc."
      :navigation="[
        {
          url: 'https://www.instagram.com/equalicert/',
          text: 'Instagram',
        },
        {
          url: 'https://www.facebook.com/equalicert',
          text: 'Facebook',
        },
        {
          url: 'https://equalicert.com/privacy/',
          text: 'Privacy Policy',
        },
      ]"
    >
      <template #logo>
        <img src="/images/logo.png" alt="Equalicert Logo" />
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
    TheHeader: () => import('vue-evolve/src/components/TheHeader')
  }
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
    max-width: 35px;
    margin-right: var(--space-2);
  }

  h5 {
    color: var(--color-text);
  }
}

header {
  .icon-only i {
    color: var(--color-text) !important;
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