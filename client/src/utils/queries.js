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
    {
        user {
            _id
            quizzes
        }
    }
`
