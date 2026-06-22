# SN Helper Privacy Policy

Last updated: June 20, 2026

## English

Summary: SN Helper does not sell personal data and does not send ServiceNow data to a developer-operated server. The extension works in the user's browser on ServiceNow pages opened by the user. It stores only extension settings in Chrome storage and communicates with the user's own ServiceNow instance only when the user requests an action.

### 1. Scope

This Privacy Policy applies to the Chrome extension **SN Helper**.

### 2. Data the Extension Handles

SN Helper may handle the following information only to provide its features:

- ServiceNow page content visible in the active tab, such as list columns, form labels, form fields, and current list filter conditions.
- CSV or JSON files that the user explicitly selects for Workspace form filling.
- Extension settings, such as selected language, enabled helper buttons, list column text, export options, and Workspace fill options.
- Generated export files downloaded from the user's own ServiceNow instance.

### 3. Data Collection by the Developer

The developer does not collect, receive, store, sell, or share the user's ServiceNow data, selected CSV/JSON file contents, form contents, list data, or extension settings.

SN Helper does not use a developer-operated analytics server, tracking service, or remote database.

### 4. How Data Is Used

The extension uses data only for user-requested functions, including:

- applying list column settings on ServiceNow list configuration screens;
- filling ServiceNow Workspace forms from CSV or JSON selected by the user;
- exporting the currently filtered ServiceNow list as CSV or Excel;
- creating a CSV file from an exported Excel file;
- assisting with catalog variable order checks;
- saving local preferences so the extension UI behaves consistently.

### 5. Storage and Retention

Settings are stored in Chrome extension storage, such as `chrome.storage.local`. This data remains on the user's browser unless the user changes settings, clears extension data, or uninstalls the extension.

Selected CSV/JSON file contents are read for the current operation. They are not uploaded to the developer and are not intentionally stored by the extension after the operation.

### 6. Data Sharing and Third Parties

SN Helper does not sell or transfer user data to third parties.

The extension communicates with the user's ServiceNow instance under `https://*.service-now.com/*` or `https://*.servicenow.com/*` only to perform actions requested by the user while the user is logged in.

The Settings screen may include optional donation links to PayPal and Stripe. These links open external websites only when the user clicks them. Payment information is handled by PayPal or Stripe under their own privacy policies and is not processed by SN Helper.

### 7. Chrome Permissions

SN Helper requests permissions needed for its features:

- `activeTab` and `tabs`: to detect whether the current tab is a ServiceNow page and understand the current screen context.
- `scripting`: to run helper scripts on ServiceNow pages selected by the user.
- `storage`: to save extension settings locally.
- `debugger`: to support reliable input into ServiceNow Workspace forms when the user runs the Workspace Fill feature.
- Host permissions for ServiceNow domains: to operate only on ServiceNow pages and to request exports from the user's own ServiceNow instance.

### 8. Security

SN Helper is designed to keep processing local to the browser and the user's ServiceNow session. The extension does not ask the user to save a ServiceNow password.

### 9. User Control

Users can clear extension settings from Chrome, remove selected files from the extension UI by closing or reloading the popup, and uninstall the extension at any time.

### 10. Changes to This Policy

This policy may be updated when the extension changes. The latest version will be published at this URL.

### 11. Contact

For privacy questions, contact: zwann521@gmail.com

## 日本語

概要: SN Helper は個人データを販売しません。また、ServiceNow のデータを開発者が運営するサーバーへ送信しません。この拡張機能は、ユーザーが開いている ServiceNow ページ上で、ユーザーのブラウザ内で動作します。Chrome の保存領域には拡張機能の設定のみを保存し、ユーザーが操作を実行した場合に限り、ユーザー自身の ServiceNow インスタンスと通信します。

### 1. 適用範囲

本プライバシーポリシーは、Chrome 拡張機能 **SN Helper** に適用されます。

### 2. 拡張機能が扱うデータ

