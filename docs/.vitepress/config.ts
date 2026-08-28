import { basename } from 'node:path'
import { defineConfig } from 'vitepress'
import type { HeadConfig } from 'vitepress'
import MarkdownPreview from 'vite-plugin-markdown-preview'

import { head, nav, sidebar } from './configs'

const APP_BASE_PATH = basename(process.env.GITHUB_REPOSITORY || '')
const base = APP_BASE_PATH ? `/${APP_BASE_PATH}/` : '/'

// head 中的绝对路径不会自动添加 base 前缀，需手动拼接
const resolvedHead: HeadConfig[] = head.map(([tag, attrs]) => {
  if (!attrs) return [tag, attrs]
  const resolved = { ...attrs }
  if (typeof resolved.href === 'string' && resolved.href.startsWith('/')) {
    resolved.href = base + resolved.href.slice(1)
  }
  if (typeof resolved.content === 'string' && resolved.content.startsWith('/')) {
    resolved.content = base + resolved.content.slice(1)
  }
  return [tag, resolved]
})

export default defineConfig({
  outDir: '../dist',
  base,

  lang: 'zh-CN',
  title: 'Rime 输入法生态导航',
  description: 'Rime 输入法生态导航',
  head: resolvedHead,

  lastUpdated: true,
  cleanUrls: true,

  /* markdown 配置 */
  markdown: {
    lineNumbers: true,
  },

  /* 主题配置 */
  themeConfig: {
    i18nRouting: false,

    logo: '/favicon.ico',

    nav,
    sidebar,

    /* 右侧大纲配置 */
    outline: {
      level: 'deep',
      label: '目录',
    },

    /* 社交链接 */
    socialLinks: [{ icon: 'github', link: 'https://github.com/icret/RimeNav' }],

    /*** 自定义配置 ***/
    visitor: {
      /** 统计 id（单独页面的统计会作为前缀使用）*/
      badgeId: 'icret.RimeNav',
    },

    /**
     * giscus 评论配置
     * repoId 请根据 https://giscus.app/zh-CN 生成内容填写
     */
    comment: {
      /** github 仓库地址 */
      repo: 'icret/RimeNav',
      /** giscus 仓库 ID */
      repoId: 'R_kgDOUG0Yhg',
      /** 映射方式：按 discussion 编号 */
      mapping: 'number',
      /** 指定 discussion 编号 */
      term: '2',
    },

    footer: {
      copyright: 'Copyright © 2026-present RimeNav',
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
  },

  vite: {
    plugins: [MarkdownPreview()],
    css: {
      preprocessorOptions: {
        scss: { api: 'modern-compiler' },
      },
    },
  },
})
