<template>
  <div>
    <nav :class="{ open: isOpen }">
      <div
        class="menu"
        tabindex="0"
        role="button"
        aria-label="toggle menu"
        @click="toggleMenu"
        @keypress.enter.space="toggleMenu"
      >
        <i class="fal fa-chevron-double-right" />
      </div>
      <div class="content">
        <h6 @click="toggleMenu" @keypress.enter.space="toggleMenu">
          <nuxt-link
            to="/dashboard"
            :class="{ 'nuxt-link-active': $route.name === 'assessment-score' }"
          >
            Dashboard
          </nuxt-link>
        </h6>
        <ul>
          <li @click="toggleMenu" @keypress.enter.space="toggleMenu">
            <nuxt-link class="sub-menu" to="/dashboard#overview">
              Overview
            </nuxt-link>
          </li>
          <li @click="toggleMenu" @keypress.enter.space="toggleMenu">
            <nuxt-link class="sub-menu" to="/dashboard#diversity">
              Diversity
            </nuxt-link>
          </li>
          <li @click="toggleMenu" @keypress.enter.space="toggleMenu">
            <nuxt-link class="sub-menu" to="/dashboard#equity">
              Pay Equity
            </nuxt-link>
          </li>
          <li @click="toggleMenu" @keypress.enter.space="toggleMenu">
            <nuxt-link class="sub-menu" to="/dashboard#policies">
              HR Policies
            </nuxt-link>
          </li>
          <li @click="toggleMenu" @keypress.enter.space="toggleMenu">
            <nuxt-link class="sub-menu" to="/dashboard#sentiment">
              Employee Sentiment
            </nuxt-link>
          </li>
          <li @click="toggleMenu" @keypress.enter.space="toggleMenu">
            <nuxt-link class="sub-menu" to="/recommendations">
              Recommendations
            </nuxt-link>
          </li>
        </ul>
        <v-spacer />
        <h6
          v-if="userType === 'global'"
          @click="toggleMenu"
          @keypress.enter.space="toggleMenu"
        >
          <nuxt-link to="/equal-time"> Equal Time </nuxt-link>
        </h6>
        <v-spacer />
        <h6
          v-if="userType === 'global'"
          @click="toggleMenu"
          @keypress.enter.space="toggleMenu"
        >
          <nuxt-link to="/portfolio"> Portfolio </nuxt-link>
        </h6>
        <v-spacer />
        <h6 @click="toggleMenu" @keypress.enter.space="toggleMenu">
          <nuxt-link to="/settings"> Settings </nuxt-link>
        </h6>
        <v-spacer />
        <h6 @click="toggleMenu" @keypress.enter.space="toggleMenu">
          <nuxt-link to="/logout"> Logout </nuxt-link>
        </h6>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'VNavigation',
  components: {
    VSpacer: () => import('vue-evolve/src/components/VSpacer')
  },
  data() {
    return {
      isDesktop: false,
      isOpen: false
    }
  },
  mounted() {
    if (window.innerWidth > 1000) {
      this.isOpen = true
      this.isDesktop = true
    }
  },
  methods: {
    toggleMenu() {
      if (window.innerWidth <= 1000) {
        this.isOpen = !this.isOpen
      }
    }
  }
}
</script>

<style lang="scss">
nav {
  position: fixed;
  background: white;
  top: 0;
  margin-left: -245px;
  min-height: 500px;
  height: 100vh;
  border-right: solid 1px var(--color-white);
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  background: var(--color-navigation-background);
  color: var(--color-navigation-text);
  font-size: var(--font-size-6);
  font-weight: 500;
  width: 275px;
  z-index: 100;
  transition: var(--transition);
  display: flex;
  align-items: center;

  @media all and (min-width: 1000px) {
    position: relative;
    height: 100%;
    margin-left: 0;
  }

  .menu {
    position: absolute;
    width: 40px;
    height: 40px;
    left: 255px;
    top: calc(50vh - 20px);
    border-radius: 50%;
    background: var(--color-white);
    z-index: 200;
    cursor: pointer;
    transition: var(--transition);

    @media all and (min-width: 1000px) {
      display: none;
    }

    i {
      position: absolute;
      height: 40px;
      transition: var(--transition);
      color: var(--color-text);
      font-size: 22px;
      top: 10px;
      left: 10px;
    }

    &:hover {
      i {
        opacity: var(--opacity-on-hover);
      }
    }
  }

  .content {
    position: absolute;
    top: 110px;
    left: 0;
    width: 265px;
    padding: var(--space-4) var(--space-6) var(--space-4) var(--space-4);

    @media all and (min-width: 1000px) {
      position: fixed;
    }

    ul {
      list-style: none;
      margin: var(--space-4) 0 0 8px;
    }

    h6,
    li {
      margin-bottom: var(--space-2);
    }

    li {
      display: block;
    }

    a,
    a:visited,
    a:active {
      color: var(--color-navigation-text);
      border-bottom: none;
    }

    h6 a {
      font-weight: 400;
      font-size: var(--font-size-6);
      padding: var(--space-1) var(--space-2) 2px;
    }

    .sub-menu {
      padding: var(--space-1) var(--space-2) 2px;
      margin: 0;
    }

    h6 a.nuxt-link-active {
      background-color: var(--color-white);
      color: var(--color-text);
      border-radius: 8px;
    }

    .sub-menu.nuxt-link-active {
      // background-color: var(--color-gray);
      // color: var(--color-text);
      // border-radius: 8px;
    }
  }

  &.open {
    margin-left: 0;

    i {
      transform: scaleX(-1);
    }
  }
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 300ms ease-out;
}

.slide-down-enter,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-100%);
  transition: all 300ms ease-in 0s;
}
</style>
