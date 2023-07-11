const { Schema } = require('mongoose');

const activitySchema = new Schema(
    {
        activityType: {
            type: String,
            required: true
        },
        timeInSeconds: {
            type: String,
            required: true,
            default: 1
        },
        activityDescription: {
            type: String,
            required: true
        },
    }
);

module.exports = activitySchema;