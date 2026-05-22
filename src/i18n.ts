/** 対応言語 */
export const languages = ['jp', 'en'] as const;
export type Lang = (typeof languages)[number];

/** 言語に依存しないプロフィール情報 */
export const profile = {
  name: 'Youta Noboru / 昇 洋太',
  /** 外部リンク: ここに追記すれば自動で増やせます */
  links: [
    { url: 'https://github.com/dekkaiinu', label: 'github.com/dekkaiinu' },
  ],
};

/** 言語別テキスト */
export const t = {
  jp: {
    htmlLang: 'ja',
    affiliation:
      '東京電機大学大学院 先端科学技術研究科 情報通信メディア専攻 知覚情報処理研究室 博士1年',
    intro: '画像とAIの研究をしてます．',
    nav: { home: 'Home', publication: 'Publication' },
    pub: {
      all: 'すべて',
      size: '表示サイズ',
      empty: 'カードにカーソルを合わせると詳細を表示します。',
      tags: 'タグ',
      date: '日付',
      link: 'リンク',
    },
  },
  en: {
    htmlLang: 'en',
    affiliation:
      'D1, Perceptual Information Processing Laboratory, Information and Communication Media, Graduate School of Advanced Science and Technology, Tokyo Denki University',
    intro: 'I research images and AI.',
    nav: { home: 'Home', publication: 'Publication' },
    pub: {
      all: 'All',
      size: 'Size',
      empty: 'Hover over a card to see its details.',
      tags: 'Tags',
      date: 'Date',
      link: 'Link',
    },
  },
} as const;
