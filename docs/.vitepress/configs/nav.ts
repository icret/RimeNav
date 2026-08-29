import type { DefaultTheme } from 'vitepress'

// 导航栏链接（简体 root）
export const nav: DefaultTheme.Config['nav'] = [
  { text: '灵动计算器', link: 'https://calc.appsr.cn/' },
  { text: '知觉色彩', link: 'https://colors.sbert.cn/' },
]

// 导航栏链接（繁体 zh-Hant）
export const navHant: DefaultTheme.Config['nav'] = [
  { text: '靈動計算器', link: 'https://calc.appsr.cn/' },
  { text: '知覺色彩', link: 'https://colors.sbert.cn/' },
]
