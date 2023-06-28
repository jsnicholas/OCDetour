const { Schema } = require('mongoose');

const activitySchema = new Schema(
    {
        activityType: {
            type: String,
            required: true
        },
        time: {
            type: Int16Array,
            required: true
        }
    }
);

module.exports = activitySchema;