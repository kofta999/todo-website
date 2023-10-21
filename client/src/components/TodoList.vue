<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">
      <div class="text-body-2 font-weight-light mb-n1">Todos</div>
      <br />
      <v-progress-circular
        v-if="loading"
        color="primary"
        indeterminate
      ></v-progress-circular>
      <v-list v-else lines="two">
        <v-list-item v-for="todo in todos" :key="todo.id" :title="todo.content">
          <v-row>
            <v-col>
              <v-checkbox
                label="Completed"
                v-model="todo.completed"
                color="indigo"
                @click="checkTodo(todo.id, todo.completed)"
              ></v-checkbox>
            </v-col>
            <v-col>
              <v-btn
                @click="deleteTodo(todo.id)"
                icon="mdi-delete-outline"
                color="red"
                size="x-small"
              ></v-btn>
            </v-col>
          </v-row>
        </v-list-item>
      </v-list>
    </v-responsive>
  </v-container>
</template>

<script setup lang="ts">
import { CHECK_TODO_MUTATION, DELETE_TODO_MUTATION } from "@/graphql/mutations"
import { GET_TODOS_QUERY } from "@/graphql/queries"
import { useQuery, useMutation } from "@vue/apollo-composable"
import { computed } from "vue"

const { result, loading } = useQuery(GET_TODOS_QUERY)
const { mutate: DeleteTodo } = useMutation(DELETE_TODO_MUTATION, {
  update: (cache, { data }) => {
    const deletedTodoId = data.deleteTodo
    cache.modify({
      fields: {
        todos(existingTodos, { readField }) {
          return existingTodos.filter((todoRef: any) => {
            console.log(deletedTodoId, readField("id", todoRef))
            return deletedTodoId !== readField("id", todoRef)
          })
        },
      },
    })
  },
})
const { mutate: CheckTodo } = useMutation(CHECK_TODO_MUTATION)

const todos = computed(() => result.value?.todos ?? [])

async function deleteTodo(id: string) {
  await DeleteTodo({ id })
}

async function checkTodo(id: string, completed: boolean) {
  await CheckTodo({ id, completed })
}
</script>
