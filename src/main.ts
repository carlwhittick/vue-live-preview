import { createApp } from 'vue/dist/vue.esm-bundler.js'

import ComponentLiveViewer from './components/ComponentLiveViewer.vue'

console.log('Create vue app')
createApp({
  components: {
    ComponentLiveViewer,
  },
  data() {
    return {
      code: `
        <script setup>
          const message = 'HELLO IM A MESSAGE'
        </script>
        <template>
          <input type="text" />
          <button>{{ message }}</button>
        </template>
      `,
    }
  },
  template: `<component-live-viewer :code="code"></component-live-viewer>`,
}).mount('#app')
