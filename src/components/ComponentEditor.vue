<script setup lang="ts">
import { ref, onBeforeMount } from 'vue'

import { PrismEditor } from 'vue-prism-editor'
import debounce from "debounce";

import 'vue-prism-editor/dist/prismeditor.min.css'; // import the styles somewhere

// import highlighting library (you can use any library you want just return html string)
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-markup';
import 'prismjs/themes/prism-tomorrow.css'; // import syntax highlighting styles

const props = defineProps({
  code: {
    type: String,
    required: true,
  },
  error: {
    type: [Error, Object],
    default: undefined,
  },
  delay: {
    type: Number,
    default: 300,
  },
  editorProps: {
    type: Object,
    default: () => ({}),
  },
  prismLang: {
    type: String,
    default: 'html',
    validator: (val: string) => ['html', 'vsg'].includes(val),
  },
  jsx: {
    type: Boolean,
    default: false,
  },
  squiggles: {
    type: Boolean,
    default: true,
  },
})

const emit = defineEmits(['change'])

// const updatePreview = ref(() => {})
const stableCode = ref(props.code)

const highlighter = (code: string) => {
  return highlight(code, languages[props.prismLang])
}

const updatePreview = (event: Event) => {
  // stableCode.value = value
  emit('change', stableCode.value)
}

// onBeforeMount(() => {
//   updatePreview.value = debounce((value: string) => {
//     stableCode.value = value;
//     emit("change", value);
//   }, props.delay)
// });
</script>

<script lang="ts">
export default {
  data: () => ({ code: 'console.log("Hello World")' }),
};
</script>

<template>
  <prism-editor 
    v-model="stableCode"
    @input="updatePreview"
    :highlight="highlighter"
    v-bind="editorProps"
    line-numbers
  ></prism-editor>
</template>