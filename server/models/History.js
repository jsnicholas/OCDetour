const { Schema } = require('mongoose');

const historySchema = new Schema(
    {
        activityType: {
            type: String,
            required: true
        },
        timeSpent: {
            type: Number,
            required: true,
            default: 1
        },
        dateCompleted: {
            type: Date,
            required: true,
            default: Date.now
        }
    }
);

module.exports = historySchema;