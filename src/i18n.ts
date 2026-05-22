/** 対応言語 */
export const languages = ['jp', 'en'] as const;
export type Lang = (typeof languages)[number];

/** 関連リンク */
const LAB_URL = 'https://033lab.org/';
const UNIV_URL = 'https://www.dendai.ac.jp/en/graduate/graduateadvanced.html';

/** 言語に依存しないプロフィール情報 */
export const profile = {
  name: 'Youta Noboru / 昇 洋太',
  /** 外部リンク: ここに追記すれば自動で増やせます */
  links: [
    { url: 'https://github.com/dekkaiinu', label: 'github.com/dekkaiinu' },
  ],
};

/**
 * Publication のタグ絞り込み（ドロップダウンの選択肢）
 * ここに項目を追記すれば絞り込みを増やせます。value は業績の tag と一致させます。
 */
export const tagFilters: { value: string; label: string }[] = [
  { value: 'journal', label: 'Journal' },
  { value: 'conference', label: 'Conference' },
];

/** Publication ページのUIラベル（言語に関わらず英語表記） */
export const pubUI = {
  all: 'All',
  size: 'Size',
  empty: 'Hover over a card to see its details.',
  tags: 'Tags',
  date: 'Date',
  link: 'Link',
};

/** 所属表記の1要素（url を持つ要素はリンクになる） */
export type AffiliationPart = { text: string; url?: string };

type LangText = {
  htmlLang: string;
  /** affiliation: parts を separator で連結して表示。url 付き要素はリンク化 */
  affiliation: { separator: string; parts: AffiliationPart[] };
  intro: string;
  nav: { home: string; publication: string };
};

/** 言語別テキスト */
export const t: Record<Lang, LangText> = {
  jp: {
    htmlLang: 'ja',
    affiliation: {
      separator: ' ',
      parts: [
        { text: '東京電機大学大学院', url: UNIV_URL },
        { text: '先端科学技術研究科' },
        { text: '情報通信メディア専攻' },
        { text: '知覚情報処理研究室', url: LAB_URL },
        { text: '博士1年' },
      ],
    },
    intro: '画像とAIの研究をしてます．',
    nav: { home: 'Home', publication: 'Publication' },
  },
  en: {
    htmlLang: 'en',
    affiliation: {
      separator: ', ',
      parts: [
        { text: 'D1' },
        {
          text: 'Visual Perception & Recognition Laboratory (033Lab)',
          url: LAB_URL,
        },
        { text: 'Information, Communication and Media Design Engineering' },
        { text: 'Graduate School of Advanced Science and Technology' },
        { text: 'Tokyo Denki University', url: UNIV_URL },
      ],
    },
    intro: 'I research images and AI.',
    nav: { home: 'Home', publication: 'Publication' },
  },
};
