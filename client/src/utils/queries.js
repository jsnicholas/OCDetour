import { gql } from '@apollo/client';

export const USER = gql`
    query user($email: String) {
    user(email: $email) {
        email
    }
    }
`;

export const ACTIVITIES = gql`
    query activities($email: String) {
    activities(email: $email) {
        activityType
        timeInSeconds
        activityDescription
    }
    }   
`;

export const HISTORY = gql`
    query history($email: String) {
    history(email: $email) {
        activityType
        dateCompleted
        timeSpent
        activityDescription
    }
    }
`