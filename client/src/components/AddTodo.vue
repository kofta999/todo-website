<template>
  <v-sheet width="300" class="mx-auto">
    <v-form @submit.prevent="addTodo">
      <v-text-field
        validate-on="submit"
        v-model="formData.content"
        :rules="rules"
        label="Content"
      ></v-text-field>
      <v-btn type="submit" block class="mt-2">Add</v-btn>
    </v-form>
  </v-sheet>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue"
import { useMutation } from "@vue/apollo-composable"
import { ADD_TODO_MUTATION } from "@/graphql/mutations"
import { GET_TODOS_QUERY } from "@/graphql/queries"

const formData = reactive({
  content: "",
})
const rules = ref([
  (value: string) => (value ? true : "You must enter todo content."),
])

const { mutate: AddTodo } = useMutation(ADD_TODO_MUTATION, {
  update: (cache, { data: AddTodo }) => {
    let data = cache.readQuery({ query: GET_TODOS_QUERY }) as any
    data = {
      ...data,
      todos: [...data.todos, AddTodo],
    }
    cache.writeQuery({ query: GET_TODOS_QUERY, data })
  },
})

async function addTodo() {
  const { content } = formData
  await AddTodo({ content })
  formData.content = ""
}
</script>
