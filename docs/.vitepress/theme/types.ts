export type NavPlatform = 'macOS' | 'Windows' | 'Linux' | 'Android' | 'iOS' | 'Web' | 'Other'

export interface NavLink {
  /** 站点图标 */
  icon?: string | { svg: string }
  /** 站点名称 */
  title: string
  /** 站点描述 */
  desc?: string
  /** 站点链接 */
  link: string
  /** 支持的平台角标，可多选（如跨平台填数组） */
  platform?: NavPlatform[]
}
