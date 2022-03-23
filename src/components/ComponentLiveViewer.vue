<script setup lang="ts">
import { ref } from 'vue'
import ComponentEditor from './ComponentEditor.vue'
import ComponentPreview from './ComponentPreview.vue'

const props = defineProps(['code'])

const liveCode = ref(props.code)

function updatePreview(value: string) {
    liveCode.value = value
    console.log('updatePreview', value)
}
</script>

<template>
    <component-editor :code="liveCode" @change="updatePreview"></component-editor>
    <component-preview :code="liveCode"></component-preview>
    {{ liveCode }}
</template>