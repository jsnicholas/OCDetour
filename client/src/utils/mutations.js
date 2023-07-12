import { gql } from '@apollo/client';

export const CREATE_USER = gql`
    mutation createUser($email: String!, $password: String!) {
    createUser(email: $email, password: $password) {
        token
        user {
            _id
            email
        }
    }
    }
`;

export const LOGIN = gql`
    mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        token
        user {
            _id
            email
        }
    }
    }
`;

export const SAVE_ACTIVITY = gql`
    mutation saveActivity($activityType: String!, $timeInSeconds: String!, $activityDescription: String!) {
        saveActivity(activityType: $activityType, timeInSeconds: $timeInSeconds, activityDescription: $activityDescription) {
        _id
        activityType
        timeInSeconds
        activityDescription
        }
    }
`;

export const DELETE_ACTIVITY = gql`
    mutation deleteActivity($activityType: String!, $timeInSeconds: Int!) {
    deleteActivity(activityType: $activityType, timeInSeconds: $timeInSeconds) {
        activityType
    }
    }
`;

export const UPDATE_HISTORY = gql`
    mutation updateHistory($activityType: String!, $timeSpent: Int!, $dateCompleted: Date!) {
    updateHistory(activityType: $activityType, timeSpent: $timeSpent, dateCompleted: $dateCompleted) {
        _id
        activityType
        dateCompleted
        timeSpent
    }
    }
`