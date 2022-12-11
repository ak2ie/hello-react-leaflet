(Building a blog with Notions public API)[https://Building a blog with Notions public APIsamuelkraft.com/blog/building-a-notion-blog-with-public-api]をやる

# インストール

```bash
$ yarn add @notionhq/client
```

[My Integration](https://www.notion.so/my-integrations)でトークンを取得する
データベースを作成し、データベース ID を取得する

```text[.env.local]
NOTION_TOKEN=
NOTION_DATABASE_ID=
```

# データベース ID

データベースを開いたときの URL のうち**?v=**の手前の文字列

https://www.notion.so/abcdefgh1234567890?v=ijklmnopqrstu0987654321
→abcdefgh1234567890

# コネクトの追加

右上の 3 点リーダ → コネクトの追加 → インテグレーションで追加した名前

# ページ ID

ページを開いたときの URl のうち、-（ハイフン）以降の文字列
https://www.notion.so/XXX-YYY
→YYY
