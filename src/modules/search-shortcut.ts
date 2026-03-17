/**
 * 初始化搜索快捷键
 * 绑定 Ctrl+K / Cmd+K 快捷键打开搜索组件
 */
export const initSearchShortcut = () => {
  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "k") {
      e.preventDefault();
      if (typeof SearchWidget !== "undefined") {
        SearchWidget.open();
      }
    }
  });
};
