# Cycle 5 Analysis — エラー体験

## ターゲット領域
エラー体験（エラー時に迷子にならないか）: 7/10

## ユーザーの目
1. error.tsxはシンプルで機能する。ただしエラーの種別が伝わらない
2. loading.tsxの@keyframes spinがinline styleタグ — SSR/SSG時に問題ないがベストプラクティスではない
3. not-found.tsxはLinkコンポーネントで「トップページへ戻る」ボタンがある。良い

## デザイナーの目
1. error.tsx/not-found.tsxのレイアウトがinline styleでCSS変数参照 — 動作するがmodule cssと統一したい
2. ただしこれらのページはめったに表示されないので、inline styleの方がバンドルサイズ削減になる。そのまま維持
3. loading.tsxのスピナーサイズが32px — サイトの雰囲気に合わせてもう少し洗練させたい

## エンジニアの目
1. loading.tsxのinline `<style>` tagはReact 19/Next.js 16では問題なく動作する
2. error.tsxの`error`パラメータが使われていない — ESLint的には問題ないが、ログに出してもいい
3. SSG LPなのでerror.tsxが表示されるケースは非常にまれ

## 実装計画（最大5件）
1. **loading.tsxのスピナーをMOTOKENブランドに合わせたデザインに変更** — 待機中もブランド体験を維持
2. **error.tsxに「トップページへ戻る」リンク追加** — 「もう一度試す」だけでなく安全な逃げ道を提供
3. **not-found.tsxにHeroと同じタグライン追加** — 404ページでもブランドが伝わる
