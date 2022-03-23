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
    <div class="component-live-preview">
        <component-preview :code="liveCode"></component-preview>
        <component-editor :code="liveCode" @change="updatePreview"></component-editor>
    </div>
</template>

<style scoped>
.component-live-preview {
    border: 2px solid black;
    display: flex;
    flex-direction: column;
}
</style>