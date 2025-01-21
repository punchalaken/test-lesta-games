# Тестовое задание для компани [Леста Игры](https://lesta.ru/ru)

### 🚀 Технологии

- [React](https://react.dev/)
- [React Router](https://reactrouter.com/home)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Vite](https://vite.dev/)
- [Prettier](https://prettier.io/)
- [EsLint](https://eslint.org/)

### 📦 Установка

1. Склонировать репозиторий:
   `git clone https://github.com/punchalaken/test-lesta-games.git`

2. Перейти в директорию прокта:
   `cd test-lesta-games`

3. Установите зависимости:
   `npm install
или
yarn install`

### 🔨 Запуск проекта

1. Для разработки (локально):
   `npm run dev
или
yarn dev`

2. Для сборки проекта:
   `npm run build
или
yarn build`

3. Для запуска тестирования:
   `npm run test 
   или
   yarn test`

### 📂 Структура проекта

    src/
      ├── app/                      # Основные файлы проекта
      │   └── providers                # Провайдеры
      │   │   └── route                   # Роутинг приложения
      │   └── assets                   # Файлы проекта
      │   │   └── fonts                   # шрифты
      │   └── styles                   # Стили для проекта
      │   │   └── variables               # Константы стилей
      │   │   │   └── fonts.scss             # Подключение шрифтов
      │   │   │   └── global.scss            # Переменные стилей
      │   │   └── App.scss                # Стили основного файла
      │   │   └── normalize.scss          # Нормализация стилей
      │   └── App.tsx                  # Главный компонент приложения
      ├── entities/                 # Сущности приложения
      |   └── Ships/                   # Сущность кораблей
      ├── pages/                    # Страницы приложения
      │   └── MainPage/                # Главная страница
      │   └── NotFoundPage/            # Страница 404
      │   └── ShipsPage/               # Страница кораблей
      ├── shared/                   # Переиспользуемые компоненты и изолированная бизнес-логика
      │   └── api/                     # Запросы на сервер
      │   └── config/                  # Конфигурационные файлы
      │   │    └── apolloClient           # Конфигурация Apollo Client
      │   │    └── routeClient           # Конфигурация Роутинга
      │   └── ui/                      # Переиспользуемые компоненты
      │  │   └── AppLink/                 # Компонент ссылки
      │  │   └── Button/                  # Компонент кнопки
      │  │   └── Loader/                  # Компонент загрузки
      ├── widgets                   # Самостоятельные виджеты приложения
      │   └── MainContent/             # Виджет основного контента
      │   └── Navbar/                  # Виджет навигационной панели
      │   └── PageLoader/              # Виджет страницы загрузки
      │   └── Pagination/              # Виджет пагинации
      │   └── ShipList/                # Виджет списка кораблей
      ├── slice.tsx                 # Файл с редюсерами и экшенами
      ├── main.tsx                  # Точка входа

### 🧪 Тесты

- [Тестирование компонента кнопки](/src/shared/ui/Button/Button.test.tsx)
- [Тестирование компонента ссылки](/src/shared/ui/AppLink/AppLink.test.tsx)
- [Тестирование компонента лоудера](/src/shared/ui/Loader/Loader.test.tsx)
- [Тестирование слайса shipSlice](/src/widgets/ShipList/model/shipSlice.test.tsx)

### 💡 Что я мог бы улучшить, если бы было больше времени?

- Наладить взаимодействие с бекендерами и попросить отдавать мне корабли с id.
- Добавить отображение более подробоной информации о корабле при клике на него.
- Добавить 3D модель корабля в модальном окне.
- Добавить поиск по кораблям.
- Добавить заглавный экран с подробной информацией об игре.

### Запросы на сервер: 

- [Получение списка кораблей GaphQL запросом (GET)](/src/shared/api/graphql/vehicles.ts) - Данные кештируются в LocalStorage по ключу `vehicles`.