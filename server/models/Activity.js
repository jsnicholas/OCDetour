const { Schema } = require('mongoose');

const activitySchema = new Schema(
    {
        activityType: {
            type: String,
            required: true
        },
        time: {
            type: Number,
            required: true
        }
    }
);

module.exports = activitySchema;