import api from './api';

export const getStories = async () => {
    const response = await api.get('/stories');

    return response.data;
};

export const toggleBookmark = async (
    storyId
) => {
    const response = await api.post(
        `/stories/${storyId}/bookmark`
    );

    return response.data;
};

export const getBookmarks =
    async () => {
        const response =
            await api.get(
                '/stories/bookmarks'
            );

        return response.data;
    };