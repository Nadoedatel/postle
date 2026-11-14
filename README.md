# Postle

Приложение для аналитики публикаций. Стек: Nuxt, NestJS, PostgreSQL.

## Запуск

Создайте `backend/.env` с настройками PostgreSQL: `POSTGRES_USER`, `POSTGRES_PASSWORD`, `POSTGRES_DB`, `DATABASE_URL`.

Из корня проекта запустите базу:

```bash
docker compose up -d
```

В папке `backend` установите зависимости, примените миграцию и запустите сервер:

```bash
npm install
npx prisma migrate dev
npx prisma generate
PORT=3001 npm run start:dev
```

В папке `frontend` установите зависимости и запустите Nuxt:

```bash
npm install
npm run dev
```

Nuxt: `http://localhost:3000` · NestJS: `http://localhost:3001`.
