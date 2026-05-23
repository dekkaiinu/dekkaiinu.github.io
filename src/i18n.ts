/** 対応言語 */
export const languages = ['jp', 'en'] as const;
export type Lang = (typeof languages)[number];

/** 言語に依存しないプロフィール情報 */
export const profile = {
  /** 名前: ヘッダーで英字・日本語を分けて表示 */
  name: { en: 'Youta Noboru', ja: '昇 洋太' },
  /** ページタイトル等で使う氏名 */
  fullName: 'Youta Noboru  /  昇 洋太',
  /** 連絡先メールアドレス */
  email: '26udc07@ms.dendai.ac.jp',
  /** リンク: ここに追記すれば自動で増やせます */
  links: [
    { url: 'https://github.com/dekkaiinu', label: '/github.com/dekkaiinu' },
    { url: 'https://033lab.org/', label: '/033lab.org' },
  ],
};

/**
 * Publication のタグ絞り込み（ドロップダウンの選択肢）
 * ここに項目を追記すれば絞り込みを増やせます。value は業績の tag と一致させます。
 */
export const tagFilters: { value: string; label: string }[] = [
  { value: 'journal', label: 'Journal' },
  { value: 'conference', label: 'Conference' },
  { value: 'international', label: 'International' },
  { value: 'domestic', label: 'Domestic' },
  { value: 'award', label: 'Award' },
  { value: 'dataset', label: 'Dataset' },
];

/** Publication ページのUIラベル（言語に関わらず英語表記） */
export const pubUI = {
  all: 'All',
  tags: 'Tags',
  venue: 'Venue',
  date: 'Date',
  link: 'Link',
};

/** 経歴の1項目 */
export type CareerEntry = { period: string; org: string };

type LangText = {
  htmlLang: string;
  intro: string;
  sections: { contact: string; links: string; career: string };
  /** 経歴: 年月降順で記載 */
  career: CareerEntry[];
  nav: { home: string; publication: string };
};

/** 言語別テキスト */
export const t: Record<Lang, LangText> = {
  jp: {
    htmlLang: 'ja',
    intro: '画像とAIの研究をしてます．',
    sections: { contact: '連絡先', links: 'リンク', career: '経歴' },
    career: [
      {
        period: '2026/06 - ',
        org: '東京電機大学 先端科学技術研究科 情報通信メディア専攻',
      },
      {
        period: '2026/04 - ',
        org: '産業技術総合研究所（AIST） 技術研修インターンシップ',
      },
      {
        period: '2025/04 - ',
        org: '株式会社セルシス 研究開発課 インターンシップ',
      },
      {
        period: '2024/04 - 2026/03',
        org: '東京電機大学 システムデザイン工学研究科 情報システム工学専攻（修士）',
      },
      {
        period: '2024/01 - 2025/12',
        org: '国立がん研究センター 生物情報学分野 特任研究補助員',
      },
    ],
    nav: { home: 'Home', publication: 'Publication' },
  },
  en: {
    htmlLang: 'en',
    intro: 'I research images and AI.',
    sections: { contact: 'Contact', links: 'Links', career: 'Career' },
    career: [
      {
        period: '2026/06 – Present',
        org: 'Information, Communication and Media Design Engineering, Graduate School of Advanced Science and Technology, Tokyo Denki University',
      },
      {
        period: '2026/04 – Present',
        org: 'Technical Training Internship, National Institute of Advanced Industrial Science and Technology (AIST)',
      },
      {
        period: '2025/04 – Present',
        org: 'Internship, Research and Development Division, CELSYS, Inc.',
      },
      {
        period: '2024/04 – 2026/03',
        org: "Master's, Information System Engineering, Graduate School of System Design and Technology, Tokyo Denki University",
      },
      {
        period: '2024/01 – 2025/12',
        org: 'Research Assistant, Division of Bioinformatics, National Cancer Center Research Institute',
      },
    ],
    nav: { home: 'Home', publication: 'Publication' },
  },
};
