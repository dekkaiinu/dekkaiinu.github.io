import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * 業績(Publication)コレクション
 *
 * 【追加方法】
 *   src/content/publications/<任意のフォルダ名>/ を作り、その中に
 *     - index.md      … 下記フォーマットのメタ情報
 *     - 画像ファイル   … index.md から相対パスで指定（1件につき必ず1枚）
 *   を置くだけで、Publicationページの一覧へ自動的に反映されます。
 *
 * 【index.md のフォーマット】
 *   ---
 *   tag: [conference, wacv26]   # 形式や学会名・略称（複数可）
 *   date: 2026/03/10            # 日付
 *   title: 論文タイトル          # タイトル
 *   image: ./cover.png          # 画像（index.md からの相対パス）
 *   link: https://...           # プロジェクトページ等のURL
 *   ---
 *   （ここから下の本文が「その他」: アブストラクト等。表示は任意）
 */
const publications = defineCollection({
  loader: glob({
    pattern: '**/index.md',
    base: './src/content/publications',
    generateId: ({ entry }) => entry.replace(/\/index\.md$/, ''),
  }),
  schema: ({ image }) =>
    z.object({
      tag: z.array(z.string()),
      date: z.coerce.date(),
      title: z.string(),
      image: image(),
      // link: 任意。無い業績は省略可。
      link: z.string().url().optional(),
      // venue: 学会・学会誌の正式名称。任意。
      venue: z.string().optional(),
    }),
});

export const collections = { publications };
