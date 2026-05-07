# NewsNext 🚀

A full-stack MERN application that scrapes and displays top Hacker News stories with authentication and bookmarking functionality.

---

# 🌐 Live Demo

## Frontend
https://newsnest-rouge.vercel.app

## Backend API
https://newsnest-wcx6.onrender.com

---

# 📌 Features

## 🔐 Authentication
- User Registration
- User Login
- JWT-based Authentication
- Protected Routes
- Persistent Login using LocalStorage

## 📰 Hacker News Scraper
- Scrapes Top 10 stories from Hacker News
- Runs automatically on server startup
- Manual scrape trigger via API
- Stores stories in MongoDB

## 📚 Story Features
- View all stories
- Stories sorted by points
- View story details
- Bookmark/Unbookmark stories
- Protected Bookmarks page

## 🎨 Frontend Features
- Responsive UI
- Modern clean design
- Loading skeletons
- Toast notifications
- Protected frontend routes

---

# 🛠️ Tech Stack

## Frontend
- React.js
- React Router DOM
- Tailwind CSS
- Axios
- React Hot Toast

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Cheerio
- Axios

## Deployment
- Frontend: Vercel
- Backend: Render
- Database: MongoDB Atlas

---

# 📂 Project Structure

```bash
newsnest/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── routes/
│   │   ├── services/
│   │   └── App.jsx
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── server.js
│
├── README.md
```

---

# ⚙️ Environment Variables

## Backend (.env)

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

## Frontend (.env)

```env
VITE_API_URL=http://localhost:5000/api
```

---

# 🚀 Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone https://github.com/rajankumarrkr/newsnest.git
```

---

## 2️⃣ Install Backend Dependencies

```bash
cd server
npm install
```

---

## 3️⃣ Install Frontend Dependencies

```bash
cd ../client
npm install
```

---

# ▶️ Run Project Locally

## Start Backend

```bash
cd server
npm run dev
```

## Start Frontend

```bash
cd client
npm run dev
```

---

# 🔗 API Endpoints

## Authentication

### Register User

```http
POST /api/auth/register
```

### Login User

```http
POST /api/auth/login
```

---

## Stories

### Get All Stories

```http
GET /api/stories
```

### Trigger Scraper

```http
POST /api/stories/scrape
```

### Bookmark Story

```http
POST /api/stories/:id/bookmark
```

### Get Bookmarks

```http
GET /api/stories/bookmarks
```

---

# 🧠 How Scraper Works

- Server automatically scrapes Hacker News on startup
- Uses Axios + Cheerio for scraping
- Extracts:
  - Title
  - URL
  - Points
  - Author
  - Posted Time
- Saves data into MongoDB

---

# 🔒 Authentication Flow

- JWT token generated on login/register
- Token stored in LocalStorage
- Axios interceptors attach token automatically
- Protected backend routes validate token

---

# 📸 Screenshots

## Login Page

_Add screenshot here_

---

## Register Page

_Add screenshot here_

---

## Home Page

_Add screenshot here_

---

## Bookmarks Page

_Add screenshot here_

---

# 🎥 Loom Video

_Add Loom video link here_

---

# 🚀 Deployment

## Frontend
Deployed on Vercel.

## Backend
Deployed on Render.

## Database
MongoDB Atlas used for cloud database hosting.

---

# 📈 Future Improvements

- Pagination
- Search & Filters
- Infinite Scroll
- Dark Mode
- Story Categories
- User Profile Dashboard

---

# 👨‍💻 Author

Rajan Kumar

- MERN Stack Developer
- React & Node.js Enthusiast

GitHub:
https://github.com/rajankumarrkr

---

# ⭐ Conclusion

NewsNext demonstrates:
- Full-stack MERN development
- Authentication systems
- Web scraping
- REST API design
- MongoDB integration
- Deployment workflows
- Modern frontend development

This project was built as part of a Full Stack Developer assignment.