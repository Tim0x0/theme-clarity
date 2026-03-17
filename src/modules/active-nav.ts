/**
 * 初始化导航栏活动项
 * 根据当前页面路径设置对应的导航项为活动状态，并展开父菜单
 */
export const initActiveNavItem = () => {
  // 检查是否启用
  if (document.documentElement.dataset.navActive === "false") return;

  const currentPath = window.location.pathname;
  const navItems = document.querySelectorAll(".sidebar-nav-item, .dropdown-item");

  navItems.forEach((item) => {
    const link = item as HTMLAnchorElement;
    const href = link.getAttribute("href");
    if (!href || href === "#") return;

    // 精确匹配或路径前缀匹配
    const isActive =
      currentPath === href ||
      (href !== "/" && currentPath.startsWith(href)) ||
      (href === "/" && (currentPath === "/" || currentPath.startsWith("/page/")));

    if (isActive) {
      link.classList.add("active");
      // 如果是子菜单项，展开父菜单
      const parentSubmenu = link.closest(".has-submenu");
      if (parentSubmenu) {
        parentSubmenu.classList.add("expanded");
      }
    }
  });
};
