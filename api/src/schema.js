const { gql } = require('apollo-server')

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
  type User {
    id: ID!
    username: String!
  }
  enum ShoeSize {
    HH
    MM
    XX
  }
  
  type Pet {
    id: ID!
    createdAt: String!
    name: String!
    type: String!
    img: String 
  }
  
  type Shoe {
    id: ID
    name: String
    size: ShoeSize
  }
  input BrandInput {
    name: String
    size: ShoeSize!
  }
  type Query {
    user: User!
    pets: [Pet]!
    shoes(input: BrandInput): [Shoe]
  }
  
  input newPetInput {
    name: String!
    type: String!
  }
  
  type Mutation {
    newPet(input: newPetInput!): Pet
  }
`;

module.exports = typeDefs
