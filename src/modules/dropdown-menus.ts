/**
 * 初始化下拉菜单
 * 使用事件委托处理下拉菜单点击，只需全局绑定一次
 */
export const initDropdownMenus = () => {
  document.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;
    const toggleBtn = target.closest(".dropdown-toggle");

    if (toggleBtn) {
      const parent = toggleBtn.closest(".has-submenu");
      if (parent) {
        e.preventDefault();
        e.stopPropagation();
        parent.classList.toggle("expanded");
      }
    }
  });
};
