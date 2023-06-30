const { Schema } = require('mongoose');
// const { Time } = require('graphql-scalars')


const activitySchema = new Schema(
    {
        activityType: {
            type: String,
            required: true
        },
        time: {
            type: Date,
            required: true,
            default: 1
        }
    }
);

module.exports = activitySchema;