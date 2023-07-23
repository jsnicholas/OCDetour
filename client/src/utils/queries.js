import { gql } from '@apollo/client';

export const USER = gql`
    query user($email: String) {
    user(email: $email) {
        email
        savedActivities {
        _id
            activityDescription
            activityType
            timeInSeconds
        }
    }
    }
`;

export const ACTIVITIES = gql`
    query activities($email: String) {
    activities(email: $email) {
    _id
        activityType
        timeInSeconds
        activityDescription
    }
    }   
`;

export const HISTORY = gql`
    query history($email: String) {
    history(email: $email) {
    _id
        activityType
        dateCompleted
        timeSpent
        activityDescription
    }
    }
`

export const ME = gql`
query me {
me {
_id
savedActivities{
_id
activityType
timeInSeconds
activityDescription
}
}
}

`