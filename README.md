# Проектная работа "Веб-ларек"

Стек: HTML, SCSS, TS, Webpack

Структура проекта:
- src/ — исходные файлы проекта
- src/components/ — папка с JS компонентами
- src/components/base/ — папка с базовым кодом

Важные файлы:
- src/pages/index.html — HTML-файл главной страницы
- src/types/index.ts — файл с типами
- src/index.ts — точка входа приложения
- src/scss/styles.scss — корневой файл стилей
- src/utils/constants.ts — файл с константами
- src/utils/utils.ts — файл с утилитами

## Установка и запуск
Для установки и запуска проекта необходимо выполнить команды

```
npm install
npm run start
```

или

```
yarn
yarn start
```
## Сборка

```
npm run build
```

или

```
yarn build
```
## Базовый код
### 1. Класс ```Api```
Класс Api предназначен для упрощения работы с HTTP-запросами к API. Он предоставляет методы для выполнения GET и POST-запросов, а также обработки ответов от сервера.
Методы ```get``` и ```post ``` выполняют GET и POST/PUT/DELETE-запросы соответственно.
```protected handleResponse(response: Response): Promise<object>``` - обрабатывает ответ от сервера.

### 2. Класс ```EventEmitter```
Класс EventEmitter реализует паттерн "Наблюдатель" и используется для управления событиями. Он позволяет подписываться на события, отписываться от них, генерировать события и создавать триггеры для автоматической генерации событий.
Методы ```on```, ```off``` устанавливают и снимают обработчик на событие. ```onAll```, ```offAll``` устанавливают обработчики на все события или сбрасывают их.
```emit<T extends object>(eventName: string, data?: T): void``` - генерирует событие с данными.
```trigger<T extends object>(eventName: string, context?: Partial<T>): (data: T) => void``` - создает триггер, который генерирует событие при вызове.


## Компоненты модели данных (бизнес-логика)
## Компоненты представления
## Типы данных
// лист ответов API
export type ApiListResponse< Type> = {\
    total: number, // количество ответов: число элементов \
    items: Type[] // массив типа Type\
};

// перечисление HTTP-методов, которые могут быть использованы для POST-запросов.
export type ApiPostMethods = 'POST' | 'PUT' | 'DELETE';

type EventName = string | RegExp; // имя события
type Subscriber = Function; // функция-обработчик события
// объект события
type EmitterEvent = { \
    eventName: string,\
    data: unknown\
};