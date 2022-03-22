<script setup lang="ts">
import { ref } from 'vue'
import ComponentEditor from './ComponentEditor.vue'
import ComponentPreview from './ComponentPreview.vue'

const code = ref(`<button>Click me</button>`)

function updatePreview(value: string) {
    code.value = value
    console.log('updatePreview', value)
}
</script>

<template>
    <component-editor :code="code" @change="updatePreview"></component-editor>
    <component-preview :code="code"></component-preview>
    {{ code }}
</template>