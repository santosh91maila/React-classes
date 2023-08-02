const {gql } = require('apollo-server-express');


const typeDefs = gql`
  type College {
    id:String,
    name:String,
    location:String,
    rating:Float
  }
  type Student {
    id:Int
    firstName:String
    lastName:String
    email:String
    password:String
    fullName:String
    college:College
  }
  type Mutation {
    createStudent(collegeId:ID,firstName:String,lastName:String):String
  }
  type Query {
    hello(name:String): String
    students:[Student]
  }
`;


module.exports = typeDefs