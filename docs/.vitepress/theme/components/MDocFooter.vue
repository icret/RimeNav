<script setup lang="ts">
import { inject, Ref, computed } from 'vue'
import { useData } from 'vitepress'
import { useLayout } from 'vitepress/theme-without-fonts'

import { usePageId } from '../composables'

const DEV = inject<Ref<boolean>>('DEV')
const { theme } = useData()
const { footer, visitor } = theme.value

const { hasSidebar } = useLayout()
const pageId = usePageId()

const isDocFooterVisible = computed(() => {
  return !DEV || footer?.message || footer?.copyright || visitor?.badgeId
})
</script>

<template>
  <div
    v-if="isDocFooterVisible"
    v-show="hasSidebar"
    class="m-doc-footer mt-6 flex flex-col items-center border-t border-[var(--vp-c-gutter)] px-6 pt-8 text-sm font-medium leading-6 text-[var(--vp-c-text-2)]"
  >
    <div class="flex items-center">
      <img
        v-if="!DEV && visitor"
        class="visitor mr-2"
        :src="`https://visitor-badge.laobi.icu/badge?page_id=${visitor.badgeId}.${pageId}`"
        title="当前页面累计访问数"
        onerror="this.style.display = 'none'"
      />
      <p v-if="footer?.message">{{ footer.message }}</p>
    </div>
    <p class="flex items-center" v-if="footer?.copyright">
      {{ footer.copyright }}
    </p>
  </div>
</template>

<style scoped>
@media (max-width: 414px) {
  .visitor {
    display: none;
  }
}
</style>
