import gql from "graphql-tag"

export const GET_TODOS_QUERY = gql`
  query GetTodos {
    todos {
      id
      content
      completed
    }
  }
`
