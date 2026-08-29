import { basename } from 'node:path'
import { defineConfig } from 'vitepress'
import type { HeadConfig } from 'vitepress'
import MarkdownPreview from 'vite-plugin-markdown-preview'
import tailwindcss from '@tailwindcss/vite'

import { head, nav, sidebar, navHant, sidebarHant } from './configs/index.ts'

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

  head: resolvedHead,

  lastUpdated: true,
  cleanUrls: true,

  /* markdown 配置 */
  markdown: {
    lineNumbers: true,
  },

  /* 主题配置（语言无关的共享部分） */
  themeConfig: {
    i18nRouting: true,

    logo: '/favicon.ico',

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
  },

  /* 多语言配置：root 为简体默认，zh-Hant 为繁体镜像（/zh-Hant/） */
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: 'Rime 输入法生态导航',
      description: 'Rime 输入法生态导航',
      themeConfig: {
        nav,
        sidebar,
        outline: {
          level: 'deep',
          label: '目录',
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
    },
    'zh-Hant': {
      label: '繁體中文',
      lang: 'zh-Hant',
      link: '/zh-Hant/',
      title: 'Rime 輸入法生態導航',
      description: 'Rime 輸入法生態導航',
      themeConfig: {
        nav: navHant,
        sidebar: sidebarHant,
        outline: {
          level: 'deep',
          label: '目錄',
        },
        lastUpdated: {
          text: '最後更新於',
          formatOptions: {
            dateStyle: 'short',
            timeStyle: 'medium',
          },
        },
        docFooter: {
          prev: '上一篇',
          next: '下一篇',
        },
        returnToTopLabel: '回到頂部',
        sidebarMenuLabel: '選單',
        darkModeSwitchLabel: '主題',
        lightModeSwitchTitle: '切換到淺色模式',
        darkModeSwitchTitle: '切換到深色模式',
      },
    },
  },

  vite: {
    plugins: [tailwindcss(), MarkdownPreview()],
    css: {
      preprocessorOptions: {
        scss: { api: 'modern-compiler' },
      },
    },
  },
})
