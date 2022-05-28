/* 
file for GraphQL queries

todo:
user
quizSet
recording


assigned to: 
*/

import { gql } from '@apollo/client';


// todo query audio recordings tied to user

export const QUERY_USER = gql`
    query user {
        user {
            quizzes {
            _id
            dateTaken
            }
        }
    }
`
export const QUERY_QUIZSET = gql`
    query quizSet($quizSetId: String) {
        quizSet(quizSetId: $quizSetId) {
            quizResults {
            quizTaken
            quizAnswer
            }
        }
    }
`