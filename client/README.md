# Webprogramozás 4 Beadandó
#### Krigovszki Bálint KDPEQ8
---
## Use-Cases:
---
### Felhasználó:
- Új felhasználói fiók regisztrálása
- Bejelentkezés a létrehozott fiókba
- Kijelentkezés a fiókból
- Felhasználói adatok módosítása
  - felhasználónév
  - e-mail cím
  - jelszó
  - profilkép
- Bejegyzések megtekintése
  - Bejegyzések szűrése kategória alapján
  - Bejegyzések szűrése szerző alapján
- Új bejegyzés létrehozása
  - borítókép
  - cím
  - kategória
  - leírás
- Bejegyzések módosítása (csak saját bejegyzés)
- Bejegyzések törlése (csak saját bejegyzés)

## Adatbázis
---

### Users
| Mező | Típus |
| ------- | ------- |
| _id | ObjectId |
| username | String |
| email | String |
| password | String |
| profilePic | String |
| createdAt | Date |
| updatedAt | Date |
---
### Posts
| Mező | Típus |
| ------- | ------- |
| _id | ObjectId |
| title | String |
| desc | String |
| photo | String |
| username | String |
| categories | Array |
| createdAt | Date |
| updatedAt | Date |
---
### Categories
| Mező | Típus |
| ------- | ------- |
| _id | ObjectId |
| name | String |
| createdAt | Date |
| updatedAt | Date |
---
## Felhasznált technológiák:
- React.js
- Node.js
- MongoDB
- Axios
- Context API
- Swagger