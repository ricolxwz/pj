import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh-CN',

  title: '力扣解题笔记',
  description: '麦旋风超好吃的力扣解题笔记',

  theme: defaultTheme({
    logoDark: '/images/favicon-vue-f4f4f4.svg',
    logo: '/images/favicon-vue-f4f4f4.svg',
    navbar: [
      {
        text: '首页',
        link: '/',
      },
    ],
  }),

  bundler: viteBundler(),
})
