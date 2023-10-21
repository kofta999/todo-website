import gql from "graphql-tag"

export const ADD_TODO_MUTATION = gql`
  mutation AddTodo($content: String!) {
    createTodo(content: $content) {
      id
      content
      completed
    }
  }
`

export const DELETE_TODO_MUTATION = gql`
  mutation deleteExistingTodo($id: ID!) {
    deleteTodo(id: $id)
  }
`

export const CHECK_TODO_MUTATION = gql`
  mutation ChangeTodoStatus($id: ID!, $completed: Boolean!) {
    checkTodo(id: $id, completed: $completed) {
      id
      content
      completed
    }
  }
`
