const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Usuario {
    id: ID!
    nombre: String!
    apellido: String!
    email: String!
    password: String!
  }

  type Query {
    obtenerUsuario(id: ID!): Usuario
  }

  type Mutation {
    registrarUsuario(nombre: String!, apellido: String!, email: String!, password: String!): Usuario
  }
`);

module.exports = schema;
