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
  <div
    class="m-nav-intro flex items-center justify-between mb-6 gap-x-4 gap-y-2 rounded-lg border border-[var(--vp-c-bg-soft)] bg-[var(--vp-c-bg-soft)] px-3 py-2.5 text-xs text-[var(--vp-c-text-2)]"
  >
    <span class="min-w-0 flex-1">
      角标表示卡片内容可用的平台，多平台会自动收折为一个图标，悬停可查看明细。
    </span>
    <span class="flex items-center gap-3 whitespace-nowrap">
      <span v-for="item in legend" :key="item.label" class="inline-flex items-center gap-1">
        <span class="m-platform-badge" :style="{ color: item.color }">
          <svg viewBox="0 0 24 24" aria-hidden="true" v-html="item.svg"></svg>
        </span>
        <span class="leading-none">{{ item.label }}</span>
      </span>
    </span>
  </div>
</template>
