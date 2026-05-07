import {
    useEffect,
    useState,
} from 'react';

import StoryCard from '../components/StoryCard';

import {
    getBookmarks,
} from '../services/storyService';

const Bookmarks = () => {
    const [stories, setStories] =
        useState([]);

    const [loading, setLoading] =
        useState(true);

    const fetchBookmarks =
        async () => {
            try {
                const data =
                    await getBookmarks();

                setStories(data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

    useEffect(() => {
        fetchBookmarks();
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
            <section className="max-w-5xl mx-auto px-4 py-16">
                <div className="mb-12">
                    <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-5">
                        🔖 Saved Stories
                    </div>

                    <h1 className="text-5xl font-black text-slate-900">
                        Your Bookmarks
                    </h1>

                    <p className="mt-4 text-lg text-slate-600">
                        Quickly access your saved Hacker News stories.
                    </p>
                </div>

                {loading ? (
                    <div className="text-center py-20 text-xl text-slate-500">
                        Loading bookmarks...
                    </div>
                ) : stories.length === 0 ? (
                    <div className="bg-white border border-slate-200 rounded-3xl p-12 text-center shadow-sm">
                        <h2 className="text-2xl font-bold text-slate-700 mb-3">
                            No bookmarks yet
                        </h2>

                        <p className="text-slate-500">
                            Save stories from the homepage to view them here.
                        </p>
                    </div>
                ) : (
                    <div className="space-y-6">
                        {stories.map(
                            (story) => (
                                <StoryCard
                                    key={story._id}
                                    story={story}
                                    refreshStories={
                                        fetchBookmarks
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

export default Bookmarks;