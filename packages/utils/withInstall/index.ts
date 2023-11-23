import type { App, Plugin } from 'vue'
export type SFCWithInstall<T> = T & Plugin
export const withInstall = <T>(comp: T) => {
    (comp as SFCWithInstall<T>).install = (app: App) => {
        // 如果组件是以setup形式的话，那么组件的名字会挂载到__name上
        const name = (comp as any).name || (comp as any).__name
        app.component(name, comp)
    }
    return comp as SFCWithInstall<T>
}