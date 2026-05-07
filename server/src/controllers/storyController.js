import Story from '../models/Story.js';

import scraperNews from '../scraper/scraperNews.js';
import User from '../models/User.js';



const scrapeStories = async (req, res) => {
    try {
        await scraperNews();

        res.json({
            message: 'Stories scraped successfully',
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};


const getStories = async (req, res) => {
    try {
        const stories = await Story.find().sort({
            points: -1,
        });

        res.json(stories);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};


const toggleBookmark = async (req, res) => {
    try {
        const storyId = req.params.id;

        const user = await User.findById(req.user._id);

        const alreadyBookmarked =
            user.bookmarks.includes(storyId);

        if (alreadyBookmarked) {
            user.bookmarks = user.bookmarks.filter(
                (id) => id.toString() !== storyId
            );
        } else {
            user.bookmarks.push(storyId);
        }

        await user.save();

        res.json({
            message: alreadyBookmarked
                ? 'Bookmark removed'
                : 'Bookmark added',
            bookmarks: user.bookmarks,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};
export {
    scrapeStories,
    getStories,
    toggleBookmark,
};