import "./styles/tailwind.css";
import "./styles/style.scss";
import "@chinese-fonts/kksjt/dist/kuaikanshijieti20231213/result.css";

import Alpine from "alpinejs";
import collapse from "@alpinejs/collapse";

import { mountPhotoGallery, mountWeather } from "./preact";
import { initFancybox } from "./utils/fancybox";
import { initLinkSubmit } from "./links-submit";
import { generateQRCode, generatePoster } from "./utils/poster";
import { initActivityCalendar } from "./utils/activity-calendar";
import { initTwikooComments } from "./utils/twikoo";
import { registerAlpineComponents } from "./alpine";
import { initPjax } from "./pjax/pjax";
import { registerPjaxHooks } from "./pjax/pjax-hooks";
import { reinitializeComponents } from "./pjax/reinit";
import { initImageLoaded, initImageCaption } from "./utils/image";
import {
  initDropdownMenus,
  initBackToTop,
  initMomentsTags,
  initFloatingPagination,
  initActiveNavItem,
  initSearchShortcut,
} from "./modules";

// 注册全局函数
window.mountPhotoGallery = mountPhotoGallery;
window.mountWeather = mountWeather;
window.generateQRCode = generateQRCode;
window.generatePoster = generatePoster;
window.reinitializeComponents = reinitializeComponents;

// 注册 Alpine.js 组件和插件
registerAlpineComponents(Alpine);
Alpine.plugin(collapse);

window.Alpine = Alpine;
Alpine.start();

// 初始化搜索快捷键
initSearchShortcut();

// 页面初始加载
document.addEventListener("DOMContentLoaded", () => {
  if (window.themeConfig?.custom?.enable_pjax) {
    initPjax();
    registerPjaxHooks();
  }

  initDropdownMenus();
  if (window.themeConfig?.custom?.enable_fancybox !== true) {
    initFancybox();
  }
  initBackToTop();
  initLinkSubmit();
  initImageLoaded();
  initImageCaption();
  initActiveNavItem();
  initMomentsTags();
  initActivityCalendar();
  void initTwikooComments();
  initFloatingPagination();
});

window.addEventListener("pjax:success", () => {
  window.setTimeout(() => {
    initFloatingPagination();
  }, 0);
});
