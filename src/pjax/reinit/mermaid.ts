/**
 * 初始化Mermaid图表库
 * 检测页面中的Mermaid图表元素并进行渲染初始化
 * 根据当前主题模式设置相应的图表主题
 * 支持异步等待Mermaid库加载完成
 */
export const initMermaid = () => {
  const mermaidElements = document.querySelectorAll("text-diagram[data-type=mermaid]");
  if (!mermaidElements.length) return;

  const initializeMermaid = () => {
    const mermaid = (window as any).mermaid;
    if (!mermaid) return;
    const isDark = document.documentElement.classList.contains("dark");
    try {
      mermaid.initialize({
        startOnLoad: false,
        theme: isDark ? "dark" : "default",
      });
      mermaid.run({
        querySelector: "text-diagram[data-type=mermaid]",
      });
    } catch (e) {
      console.error("Mermaid initialization failed:", e);
    }
  };

  if ((window as any).mermaid) {
    initializeMermaid();
    return;
  }

  const checkInterval = 100;
  const maxAttempts = 50;
  let attempts = 0;

  const checkMermaidLoaded = () => {
    attempts++;
    if ((window as any).mermaid) {
      initializeMermaid();
      return;
    }
    if (attempts < maxAttempts) {
      setTimeout(checkMermaidLoaded, checkInterval);
    } else {
      console.warn("Mermaid library failed to load within timeout");
    }
  };

  setTimeout(checkMermaidLoaded, checkInterval);
};
