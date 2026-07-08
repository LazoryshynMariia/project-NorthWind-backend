# Dev6 — Saved Stories API (Збережені історії)

## Базова URL

```
http://localhost:3000/api
```

## Аутентифікація

Всі ендпоінти захищені middleware `authenticate`. Потрібен JWT токен у заголовку:

```
Authorization: Bearer <токен>
```

### Як отримати токен

1. Зареєструвати користувача:

```http
POST /api/auth/register
Content-Type: application/json

{
  "email": "your-email@test.com",
  "password": "Test123!",
  "name": "Your Name"
}
```

Відповідь (201):

```json
{
  "id": "6a4e3fcfb236e639cc9563ae",
  "name": "Your Name",
  "email": "your-email@test.com"
}
```

2. Згенерувати токен (з кореня проєкту):

```bash
node -e "require('dotenv').config(); const jwt = require('jsonwebtoken'); console.log(jwt.sign({id:'ВАШ_USER_ID'}, process.env.JWT_SECRET, {expiresIn:'1d'}))"
```

---

## Ендпоінти

### 1. Додати історію до збережених

```http
POST /api/users/saved-stories
Authorization: Bearer <токен>
Content-Type: application/json

{
  "storyId": "68498236a100312bea045fe6"
}
```

**Валідація:**
| Поле | Тип | Обов'язкове | Опис |
|------|-----|-------------|------|
| `storyId` | string (24 hex) | ✅ | MongoDB ObjectId статті |

**Відповіді:**

**201 Created** — успішно додано:

```json
{
  "userId": "6a4e3fcfb236e639cc9563ae",
  "storyId": "68498236a100312bea045fe6",
  "_id": "6a4e4033e503d3021d2d465e",
  "createdAt": "2026-07-08T12:18:59.053Z",
  "updatedAt": "2026-07-08T12:18:59.053Z"
}
```

**409 Conflict** — вже збережено:

```json
{
  "message": "Story already saved"
}
```

**401 Unauthorized** — токен відсутній або невалідний:

```json
{
  "message": "Authorization header missing"
}
// або
{
  "message": "Invalid authorization header"
}
// або
{
  "message": "User not found"
}
```

**400 Bad Request** — невалідний storyId:

```json
{
  "message": "storyId must be a valid MongoDB ObjectId"
}
```

---

### 2. Перевірити чи збережена історія

```http
GET /api/users/saved-stories/{storyId}
Authorization: Bearer <токен>
```

**Відповіді:**

**200 OK** — збережена:

```json
{
  "isSaved": true
}
```

**200 OK** — не збережена:

```json
{
  "isSaved": false
}
```

**401 Unauthorized** — токен відсутній або невалідний.

---

### 3. Видалити зі збережених

```http
DELETE /api/users/saved-stories/{storyId}
Authorization: Bearer <токен>
```

**Відповіді:**

**200 OK** — успішно видалено:

```json
{
  "message": "Removed"
}
```

**404 Not Found** — історія не була збережена:

```json
{
  "message": "Saved story not found"
}
```

**401 Unauthorized** — токен відсутній або невалідний.

---

## Повний цикл тестування

| #   | Метод  | URL                         | Умова                     | Очікувана відповідь            |
| --- | ------ | --------------------------- | ------------------------- | ------------------------------ |
| 1   | POST   | `/users/saved-stories`      | З токеном + валідний body | 201 + об'єкт збереження        |
| 2   | GET    | `/users/saved-stories/{id}` | З токеном                 | 200 + `{ isSaved: true }`      |
| 3   | POST   | `/users/saved-stories`      | Дублікат (той же body)    | 409 + "already saved"          |
| 4   | DELETE | `/users/saved-stories/{id}` | З токеном                 | 200 + `{ message: "Removed" }` |
| 5   | GET    | `/users/saved-stories/{id}` | Після видалення           | 200 + `{ isSaved: false }`     |
| 6   | POST   | `/users/saved-stories`      | Без токена                | 401                            |
| 7   | DELETE | `/users/saved-stories/{id}` | Без токена                | 401                            |
