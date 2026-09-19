# ニコプロ ホームページ (VitePress版)

VuePress 1.5.2 → VitePress 1.6.4 へ移行したソースです。

## ローカルで確認する

```bash
npm install
npm run dev
```

http://localhost:5173 で確認できます。

## ビルド

```bash
npm run build
npm run preview   # ビルド結果をローカルで確認
```

出力先: `docs/.vitepress/dist`

## Netlifyへのデプロイ

`netlify.toml` を同梱済みです。Netlify管理画面のビルド設定を変更する場合は以下に合わせてください。

- Build command: `npm run build`
- Publish directory: `docs/.vitepress/dist`
- Node version: 18以上を推奨(旧サイトは16でしたが、VitePress 1.6は18以上を推奨します。Netlifyの環境変数 `NODE_VERSION` を `18` 以上に設定してください)

## 旧サイトからの変更点・注意事項

1. **トップページのVuetifyを廃止**
   旧サイトはVue2専用の「Vuetify」というUIライブラリでトップページのボタン・レイアウトを組んでいました。VitePressはVue3ベースのためVuetify(2系)は使えず、素のHTML/CSSで同等のデザインに置き換えています。見た目はほぼ同じですが、細部の余白などは多少変わっている可能性があるのでご確認ください。

2. **ブログ記事(お知らせ)は今回未移行**
   旧サイトでも `/posts` へのリンクはコメントアウトされ非表示でした。今回のリニューアルでも同様に非表示のままにしています。`src/_posts` 配下の記事データ自体は移行していないので、将来的に復活させる場合は改めてご相談ください。

3. **Googleアナリティクスの計測タグ**
   旧サイトの `UA-92408090-2` は「ユニバーサルアナリティクス」という仕組みで、2023年7月に計測終了しており現在は機能していません。`docs/.vitepress/config.mts` 内にGA4(測定ID `G-XXXXXXXXXX`)を設定する箇所をコメントアウトで用意しているので、GA4の測定IDをお持ちでしたら有効化してください。お持ちでない場合はGoogle Analyticsの管理画面で新規に作成できます。

4. **お問い合わせフォーム**
   Netlify Forms(`data-netlify="true"`)の仕組みはそのまま移植しています。デプロイ先が引き続きNetlifyであれば、追加設定なしでフォーム送信が機能するはずです。reCAPTCHA設定 (`data-netlify-recaptcha`) もそのまま残しています。

5. **検索機能**
   旧サイトでは無効化されていましたが、VitePress標準のローカル検索(サイト内検索)を有効にしています。不要であれば `config.mts` の `themeConfig.search` を削除してください。

6. **リンクの末尾スラッシュ**
   VitePressはリンクの末尾スラッシュの有無に厳密なため、`/contact` → `/contact/` のように末尾に `/` を付ける形に統一しました。

## ディレクトリ構成

```
docs/
  .vitepress/
    config.mts       # サイト設定(ナビ、SEO等)
    theme/            # カスタムCSS
  index.md            # トップページ
  about/               # ニコプロって？
  class/               # 教室案内
  contact/             # お問い合わせ
  ict-support/         # 女性応援ICTサポート(ナビ非表示のまま維持)
  programming/         # プログラミング教室関連ページ
  public/img, public/pdf  # 画像・PDF素材
```
