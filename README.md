# FlowRev

フロービジネスをリカーリング化するSaaSプラットフォーム。

## 技術構成

| カテゴリ | 技術 |
|---|---|
| フレームワーク | Next.js 16 (App Router) |
| 言語 | TypeScript |
| スタイリング | Tailwind CSS v4 |
| UIコンポーネント | shadcn/ui |
| バックエンド | Supabase |
| デプロイ | Vercel (予定) |

## セットアップ手順

### 1. リポジトリのクローン

```bash
git clone <repository-url>
cd FlowRev
```

### 2. 依存関係のインストール

```bash
npm install
```

### 3. 環境変数の設定

`.env.example` をコピーして `.env.local` を作成し、各値を設定してください。

```bash
cp .env.example .env.local
```

| 変数名 | 説明 |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | SupabaseプロジェクトのURL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabaseの匿名キー |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabaseのサービスロールキー（サーバーサイド専用） |

#### Supabaseの設定

1. [Supabase](https://supabase.com) でプロジェクトを作成
2. Project Settings > API から URL と anon key を取得
3. `.env.local` に設定

### 4. 開発サーバーの起動

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000) でアクセスできます。

## ディレクトリ構成

```
src/
├── app/
│   ├── layout.tsx          # ルートレイアウト
│   ├── page.tsx            # トップページ
│   ├── globals.css         # グローバルスタイル
│   └── dashboard/
│       ├── layout.tsx      # ダッシュボードレイアウト（サイドバー）
│       └── page.tsx        # ダッシュボードトップ
├── components/
│   ├── ui/                 # shadcn/ui コンポーネント
│   └── layout/             # ヘッダー・フッター等
├── lib/
│   ├── utils.ts            # ユーティリティ関数
│   └── supabase/
│       ├── client.ts       # ブラウザ用 Supabase クライアント
│       ├── server.ts       # サーバー用 Supabase クライアント
│       └── proxy.ts        # セッション更新ミドルウェア
└── proxy.ts                # Next.js ミドルウェア
```

## 主なコマンド

```bash
npm run dev      # 開発サーバー起動
npm run build    # プロダクションビルド
npm run start    # プロダクションサーバー起動
npm run lint     # ESLint チェック
```

## 今後の実装予定

- [ ] Supabase Auth による認証
- [ ] DBテーブル設計・マイグレーション
- [ ] 顧客管理機能
- [ ] サブスクリプション管理
- [ ] 請求・決済（Stripe連携）
- [ ] 分析ダッシュボード
