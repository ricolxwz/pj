import { defineConfig } from "vitepress";
import { nav } from "./nav.mjs";
import { sidebar } from "./sidebar.mjs";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "项目文档",
  description: "一些拼凑的项目文档",
  lastUpdated: true,
  lang: "zh_Hans",
  // ignoreDeadLinks: true,
  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/svg+xml",
        href: "https://cdn.jsdelivr.net/gh/sigmax0124/logo@master/favicon-mc-1.svg",
      },
    ],
    [
      'script',
      {
        src: "https://umami.ricolxwz.io/script.js",
        defer: true,
        "data-website-id": "3622c0e3-8f69-4755-bc4a-f489757283a5"
      }
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/@fontsource/mononoki@5.1.0/index.min.css"
      }
    ]
  ],
  markdown: {
    image: {
      lazyLoading: true,
    },
    math: true,
    container: {
      tipLabel: "提示",
      warningLabel: "警告",
      dangerLabel: "危险",
      infoLabel: "信息",
      detailsLabel: "例子",
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "https://cdn.jsdelivr.net/gh/sigmax0124/logo@master/favicon-mc-1.svg",
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
    editLink: {
      pattern: "https://github.com/vuejs/vitepress/edit/main/docs/:path",
      text: "在 GitHub 上编辑此页面",
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    outline: {
      label: "页面导航",
    },
    lastUpdatedText: "📑 最后更新于",
    langMenuLabel: "多语言",
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
    nav,
    sidebar,
    socialLinks: [{ icon: "github", link: "https://github.com/ricolxwz" }],
    footer: {
      message: "采用 CC BY-NC 4.0 许可证发布",
      copyright: "版权所有 © 2024 许文泽 ️🌴",
    },
  },
});
