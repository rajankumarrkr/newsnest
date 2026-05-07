import {
    toggleBookmark,
} from '../services/storyService';

import { useAuth } from '../context/AuthContext';

const StoryCard = ({
    story,
    refreshStories,
}) => {
    const { user } = useAuth();

    const handleBookmark =
        async () => {
            if (!user) {
                alert(
                    'Please login first'
                );

                return;
            }

            try {
                await toggleBookmark(
                    story._id
                );

                refreshStories();
            } catch (error) {
                console.log(error);
            }
        };

    return (
        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex justify-between gap-4">
                <div className="flex-1">
                    <a
                        href={story.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xl font-bold text-slate-800 hover:text-blue-600 transition"
                    >
                        {story.title}
                    </a>

                    <div className="flex flex-wrap gap-3 mt-4 text-sm text-slate-500">
                        <span>
                            👤 {story.author}
                        </span>

                        <span>
                            🔥 {story.points} points
                        </span>

                        <span>
                            ⏰ {story.postedAt}
                        </span>
                    </div>
                </div>

                <button
                    onClick={handleBookmark}
                    className="h-fit bg-blue-50 hover:bg-blue-100 text-blue-600 px-4 py-2 rounded-xl transition font-medium"
                >
                    🔖 Save
                </button>
            </div>
        </div>
    );
};

export default StoryCard;