SN Helper は、機能を提供するために必要な範囲で、次の情報を扱う場合があります。

- アクティブなタブに表示されている ServiceNow ページの内容。例: リスト列、フォームラベル、フォーム項目、現在のリスト検索条件。
- ユーザーが Workspace フォーム入力のために明示的に選択した CSV または JSON ファイル。
- 拡張機能の設定。例: 言語、補助ボタンの表示設定、リスト列の入力内容、出力オプション、Workspace 入力オプション。
- ユーザー自身の ServiceNow インスタンスからダウンロードされる出力ファイル。

### 3. 開発者によるデータ収集

開発者は、ユーザーの ServiceNow データ、選択された CSV/JSON ファイルの内容、フォーム内容、リストデータ、拡張機能の設定を収集、受信、保存、販売、共有しません。

SN Helper は、開発者が運営する分析サーバー、トラッキングサービス、リモートデータベースを使用しません。

### 4. データの利用目的

拡張機能は、ユーザーが要求した次の機能のためにのみデータを利用します。

- ServiceNow のリスト設定画面でリスト列設定を適用すること。
- ユーザーが選択した CSV または JSON から ServiceNow Workspace フォームへ入力すること。
- 現在の検索条件が適用された ServiceNow リストを CSV または Excel として出力すること。
- 出力された Excel ファイルから CSV ファイルを作成すること。
- カタログ変数の順序確認を補助すること。
- 拡張機能の UI を一貫して動作させるため、ローカル設定を保存すること。

### 5. 保存と保持

設定は `chrome.storage.local` などの Chrome 拡張機能の保存領域に保存されます。このデータは、ユーザーが設定を変更する、拡張機能データを削除する、または拡張機能をアンインストールするまで、ユーザーのブラウザ内に残ります。

選択された CSV/JSON ファイルの内容は、現在の操作のために読み取られます。開発者へアップロードされることはなく、操作後に拡張機能が意図的に保存することもありません。

### 6. データ共有と第三者サービス

SN Helper はユーザーデータを第三者へ販売または移転しません。

拡張機能は、ユーザーがログインしている状態でユーザーが要求した操作を実行するためにのみ、`https://*.service-now.com/*` または `https://*.servicenow.com/*` 配下のユーザー自身の ServiceNow インスタンスと通信します。

設定画面には、任意の寄付リンクとして PayPal および Stripe へのリンクが含まれる場合があります。これらのリンクは、ユーザーがクリックした場合にのみ外部サイトを開きます。支払い情報は PayPal または Stripe の各プライバシーポリシーに基づいて処理され、SN Helper は支払い情報を処理しません。

### 7. Chrome 権限

SN Helper は、機能に必要な権限を要求します。

- `activeTab`、`tabs`: 現在のタブが ServiceNow ページかどうかを判定し、現在の画面の状況を把握するため。
- `scripting`: ユーザーが選択した ServiceNow ページ上で補助スクリプトを実行するため。
- `storage`: 拡張機能の設定をローカルに保存するため。
- `debugger`: ユーザーが Workspace 入力機能を実行する際、ServiceNow Workspace フォームへ安定して入力するため。
- ServiceNow ドメインへのホスト権限: ServiceNow ページ上でのみ動作し、ユーザー自身の ServiceNow インスタンスから出力を取得するため。

### 8. セキュリティ

SN Helper は、処理をユーザーのブラウザおよびユーザー自身の ServiceNow セッション内にとどめるよう設計されています。拡張機能は ServiceNow のパスワード保存を求めません。

### 9. ユーザーによる管理

ユーザーは、Chrome から拡張機能の設定を削除できます。また、ポップアップを閉じる、再読み込みする、または拡張機能をアンインストールすることもできます。

### 10. 本ポリシーの変更

拡張機能の変更に合わせて、本ポリシーを更新する場合があります。最新版はこの URL で公開されます。

### 11. 連絡先

プライバシーに関するお問い合わせ: zwann521@gmail.com
