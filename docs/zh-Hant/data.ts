import type { NavLink } from '../.vitepress/theme/types'

type NavData = {
  title: string
  items: NavLink[]
}

export const NAV_DATA: NavData[] = [
  {
    title: '輸入法前端',
    items: [
      {
        icon: 'https://avatars.githubusercontent.com/rime',
        title: 'RIME',
        desc: 'RIME | 中州韻輸入法引擎官方',
        link: 'https://rime.im/',
        platform: ['macOS', 'Windows', 'Linux', 'Android'],
      },
      {
        icon: 'https://avatars.githubusercontent.com/rime',
        title: 'Squirrel',
        desc: '【鼠鬚管】Rime for macOS',
        link: 'https://github.com/rime/squirrel',
        platform: ['macOS'],
      },
      {
        icon: 'https://avatars.githubusercontent.com/rime',
        title: 'Weasel',
        desc: '【小狼毫】Rime for Windows',
        link: 'https://github.com/rime/weasel',
        platform: ['Windows'],
      },
      {
        icon: 'https://avatars.githubusercontent.com/osfans',
        title: 'Trime',
        desc: '同文安卓輸入法平臺',
        link: 'https://github.com/osfans/trime/blob/develop/README_sc.md',
        platform: ['Android'],
      },
    ],
  },
  {
    title: '圖形配置工具',
    items: [
      {
        icon: 'https://avatars.githubusercontent.com/neolee',
        title: 'SCT',
        desc: '鼠鬚管 (Squirrel) 配置工具',
        link: 'https://github.com/neolee/sct',
        platform: ['macOS'],
      },
      {
        icon: 'https://avatars.githubusercontent.com/bryanzk',
        title: 'RimeConfigurator',
        desc: '鼠鬚管配置器',
        link: 'https://github.com/bryanzk/RimeConfigurator',
        platform: ['macOS'],
      },
      {
        icon: 'https://avatars.githubusercontent.com/wolfprince12',
        title: 'Squirrel Panel',
        desc: '鼠鬚管控制面板 · Squirrel Panel',
        link: 'https://github.com/wolfprince12/squirrel-Panel',
        platform: ['macOS'],
      },
      {
        icon: 'https://avatars.githubusercontent.com/heizhuyutou',
        title: 'Squirrel Theme Switcher',
        desc: '鼠鬚管主題切換器',
        link: 'https://github.com/heizhuyutou/squirrel-theme-switcher',
        platform: ['macOS'],
      },
    ],
  },
  {
    title: '主題與配色',
    items: [
      {
        icon: 'https://avatars.githubusercontent.com/LEOYoon-Tsaw',
        title: 'Squirrel-Designer',
        desc: 'Squirrel 主題設計與配色工具',
        link: 'https://github.com/LEOYoon-Tsaw/Squirrel-Designer',
        platform: ['macOS'],
      },
      {
        icon: 'https://avatars.githubusercontent.com/Yester03',
        title: 'rime-theme',
        desc: '小狼毫（Weasel） 用的 Rime 主題，主打 Apple 風格的液態玻璃觀感',
        link: 'https://github.com/Yester03/rime-theme',
        platform: ['Windows'],
      },
      {
        icon: 'https://avatars.githubusercontent.com/fxliang',
        title: 'RimeSeeMe',
        desc: 'RIME 西米',
        link: 'https://fxliang.github.io/RimeSeeMe/',
        platform: ['Web'],
      },
      {
        icon: 'https://avatars.githubusercontent.com/pdog18',
        title: 'Rime Soak',
        desc: '潤筆 - Rime 設定小助手',
        link: 'https://pdog18.github.io/rime-soak/#/theme',
        platform: ['Web'],
      },
    ],
  },
  {
    title: '輸入方案與詞庫',
    items: [
      {
        icon: 'https://avatars.githubusercontent.com/iDvel',
        title: 'rime-ice',
        desc: '霧凇拼音：開箱即用的 Rime 配置方案',
        link: 'https://github.com/iDvel/rime-ice',
        platform: ['macOS', 'Windows', 'Linux', 'Android'],
      },
      {
        icon: 'https://avatars.githubusercontent.com/Mintimate',
        title: 'oh-my-rime',
        desc: '薄荷拼音',
        link: 'https://github.com/Mintimate/oh-my-rime',
        platform: ['macOS', 'Windows', 'Linux', 'Android'],
      },
      {
        icon: 'https://avatars.githubusercontent.com/gaboolic',
        title: 'rime-frost',
        desc: '白霜拼音-優化詞庫與配置',
        link: 'https://github.com/gaboolic/rime-frost',
        platform: ['macOS', 'Windows', 'Linux', 'Android'],
      },
      {
        icon: 'https://avatars.githubusercontent.com/amzxyz',
        title: 'rime-wanxiang',
        desc: '萬象拼音——基於深度優化的詞庫和語法模型',
        link: 'https://github.com/amzxyz/rime-wanxiang',
        platform: ['macOS', 'Windows', 'Linux', 'Android'],
      },
      {
        icon: 'https://avatars.githubusercontent.com/KyleBing',
        title: '極點五筆 86',
        desc: '86 版極點五筆的輸入配置方案',
        link: 'https://github.com/KyleBing/rime-wubi86-jidian',
        platform: ['macOS', 'Windows', 'Linux', 'Android'],
      },
      {
        icon: 'https://avatars.githubusercontent.com/KyleBing',
        title: '五筆碼表助手 for Rime',
        desc: '管理 Rime 五筆詞庫的工具',
        link: 'https://github.com/KyleBing/wubi-dict-editor',
        platform: ['Web'],
      },
    ],
  },
  {
    title: '教程與討論',
    items: [
      {
        icon: 'https://nvcc-v.com/favicon.ico',
        title: 'rime-ice 多設備同步',
        desc: 'rime-ice 拼音多設備配置與同步教程',
        link: 'https://nvcc-v.com/2026/03/18/rime-ice-pinyin-multi-device-setup-sync/',
        platform: ['Web'],
      },
      {
        icon: 'https://blog.isteed.cc/favicon.ico',
        title: 'Squirrel 定製指南',
        desc: 'Squirrel 輸入法深度定製教程',
        link: 'https://blog.isteed.cc/post/squirrel-customization-2022/',
        platform: ['Web'],
      },
      {
        icon: 'https://www.v2ex.com/static/favicon.ico',
        title: 'V2EX 討論',
        desc: 'Rime 輸入法相關討論帖',
        link: 'https://fast.v2ex.com/t/1094471',
        platform: ['Web'],
      },
    ],
  },
]
