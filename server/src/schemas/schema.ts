export const typeDefs = `#graphql
  type Todo {
    id: ID!
    content: String!
    completed: Boolean!
  }

  type RootQuery {
    todos: [Todo!]!
  }

  type RootMutation {
    createTodo(content: String!): Todo!
    deleteTodo(id: ID!): ID!
    checkTodo(id: ID!, completed: Boolean!): Todo!
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }
`
