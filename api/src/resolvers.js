/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your scheama
 */

module.exports = {
  Query: {
    // params resolvers takes are initial value, param args, context
    // and advance type which is called (info) AST of the incoming request
    user: (_, __, {models}) => models.User.findOne(),
    pets: (_, __, {models}) => models.Pet.findMany(Boolean),
    shoes: (_, {input}) => ([
      {id: "1", name: "Nike", size: "HH"},
      {id: "1", name: "Adidas", size: 34}
    ].filter(shoe => shoe.name === input.name))
  },
  Mutation: {
    newPet: (_, {input}, {models}) => models.Pet.create(input)
  },
  Pet: {
    img(pet) {
      return pet.type === 'DOG'
        ? 'https://placedog.net/300/300'
        : 'http://placekitten.com/300/300'
    }
  },
  // User: {
  //
  // }
}
