<p align="center">
    <a href="https://astro.build"><img src="https://img.shields.io/badge/astro-%5E2.10.15-B845ED" /></a>
    <img src="https://img.shields.io/badge/node-%5E16.14.0-blue" />
    <img src="https://img.shields.io/badge/express-%5E4.18.2-green" />
    <img src="https://img.shields.io/badge/PostCSS-powered-DD3735" />
    <img src="https://img.shields.io/badge/typescript-%5E5.3.3-blue" />
    <a href="https://github.com/awesomesk1ll/middle.messenger.praktikum.yandex/actions/workflows/tests.yml">
        <img src="https://github.com/awesomesk1ll/middle.messenger.praktikum.yandex/actions/workflows/tests.yml/badge.svg?branch=sprint_1" />
    </a>
</p>

## Макет проекта в Figma

https://www.figma.com/file/BRvBsUtiTgFinefVXv49x1/Chat

## Пощупать в Netlify:

https://awesomesk1ll-messenger-s1.netlify.app/ (1 спринт)

### Описание

Проект с практической работой выполняемой в рамках курса "Мидл фронтенд-разработчик" Яндекса. 

#### На текущем этапе разработки (спринт №1) реализовано:

* Настроена сборка статики с использованием в качестве шаблонизатора [Astro](https://astro.build)
* Настроен процессинг для стилей PostCSS
* Свёрстаны прототипы экранов: 
- Авторизация ([тык](https://awesomesk1ll-messenger-s1.netlify.app/auth))
- Регистрация ([тык](https://awesomesk1ll-messenger-s1.netlify.app/reg))
- Ошибки 404 и 500 ([тык](https://awesomesk1ll-messenger-s1.netlify.app/404) и [тык](https://awesomesk1ll-messenger-s1.netlify.app/500))
- Чаты ([тык](https://awesomesk1ll-messenger-s1.netlify.app/chat/))
- Профиль ([тык](https://awesomesk1ll-messenger-s1.netlify.app/profile))
* Для проверки даты/вреемени сборки и коммита сделал страничку ([тык](https://awesomesk1ll-messenger-s1.netlify.app/version))
* Прикручен деплой из ветки на Netlify
* Прикручена сборка статики и раздача через Express

### Установка проекта

Установка зависимостей:

```bash
npm i
```

### Запуск проекта

Для разработки на локалхосте (с hot-reload), на порту 3000.

```bash
npm run dev
```

Для сборки статики и запуска на порту 3000 (через Express).

```bash
npm start
```

### Дополнительные команды 

Сборка проекта в статику (если хотим хостить статику):

```bash
npm run build
```
