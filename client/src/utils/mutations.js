/* 
file for GraphQL mutations

todo: 
login(email: String!, password: String!): Auth
addUser( email: String!, password: String!): Auth
updateUser( email: String, password: String): User
addQuizSet: QuizSet
addQuizResult(quizSetId: ID!, quizTaken: String!, quizAnswer: String!): QuizSet
removeQuizSet(quizSetId: ID): QuizSet
addRecording(audio: String!, title: String!): Recording
removeRecording(recordingId: ID): Recording

assigned to: 

*/
import { gql } from '@apollo/client';


export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $email: String!
    $password: String!
  ) {
    addUser(
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;