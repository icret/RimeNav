import type { NavLink } from './.vitepress/theme/types'

type NavData = {
  title: string
  items: NavLink[]
}

export const NAV_DATA: NavData[] = [
  {
    title: '输入法前端',
    items: [
      {
        icon: 'https://avatars.githubusercontent.com/rime',
        title: 'RIME',
        desc: 'RIME | 中州韵输入法引擎官方',
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
      {
        icon: 'https://avatars.githubusercontent.com/ximeiorg',
        title: 'Xime',
        desc: '基于 Rime 的安卓输入法，支持五笔/拼音与本地 AI 模型',
        link: 'https://github.com/ximeiorg/Xime',
        platform: ['Android'],
      },
    ],
  },
  {
    title: '图形配置工具',
    items: [
      {
        icon: 'https://avatars.githubusercontent.com/neolee',
        title: 'SCT',
        desc: '鼠须管 (Squirrel) 配置工具',
        link: 'https://github.com/neolee/sct',
        platform: ['macOS'],
      },
      {
        icon: 'https://avatars.githubusercontent.com/bryanzk',
        title: 'RimeConfigurator',
        desc: '鼠须管配置器',
        link: 'https://github.com/bryanzk/RimeConfigurator',
        platform: ['macOS'],
      },
      {
        icon: 'https://avatars.githubusercontent.com/wolfprince12',
        title: 'Squirrel Panel',
        desc: '鼠须管控制面板 · Squirrel Panel',
        link: 'https://github.com/wolfprince12/squirrel-Panel',
        platform: ['macOS'],
      },
      {
        icon: 'https://avatars.githubusercontent.com/heizhuyutou',
        title: 'Squirrel Theme Switcher',
        desc: '鼠须管主题切换器',
        link: 'https://github.com/heizhuyutou/squirrel-theme-switcher',
        platform: ['macOS'],
      },
    ],
  },
  {
    title: '主题与配色',
    items: [
      {
        icon: 'https://avatars.githubusercontent.com/LEOYoon-Tsaw',
        title: 'Squirrel-Designer',
        desc: 'Squirrel 主题设计与配色工具',
        link: 'https://github.com/LEOYoon-Tsaw/Squirrel-Designer',
        platform: ['macOS'],
      },
      {
        icon: 'https://avatars.githubusercontent.com/Yester03',
        title: 'rime-theme',
        desc: '小狼毫（Weasel） 用的 Rime 主题，主打 Apple 风格的液态玻璃观感',
        link: 'https://github.com/Yester03/rime-theme',
        platform: ['Windows'],
      },
      {
        icon: 'https://avatars.githubusercontent.com/fxliang',
        title: 'RimeSeeMe',
        desc: 'RIME 西米：Web 端配色生成工具',
        link: 'https://fxliang.github.io/RimeSeeMe/',
        platform: ['Web'],
      },
      {
        icon: 'https://avatars.githubusercontent.com/pdog18',
        title: 'Rime Soak',
        desc: '润笔 - Rime 设置小助手',
        link: 'https://pdog18.github.io/rime-soak/#/theme',
        platform: ['Web'],
      },
    ],
  },
  {
    title: '输入方案与词库',
    items: [
      {
        icon: 'https://avatars.githubusercontent.com/iDvel',
        title: 'rime-ice',
        desc: '雾凇拼音：开箱即用的 Rime 配置方案',
        link: 'https://github.com/iDvel/rime-ice',
        platform: ['macOS', 'Windows', 'Linux', 'Android', 'iOS'],
      },
      {
        icon: 'https://avatars.githubusercontent.com/Mintimate',
        title: 'oh-my-rime',
        desc: '薄荷拼音：快速初始化 Rime 的模板方案',
        link: 'https://github.com/Mintimate/oh-my-rime',
        platform: ['macOS', 'Windows', 'Linux', 'Android', 'iOS'],
      },
      {
        icon: 'https://avatars.githubusercontent.com/gaboolic',
        title: 'rime-frost',
        desc: '白霜拼音-优化词库与配置',
        link: 'https://github.com/gaboolic/rime-frost',
        platform: ['macOS', 'Windows', 'Linux', 'Android', 'iOS'],
      },
      {
        icon: 'https://avatars.githubusercontent.com/amzxyz',
        title: 'rime-wanxiang',
        desc: '万象拼音——基于深度优化的词库和语法模型',
        link: 'https://github.com/amzxyz/rime-wanxiang',
        platform: ['macOS', 'Windows', 'Linux', 'Android', 'iOS'],
      },
      {
        icon: 'https://avatars.githubusercontent.com/KyleBing',
        title: '极点五笔 86',
        desc: '86 版极点五笔的输入配置方案',
        link: 'https://github.com/KyleBing/rime-wubi86-jidian',
        platform: ['macOS', 'Windows', 'Linux', 'Android', 'iOS'],
      },
      {
        icon: 'https://avatars.githubusercontent.com/KyleBing',
        title: '五笔码表助手 for Rime',
        desc: '管理 Rime 五笔词库的工具',
        link: 'https://github.com/KyleBing/wubi-dict-editor',
        platform: ['macOS', 'Windows', 'Linux'],
      },
    ],
  },
  {
    title: '教程与讨论',
    items: [
      {
        icon: 'https://nvcc-v.com/favicon.ico',
        title: 'rime-ice 多设备同步',
        desc: 'rime-ice 拼音多设备配置与同步教程',
        link: 'https://nvcc-v.com/2026/03/18/rime-ice-pinyin-multi-device-setup-sync/',
        platform: ['Web'],
      },
      {
        icon: 'https://blog.isteed.cc/favicon.ico',
        title: 'Squirrel 定制指南',
        desc: 'Squirrel 输入法深度定制教程',
        link: 'https://blog.isteed.cc/post/squirrel-customization-2022/',
        platform: ['Web'],
      },
      {
        icon: 'https://www.v2ex.com/static/favicon.ico',
        title: 'V2EX 讨论',
        desc: '仿微信输入法配色的 Rime 主题分享',
        link: 'https://fast.v2ex.com/t/1094471',
        platform: ['Web'],
      },
    ],
  },
]
