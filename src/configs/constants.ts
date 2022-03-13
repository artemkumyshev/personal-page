type Language = 'ru' | 'en';

type LanguageMap<T> = { [language in Language]: T };

interface IDataLanguage {
  code: Language;
  title: string;
}

export const DATA_LANGUAGE: LanguageMap<IDataLanguage[]> = {
  ru: [
    { code: 'ru', title: 'Русский' },
    { code: 'en', title: 'Английский' },
  ],
  en: [
    { code: 'ru', title: 'Russian' },
    { code: 'en', title: 'English' },
  ],
};

export const DATA_LOGO = {
  ru: 'Kumyshev',
  en: 'Kumyshev',
};

export const DATA_OPTIONS = {
  ru: ['Все', 'О себе', 'Проекты', 'Медиа'],
  en: ['All', 'About', 'Projects', 'Media'],
};

type GridCardMap<T> = { [key: string]: T };

interface IDataGridCardMap {
  row: number;
  column: number;
  size: '1x1' | '2x1' | '1x2';
}

export const DATA_GRID_CARDS: GridCardMap<IDataGridCardMap> = {
  bio: { row: 1, column: 1, size: '2x1' },
  switchTheme: { row: 1, column: 3, size: '1x1' },
  instagram: { row: 1, column: 4, size: '1x1' },
};
