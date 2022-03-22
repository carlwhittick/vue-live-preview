<script setup lang="ts">
import { propsToAttrMap } from '@vue/shared';
import { onMounted, ref, watch } from 'vue'

import VButton from './VButton.vue'

const props = defineProps({
    code: String,
})

const iframeLoaded = (e: any) => {
  const iframe = e.target
  const vueScript = iframe.contentWindow.document.createElement('script')
  vueScript.setAttribute('src', 'https://unpkg.com/vue@next')

  const app = iframe.contentWindow.document.createElement('div')
  app.setAttribute('id', 'app')

  iframe.contentWindow.document.body.appendChild(app)
  iframe.contentWindow.document.head.appendChild(vueScript)

  const LiveComponent = {
    components: {
      VButton,
    },
    template: props.code,
  }
  
  vueScript.onload = () => {
    console.log('vueScript.onLoad')
    const Vue = iframe.contentWindow.Vue
    const app = Vue.createApp({
      components: {
        LiveComponent
      },
      data() {
        return {
          component: 'LiveComponent'
        }
      },
      template: `<component :is="component" />`,
    }).mount('#app')

    watch(() => props.code, (newCode) => {
      app.$data.component = ''

      app.$.components.LiveComponent = {
        components: LiveComponent.components,
        template: newCode,
      }

      app.$data.component = 'LiveComponent'
    })
  }
}
</script>

<template>
  <iframe @load="iframeLoaded"></iframe>
</template>

<style scoped>

</style>