const { gql } = require('apollo-server')

/**
 * Type Definitions for our Schema using the SDL.
 */
// union FootWare = Sneakers | Boot
const typeDefs = gql`
  
  type User {
    id: ID!
    username: String!
    pets: [Pet]!
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
    user: User
  }
  
  interface Shoe {
    id: ID!
    name: String
    size: ShoeSize
  }
  
  type Sneakers implements Shoe {
    id: ID!
    name: String!
    size: ShoeSize!
    sport: String!
  }
  
  type Boot implements Shoe {
    id: ID!
    name: String
    size: ShoeSize
    hasHills: Boolean
  }
  
  input BrandInput {
    name: String
    size: ShoeSize!
  }
  
  input newPetInput {
    name: String!
    type: String!
  }
  
  type Query {
    user: User!
    pets: [Pet]!
    shoes(input: BrandInput): [Shoe]
  }
  
  type Mutation {
    newPet(input: newPetInput!): Pet
  }
`;

module.exports = typeDefs
