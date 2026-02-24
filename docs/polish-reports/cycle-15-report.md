# Cycle 15 Report — レスポンス速度（2巡目）

## 実施内容

### 1. Concept改行レスポンシブ最適化
- `conceptDescription br { display: none }` を768px→1024pxブレークポイントに移動
- タブレット幅でのテキスト改行位置を最適化

### 2. will-change除去（Hero + Pillars）
- Hero `.heroShape` から `will-change: transform` を除去
- Pillars `.pillarCard` から `will-change: transform` を除去
- hover時のみtransformが発生するため、常時GPU レイヤー確保は不要

### 3. Nav scrollハンドラのDOM キャッシュ
- `document.querySelectorAll("section[id]")` をuseEffect内で1回だけ実行
- 毎フレームのDOM クエリを回避し、scroll パフォーマンスを改善

### 4. next/image フォーマット最適化
- `images.formats: ["image/avif", "image/webp"]` をnext.config.tsに追加
- ブラウザサポートに応じてavif（最小サイズ）→webp→pngの順で自動配信

### 5. Playfair Display フォント軽量化
- `style: ["normal", "italic"]` → `style: ["italic"]` に変更
- プロジェクト内でnormal weightは未使用（`em`タグで常にitalic使用）

### 6. body::after warmth transition除去
- `transition: opacity 0.3s ease-out` を除去
- `useScrollWarmth` hookがRAF経由で直接CSS変数を更新するため、CSSの追加transitionは不要（むしろ遅延の原因）

## スコア変動
- レスポンス速度: 8/10 → 9/10
- **合計: 89/100 → 90/100**
