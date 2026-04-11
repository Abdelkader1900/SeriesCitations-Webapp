# NoteBoard

Application de prise de notes full-stack construite avec la stack MERN.

## Stack

| Couche   | Tech                                      |
|----------|-------------------------------------------|
| Frontend | React 19, Vite, Tailwind CSS, DaisyUI     |
| Backend  | Node.js, Express, Mongoose                |
| Base de données | MongoDB                          |
| Déploiement | Docker Compose                        |

## Fonctionnalités

- Créer, consulter et supprimer des notes
- Page de détail d'une note
- Notifications toast
- Interface responsive

## Lancer avec Docker

```bash
docker-compose up --build
```

- Frontend : http://localhost:5173  
- API backend : http://localhost:5001

## Lancer en local

```bash
# Backend
cd backend
cp .env.example .env   # définir MONGO_URI
npm install
npm run dev

# Frontend
cd frontend
npm install
npm run dev
```