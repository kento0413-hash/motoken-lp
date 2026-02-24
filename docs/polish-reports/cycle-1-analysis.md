# Cycle 1 Analysis — マイクロインタラクション

## ターゲット領域
マイクロインタラクション（フィードバック・遷移）: 6/10

## ユーザーの目
1. **Worksカード**: hover前はリンクテキスト（"Watch on YouTube →"等）が見えない。クリックできることが分かりにくい
2. **Nav active link**: スクロールで現在セクションがハイライトされるが、遷移が瞬間的で気づきにくい
3. **Contact CTA**: 「お問い合わせ・ご相談」ボタンが外部サイト（lit.link）に飛ぶことが分からない
4. **ScrollToTop**: active状態のフィードバックが弱い（transformのみ）

## デザイナーの目
1. Worksカードのリンクテキスト非表示→hover表示は洗練されているが、タブレット（1024px以下）でhoverが機能しないケースがある
2. Pillarカードのhoverアニメーション（top accent bar scaleX）は良いが、他セクションのカードにはない
3. Conceptカードのtopグラデーションバーがstaticで、hoverインタラクションがない
4. ボタンのactive状態が全てtranslateY(0)戻りだけで、もう一段の反応が欲しい

## エンジニアの目
1. `window.pageYOffset`が3箇所で使われておりdeprecated → `window.scrollY`に統一すべき
2. Nav scroll handlerとScrollToTopのscroll handlerが別々に登録されている（統合は不要だがパフォーマンス面は問題なし）

## 実装計画（最大5件）
1. **Worksカードのリンクテキストをタブレット含む全画面で常時表示に変更** — タッチデバイスでもリンクが見える
2. **Nav active linkにスムーズtransition追加** — セクション遷移がなめらかに伝わる
3. **Contact CTAボタンに外部リンクアイコン追加** — 外部遷移であることが一目で分かる
4. **ScrollToTopボタンのactive状態強化** — 押した感覚のフィードバック
5. **`window.pageYOffset` → `window.scrollY`統一** — deprecated API除去
