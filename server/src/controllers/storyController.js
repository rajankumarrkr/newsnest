import Story from '../models/Story.js';

import scraperNews from '../scraper/scraperNews.js';



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

export {
    scrapeStories,
    getStories,
};