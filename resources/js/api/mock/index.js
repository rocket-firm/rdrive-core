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
        siteUri: 'https://rocketfirm.com/',
        siteLogo: logo,
        siteName: 'RDrive',
      },
    },
    ru: {
      common: {
        siteUri: 'https://rocketfirm.com/',
        siteLogo: logo,
        siteName: 'RDrive',
      },
    },
    kk: {
      common: {
        siteUri: 'https://rocketfirm.com/',
        siteLogo: logo,
        siteName: 'RDrive',
      },
    },
  };
};

export const getSchemasList = async () => {
  await mockLatency();
  return {
    settings: {
      name: 'settings.settings',
      fields: [
        {
          key: 'group',
          name: 'settings.group',
          type: 'string',
          sortable: true,
          filterable: true,
          editable: true,
          showInList: true,
          translatable: false,
        },
        {
          key: 'key',
          name: 'settings.key',
          type: 'string',
          sortable: true,
          filterable: true,
          editable: true,
          showInList: true,
          translatable: false,
        },
        {
          key: 'name',
          name: 'settings.name',
          type: 'string',
          sortable: true,
          filterable: true,
          editable: true,
          showInList: true,
          translatable: false,
        },
        {
          key: 'type',
          name: 'settings.type',
          type: 'string',
          sortable: true,
          filterable: true,
          editable: true,
          showInList: true,
          translatable: false,
        },
      ],
      display_in_admin_sidebar: false,
      translatable: false,
      sortable: false,
      creatable: true,
    },
  images: {
    name: 'images.images',
    fields: [
      {
        key: 'name',
        name: 'images.key',
        type: 'string',
        sortable: true,
        filterable: true,
        editable: true,
        showInList: true,
        translatable: false
      }
    ],
    display_in_admin_sidebar: false,
    translatable: false,
    sortable: false,
    creatable: true
  }  
  };
};

// for authorization
const getIdentificate = ({Login, password}) => {
  let login = 'spooky';
  let passwordServ = '1234'
  return (Login == login && password == passwordServ) ? true : false;
}

export const getUserFetch = async (user) => {
  
  await mockLatency();
  return {
    user: {
      isAuthenticated: getIdentificate(user),
      name: 'Spooky',
      id: 21312421,
    }
  }
}