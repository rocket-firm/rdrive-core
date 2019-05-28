import logo from './logo';

const LATENCY = 300;

const mockLatency = () => (
  new Promise((resolve) => {
    setTimeout(resolve, LATENCY);
  })
);

export const getLanguagesList = async () => {
  await mockLatency();
  return [
    { label: 'English', value: 'en' },
    { label: 'Русский', value: 'ru' },
    { label: 'Қазақша', value: 'kk' },
  ];
};

export const getLocalizationData = async () => {
  await mockLatency();
  return {
    en: {
      common: {
        users: 'Users',
        add: 'Add',
        settings: 'Settings',
        help: 'Help',
        select_all: 'Select all',
        remove: 'Remove',
        go_to_site: 'Go to site',
        save: 'Save',
        saving: 'Saving',
        tenge: 'tenge',
        logout: 'logout',
      },
    },
    ru: {
      common: {
        users: 'Пользователи',
        add: 'Добавить',
        settings: 'Настройки',
        help: 'Помощь',
        select_all: 'Выбрать все',
        remove: 'Удалить',
        go_to_site: 'Перейти на сайт',
        save: 'Сохранить',
        saving: 'Сохраняется',
        tenge: 'тенге',
        logout: 'logout',
      },
    },
    kk: {
      common: {
        users: 'Пайдаланушылар',
        add: 'Қосу үшін',
        settings: 'Параметрлер',
        help: 'Көмек',
        select_all: 'Барлығын таңдау',
        remove: 'Жою',
        go_to_site: 'Веб-сайтқа өтіңіз',
        save: 'Сақтау',
        saving: 'Сақталды',
        tenge: 'тенге',
        logout: 'logout',
      },
    },
  };
};

export const postMissedTranslations = async () => {
  await mockLatency();
  return '';
};

export const getSettings = async () => {
  await mockLatency();
  return {
    en: {
      common: {
        site_uri: 'https://rocketfirm.com/',
        site_logo: logo,
        site_name: 'RDrive',
      },
    },
    ru: {
      common: {
        site_uri: 'https://rocketfirm.com/',
        site_logo: logo,
        site_name: 'RDrive',
      },
    },
    kk: {
      common: {
        site_uri: 'https://rocketfirm.com/',
        site_logo: logo,
        site_name: 'RDrive',
      },
    },
  };
};
