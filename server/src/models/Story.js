import mongoose from 'mongoose';

const storySchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },

        url: {
            type: String,
            default: '',
        },

        points: {
            type: Number,
            default: 0,
        },

        author: {
            type: String,
            default: 'unknown',
        },

        postedAt: {
            type: String,
            default: '',
        },
    },
    {
        timestamps: true,
    }
);

const Story = mongoose.model('Story', storySchema);

export default Story;