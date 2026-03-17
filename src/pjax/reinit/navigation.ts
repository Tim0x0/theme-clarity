/**
 * 导航相关功能重新初始化
 * 从 modules 目录导入实现
 */

export { initActiveNavItem } from "../../modules/active-nav";

/**
 * 初始化下拉菜单
 * 下拉菜单事件监听器已在 main.ts 中全局绑定一次
 * 此函数在 PJAX 切换后不需要重新绑定事件
 * 因为事件委托在 document 上，对新元素同样有效
 */
export const initDropdownMenus = () => {};
