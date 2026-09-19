import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      // トップページのhero(見出し)より上にバナー画像を表示
      'home-hero-before': () =>
        h('div', { class: 'custom-hero-banner' }, [
          h('img', {
            src: '/img/top.png',
            alt: '鹿児島のICT＆プログラミング教室 ニコプロ',
          }),
        ]),
    })
  },
}
