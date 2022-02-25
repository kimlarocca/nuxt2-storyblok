// import design system components globally
import Vue from 'vue'
import VAccordion from 'vue-evolve/src/components/VAccordion'
import VButton from 'vue-evolve/src/components/VButton'
import VCard from 'vue-evolve/src/components/VCard'
import VSpacer from 'vue-evolve/src/components/VSpacer'

const components = { VAccordion, VButton, VCard, VSpacer }

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})
