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
    query Quizzes {
        user {
            quizzes {
            _id
            dateTaken
            quizResults {
                quizTaken
                quizAnswer
            }
            }
        }
    }
`
export const QUERY_QUIZSET = gql`
    query QuizSet($quizSetId: String) {
        quizSet(quizSetId: $quizSetId) {
            dateTaken
            quizResults {
            quizTaken
            quizAnswer
            }
        }
    }
`

export const QUERY_USER_THERAPY_NOTES = gql`
query Notes {
    user {
      therapyNotes {
        _id
        dateTaken
        doingQuestion
        feelingQuestion
        nextQuestion
        feelingRating
        helpfulRating
        notes
      }
    }
  }
`;