# 11ty with webpack

スタティックサイトジェネレーター [11ty](https://www.11ty.dev/) と webpack を組み合わせたテンプレートです。

## コマンド

```sh
# 必要なモジュールのインストール
yarn install
# 開発開始
yarn start
# プロダクションビルド
yarn build
```

## HTML の開発

- [11ty](https://www.11ty.dev/)を利用します。テンプレート言語は [Nunjucks](https://mozilla.github.io/nunjucks/) です。
- 画像ファイルや、フォントファイル、そのまま読み込みたい JS ライブラリなどは `src/assets/static` 以下に配置してください。
- レイアウトファイルは `src/_includes/layouts` 以下に、共通化して利用したいコンポーネントは `src/_includes/components` 以下に配置してください。
- ビルドを実行すると `_site` 以下に出力されます。

## JavaScript の開発

- webpack を使って Babel でトランスパイルしています。
- IE11 は非対応です。対応したい場合は webpack および Babel の設定をカスタマイズしてください。
- ソースファイルは `src/assets/webpack` 以下に配置してください。
- eslint を導入しています。

## SCSS の開発

- webpack を使って SCSS をコンパイルしています。
- IE11 は非対応です。対応したい場合は webpack の設定をカスタマイズしてください。
- ソースファイルは `src/assets/webpack/styles` 以下に配置してください。
- stylelint を導入しています。

## pre-commit

- コミットを実行すると、prettier と各種 lint が実行されます。エラーになるとコミットがされません。
