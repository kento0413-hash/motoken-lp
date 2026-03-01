# Google Sheets CRM セットアップ手順

## 1. Google Spreadsheet を作成
新しいスプレッドシートを作成し、1行目にヘッダーを入力:

| A | B | C | D | E |
|---|---|---|---|---|
| timestamp | name | email | category | message |

## 2. Apps Script を追加
スプレッドシートのメニューから「拡張機能 > Apps Script」を開き、以下を貼り付け:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    data.timestamp,
    data.name,
    data.email,
    data.category,
    data.message,
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ status: "ok" }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

## 3. デプロイ
1. 「デプロイ > 新しいデプロイ」をクリック
2. 種類: 「ウェブアプリ」を選択
3. アクセスできるユーザー: 「全員」を選択
4. 「デプロイ」をクリック
5. 表示されたURLをコピー

## 4. 環境変数に設定
`.env.local` に以下を追加:

```
GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/xxxxx/exec
```

Vercel の場合は Settings > Environment Variables に追加。
