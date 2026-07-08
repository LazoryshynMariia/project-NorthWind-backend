# Dev6 — Saved Stories API (Збережені історії)

## Базова URL

```
http://localhost:3000/api
```

---

## Як тестувати (копіюй і вставляй у Postman)

### Крок 1 — Реєстрація

```
POST http://localhost:3000/api/auth/register
Body → raw → JSON:
{"email":"dev6test2@mail.com","password":"Test123!","name":"Dev6"}
```

Очікувана відповідь (201):

```json
{ "id": "...", "name": "Dev6", "email": "dev6test2@mail.com" }
```

---

### Крок 2 — Логін (отримати токен)

```
POST http://localhost:3000/api/auth/login
Body → raw → JSON:
{"email":"dev6test2@mail.com","password":"Test123!"}
```

Очікувана відповідь (200):

```json
{
  "status": 200,
  "data": {
    "accessToken": "eyJhbGciOiJIUzI1NiIs...",
    "refreshToken": "eyJhbGciOiJIUzI1NiIs...",
    "user": { "id": "...", "name": "Dev6", "email": "dev6test2@mail.com" }
  }
}
```

**Скопіюй `data.accessToken` — він потрібен для всіх наступних кроків.**

---

### Крок 3 — Додати історію до збережених

```
POST http://localhost:3000/api/users/saved-stories
Headers:
  Authorization: Bearer ТВІЙ_ТОКЕН
  Content-Type: application/json
Body → raw → JSON:
{"storyId":"68498236a100312bea045fe6"}
```

Очікувана відповідь **(201 Created)**:

```json
{
  "userId": "...",
  "storyId": "68498236a100312bea045fe6",
  "_id": "...",
  "createdAt": "...",
  "updatedAt": "..."
}
```

---

### Крок 4 — Перевірити чи збережена історія

```
GET http://localhost:3000/api/users/saved-stories/68498236a100312bea045fe6
Headers:
  Authorization: Bearer ТВІЙ_ТОКЕН
```

Очікувана відповідь **(200 OK)**:

```json
{ "isSaved": true }
```

---

### Крок 5 — Дублікат (перевірка захисту)

Повтори **Крок 3** з тим самим storyId.

Очікувана відповідь **(409 Conflict)**:

```json
{ "message": "Story already saved" }
```

---

### Крок 6 — Видалити зі збережених

```
DELETE http://localhost:3000/api/users/saved-stories/68498236a100312bea045fe6
Headers:
  Authorization: Bearer ТВІЙ_ТОКЕН
```

Очікувана відповідь **(200 OK)**:

```json
{ "message": "Removed" }
```

---

### Крок 7 — Перевірити після видалення

Повтори **Крок 4**.

Очікувана відповідь **(200 OK)**:

```json
{ "isSaved": false }
```

---

### Крок 8 — Без токена (перевірка захисту)

```
POST http://localhost:3000/api/users/saved-stories
Body → raw → JSON:
{"storyId":"68498236a100312bea045fe6"}
```

Очікувана відповідь **(401 Unauthorized)**:

```json
{ "message": "Authorization header missing" }
```

---

## Усі можливі відповіді

| Код | Коли виникає                                 | Приклад                                                  |
| --- | -------------------------------------------- | -------------------------------------------------------- |
| 201 | Успішне додавання                            | `{userId, storyId, _id}`                                 |
| 200 | Успішна перевірка / видалення                | `{isSaved: true/false}` або `{message: "Removed"}`       |
| 400 | Невалідний storyId                           | `{"message":"storyId must be a valid MongoDB ObjectId"}` |
| 401 | Немає токена / токен протух / юзера видалено | `{"message":"Authorization header missing"}`             |
| 404 | Видалення неіснуючого збереження             | `{"message":"Saved story not found"}`                    |
| 409 | Дублікат                                     | `{"message":"Story already saved"}`                      |
