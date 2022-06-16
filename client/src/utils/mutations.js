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

export const ADD_QUIZSET = gql`
  mutation addQuizSet {
    addQuizSet {
      _id
    }
  }
`

export const ADD_QUIZRESULT = gql`
  mutation addQuizResult($quizSetId: ID!, $quizTaken: String!, $quizAnswer: String!) {
    addQuizResult(quizSetId: $quizSetId, quizTaken: $quizTaken, quizAnswer: $quizAnswer) {
      _id
      dateTaken
      quizResults {
        quizTaken
        quizAnswer
        createdAt
        _id
      }
    }
  }
`
export const REMOVE_QUIZSET = gql`
  mutation removeQuizSet($quizSetId: ID) {
    removeQuizSet(quizSetId: $quizSetId) {
      _id
    }
  }
`

export const ADD_THERAPY_NOTE = gql`
mutation addTherapyNote($doingQuestion: String!, $feelingQuestion: String!, $nextQuestion: String!, $feelingRating: Int, $helpfulRating: Int, $notes: String) {
  addTherapyNote(doingQuestion: $doingQuestion, feelingQuestion: $feelingQuestion, nextQuestion: $nextQuestion, feelingRating: $feelingRating, helpfulRating: $helpfulRating, notes: $notes) {
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
`

export const REMOVE_THERAPY_NOTE = gql`
mutation removeTherapyNote($therapyNoteId: ID) {
  removeTherapyNote(therapyNoteId: $therapyNoteId) {
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
`