<script setup lang="ts">
import { computed } from 'vue'
import { withBase } from 'vitepress'
import { slugify } from '@mdit-vue/shared'

import type { NavLink } from '../types'
import { MIXED_SVG, PLATFORM_META } from '../platforms'

const props = defineProps<{
  icon?: NavLink['icon']
  title?: NavLink['title']
  desc?: NavLink['desc']
  link: NavLink['link']
  platform?: NavLink['platform']
}>()

const formatTitle = computed(() => {
  if (!props.title) {
    return ''
  }
  return slugify(props.title)
})

const svg = computed(() => {
  if (typeof props.icon === 'object') return props.icon.svg
  return ''
})

const platforms = computed(() => props.platform ?? [])
const isMixed = computed(() => platforms.value.length > 1)
const platformLabels = computed(() =>
  platforms.value.map((p) => PLATFORM_META[p].label).join(' · '),
)
// 处理article链接的 base 路径
const resolvedLink = computed(() => {
  return withBase(props.link)
})
</script>

<template>
  <!-- 原先的绝对路径 -->
  <!-- <a v-if="link" class="m-nav-link" :href="link" target="_blank" rel="noreferrer"> -->
  <!-- 对/article/、/others/链接使用相对路径 -->
  <a v-if="link" class="m-nav-link" :href="resolvedLink" target="_blank" rel="noreferrer">
    <article class="box">
      <div class="box-header">
        <div v-if="svg" class="icon" v-html="svg"></div>
        <div v-else-if="icon && typeof icon === 'string'" class="icon">
          <img
            :src="withBase(icon)"
            :alt="title"
            onerror="this.parentElement.style.display = 'none'"
          />
        </div>
        <h5 v-if="title" :id="formatTitle" class="title">{{ title }}</h5>
        <ul
          v-if="platforms.length"
          class="platform-badges"
          :aria-label="isMixed ? `支持多平台：${platformLabels}` : `支持平台：${platformLabels}`"
        >
          <li v-if="isMixed" class="m-platform-badge" :title="`多平台：${platformLabels}`">
            <svg viewBox="0 0 24 24" aria-hidden="true" v-html="MIXED_SVG"></svg>
          </li>
          <template v-else>
            <li
              v-for="p in platforms"
              :key="p"
              class="m-platform-badge"
              :title="PLATFORM_META[p].label"
              :style="{ color: PLATFORM_META[p].color }"
            >
              <svg
                v-if="PLATFORM_META[p].svg"
                viewBox="0 0 24 24"
                aria-hidden="true"
                v-html="PLATFORM_META[p].svg"
              ></svg>
              <span v-else class="m-platform-badge-text">{{ PLATFORM_META[p].label }}</span>
            </li>
          </template>
        </ul>
      </div>
      <p v-if="desc" class="desc">{{ desc }}</p>
    </article>
  </a>
</template>

<style lang="scss" scoped>
.m-nav-link {
  --m-nav-icon-box-size: 40px;
  --m-nav-icon-size: 24px;
  --m-nav-box-gap: 12px;

  display: block;
  border: 1px solid var(--vp-c-bg-soft);
  border-radius: 8px;
  height: 100%;
  text-decoration: inherit;
  background-color: var(--vp-c-bg-alt);
  transition: all 0.25s;
  &:hover {
    box-shadow: var(--vp-shadow-2);
    border-color: var(--vp-c-brand);
    text-decoration: initial;
    background-color: var(--vp-c-bg);
  }

  .box {
    display: flex;
    flex-direction: column;
    padding: var(--m-nav-box-gap);
    height: 100%;
    color: var(--vp-c-text-1);
    &-header {
      display: flex;
      align-items: center;
    }
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: calc(var(--m-nav-box-gap) - 2px);
    border-radius: 6px;
    width: var(--m-nav-icon-box-size);
    height: var(--m-nav-icon-box-size);
    font-size: var(--m-nav-icon-size);
    background-color: var(--vp-c-default-soft);
    transition: background-color 0.25s;
    :deep(svg) {
      width: var(--m-nav-icon-size);
      fill: currentColor;
    }
    :deep(img) {
      border-radius: 4px;
      width: var(--m-nav-icon-size);
    }
  }

  .title {
    overflow: hidden;
    flex-grow: 1;
    white-space: nowrap;
    text-overflow: ellipsis;
    line-height: var(--m-nav-icon-box-size);
    font-size: 16px;
    font-weight: 600;
  }

  .platform-badges {
    display: inline-flex;
    align-items: center;
    flex-shrink: 0;
    gap: 2px;
    margin: 0 0 0 6px;
    padding: 0;
    list-style: none;
  }

  .desc {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    flex-grow: 1;
    margin: calc(var(--m-nav-box-gap) - 2px) 0 0;
    line-height: 1.5;
    font-size: 12px;
    color: var(--vp-c-text-2);
  }
}

@media (max-width: 960px) {
  .m-nav-link {
    --m-nav-icon-box-size: 36px;
    --m-nav-icon-size: 20px;
    --m-nav-box-gap: 8px;

    .title {
      font-size: 14px;
    }
  }
}
</style>
