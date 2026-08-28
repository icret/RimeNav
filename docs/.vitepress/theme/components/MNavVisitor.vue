<script setup lang="ts">
import { useData } from 'vitepress'
import { inject, Ref } from 'vue'

const DEV = inject<Ref<boolean>>('DEV')
const { theme } = useData()
const { visitor } = theme.value
</script>

<template>
  <img
    v-if="!DEV && visitor"
    class="visitor ml-2"
    :src="`https://visitor-badge.laobi.icu/badge?page_id=${visitor.badgeId}`"
    onerror="this.style.display = 'none'"
  />
</template>

<style scoped>
@media (min-width: 768px) and (max-width: 920px) {
  .visitor {
    display: none;
  }
}
</style>
