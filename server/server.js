import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './src/config/db.js';
import authRoutes from './src/routes/authRoutes.js';
import scraperNews from './src/scraper/scraperNews.js';
import storyRoutes from './src/routes/storyRoutes.js';

dotenv.config();

connectDB();

scraperNews();

const app = express();

app.use(
    cors({
        origin: [
            'http://localhost:5173',
            'https://newsnest-rouge.vercel.app/',
        ],
        credentials: true,
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.json({
        message: 'NewsNext API Running',
    });
});

app.use('/api/auth', authRoutes);
app.use('/api/stories', storyRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});