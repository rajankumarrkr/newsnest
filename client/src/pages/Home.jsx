import {
    useEffect,
    useState,
} from 'react';

import StoryCard from '../components/StoryCard';

import {
    getStories,
} from '../services/storyService';

const Home = () => {
    const [stories, setStories] =
        useState([]);

    const [loading, setLoading] =
        useState(true);

    const fetchStories =
        async () => {
            try {
                const data =
                    await getStories();

                setStories(data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

    useEffect(() => {
        fetchStories();
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-4 pt-16 pb-10">
                <div className="text-center max-w-3xl mx-auto">
                    <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                        🚀 Latest Hacker News Stories
                    </div>

                    <h1 className="text-5xl md:text-6xl font-black text-slate-900 leading-tight">
                        Stay Updated With
                        <span className="text-blue-600">
                            {' '}
                            Tech Stories
                        </span>
                    </h1>

                    <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                        Discover trending developer discussions,
                        startup news, AI breakthroughs, and
                        engineering stories curated from
                        Hacker News.
                    </p>
                </div>
            </section>

            {/* Stories */}
            <section className="max-w-5xl mx-auto px-4 pb-16">
                {loading ? (
                    <div className="text-center py-20 text-xl text-slate-500">
                        Loading stories...
                    </div>
                ) : (
                    <div className="space-y-6">
                        {stories.map(
                            (story) => (
                                <StoryCard
                                    key={story._id}
                                    story={story}
                                    refreshStories={
                                        fetchStories
                                    }
                                />
                            )
                        )}
                    </div>
                )}
            </section>
        </div>
    );
};

export default Home;