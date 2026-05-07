import express from 'express';
import { protect } from '../middleware/authMiddleware.js';

import {
    scrapeStories,
    getStories,
    toggleBookmark,
} from '../controllers/storyController.js';

const router = express.Router();

router.post('/scrape', scrapeStories);
router.get('/', getStories);
router.post('/:id/bookmark', protect, toggleBookmark);

export default router;