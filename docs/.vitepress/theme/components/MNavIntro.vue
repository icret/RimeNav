<script setup lang="ts">
import { MIXED_SVG, PLATFORM_META } from '../platforms'
import type { NavPlatform } from '../platforms'

const LEGEND_ORDER: NavPlatform[] = ['macOS', 'Windows', 'Android', 'Web']

const legend = [
  ...LEGEND_ORDER.map((p) => ({
    label: PLATFORM_META[p].label,
    color: PLATFORM_META[p].color,
    svg: PLATFORM_META[p].svg,
  })),
  { label: '多平台', color: 'var(--vp-c-text-2)', svg: MIXED_SVG },
]
</script>

<template>
  <div class="m-nav-intro">
    <span class="m-nav-intro__hint">
      角标表示卡片内容可用的平台，多平台会自动收折为一个图标，悬停可查看明细。
    </span>
    <span class="m-nav-intro__legend">
      <span v-for="item in legend" :key="item.label" class="m-nav-intro__item">
        <span class="m-platform-badge" :style="{ color: item.color }">
          <svg viewBox="0 0 24 24" aria-hidden="true" v-html="item.svg"></svg>
        </span>
        <span class="m-nav-intro__label">{{ item.label }}</span>
      </span>
    </span>
  </div>
</template>

<style scoped>
.m-nav-intro {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px 16px;
  margin-bottom: 24px;
  padding: 10px 12px;
  border: 1px solid var(--vp-c-bg-soft);
  border-radius: 8px;
  background-color: var(--vp-c-bg-soft);
  font-size: 12px;
  color: var(--vp-c-text-2);
}

.m-nav-intro__hint {
  flex: 1;
  min-width: 0;
}

.m-nav-intro__legend {
  display: flex;
  align-items: center;
  gap: 12px;
  white-space: nowrap;
}

.m-nav-intro__item {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.m-nav-intro__label {
  line-height: 1;
}
</style>
