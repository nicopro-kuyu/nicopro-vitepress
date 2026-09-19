import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'ja-JP',
  title: '鹿児島のICT＆プログラミング教室 ニコプロ',
  description: '子ども(小学生中学生)向け！鹿児島のICT＆プログラミング教室です。パソコンとScratch(スクラッチ)を使ってICT＆プログラミングを楽しく学ぼう！',

  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/img/favicon.png' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900' }],
    // Google アナリティクス(gtag.js)
    ['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-2LKP1GKDMG' }],
    ['script', {}, `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-2LKP1GKDMG');`],
  ],

  cleanUrls: true,
  appearance: false,

  themeConfig: {
    logo: '/img/logo.png',
    siteTitle: false,

    nav: [
      { text: 'ニコプロって？', link: '/about/' },
      {
        text: 'プログラミング教室',
        items: [
          { text: 'コンセプト・効果・特徴', link: '/programming/merit/' },
          { text: 'コース紹介', link: '/programming/course-price/' },
          { text: '無料体験会', link: '/programming/taiken/' },
          { text: '入会の流れ', link: '/programming/join/' },
        ],
      },
      { text: '教室案内', link: '/class/' },
      { text: 'お問い合わせ', link: '/contact/' },
    ],

    sidebar: false,
    outline: false,
    aside: false,
    footer: {
      copyright: 'Copyright © 2020- nicopro.',
    },
  },
})
