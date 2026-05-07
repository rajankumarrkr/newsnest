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
                    <div className="space-y-6">
                        {[1, 2, 3].map((item) => (
                            <div
                                key={item}
                                className="bg-white rounded-3xl border border-slate-200 p-6 animate-pulse"
                            >
                                <div className="h-6 bg-slate-200 rounded w-3/4 mb-4"></div>

                                <div className="flex gap-4">
                                    <div className="h-4 bg-slate-200 rounded w-24"></div>

                                    <div className="h-4 bg-slate-200 rounded w-24"></div>

                                    <div className="h-4 bg-slate-200 rounded w-24"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="space-y-6">
                        {stories.length === 0 ? (
                            <div className="bg-white border border-slate-200 rounded-3xl p-12 text-center shadow-sm">
                                <h2 className="text-2xl font-bold text-slate-700 mb-3">
                                    No stories available
                                </h2>

                                <p className="text-slate-500">
                                    Try scraping stories again.
                                </p>
                            </div>
                        ) : (
                            stories.map((story) => (
                                <StoryCard
                                    key={story._id}
                                    story={story}
                                    refreshStories={fetchStories}
                                />
                            ))
                        )}
                    </div>
                )}
            </section>
        </div>
    );
};

export default Home;