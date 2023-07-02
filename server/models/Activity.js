const { Schema } = require('mongoose');

const activitySchema = new Schema(
    {
        activityType: {
            type: String,
            required: true
        },
        timeInSeconds: {
            type: Number,
            required: true,
            default: 1
        }
    }
);

module.exports = activitySchema;