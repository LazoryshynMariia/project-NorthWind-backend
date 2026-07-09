# NorthWind Backend

Backend API for the NorthWind travel platform.

## Tech Stack

- Node.js
- Express
- MongoDB / Mongoose
- JWT authentication
- Celebrate / Joi validation
- Cloudinary image upload
- Multer file upload
- ESLint

## Setup

Install dependencies:

```bash
npm install
```

Create `.env` from `.env.example` and fill in required values:

```env
PORT=3001
MONGO_URL=
APP_DOMAIN=http://localhost:3001
FRONTEND_DOMAIN=
JWT_SECRET=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

## Scripts

Run in development mode:

```bash
npm run dev
```

Run in production mode:

```bash
npm start
```

Run lint:

```bash
npm exec eslint .
```

## API Groups

- `/api/auth` - registration, login, logout, session refresh, theme update.
- `/api/users` - travellers, profile data, saved stories.
- `/api/categories` - story categories.
- `/api/stories` - story list, story details, popular/recommended stories, story creation.

Swagger documentation is handled separately.
