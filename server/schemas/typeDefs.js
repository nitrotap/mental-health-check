const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        firstName: String
        lastName: String
        email: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Quiz {
        _id: ID
        username: String
        quizResults: [QuizResult]
    }

    type QuizResult {
        _id: ID
        quizTaken: String
        quizResult: String
        username: String
    }

    type Query {
        me: User
        users: [User]
        user(username: String!): User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        updateUser(username: String, email: String, password: String): User
        addQuiz(quizzes: [ID]!): Quiz
        addQuizResult(quizId: ID): QuizResult
        

        
    }

    

`


module.exports = typeDefs;

