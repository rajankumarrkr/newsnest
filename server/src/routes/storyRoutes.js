import express from 'express';

import {
    scrapeStories,
    getStories,
} from '../controllers/storyController.js';

const router = express.Router();

router.post('/scrape', scrapeStories);

router.get('/', getStories);

export default router;