import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export const resolvers = {
  RootQuery: {
    todos: async () => {
      // return new Promise((resolve) => {
      //   setTimeout(async () => {
      //     const todos = await prisma.todo.findMany()
      //     resolve(todos)
      //   }, 1500) // 1.5 seconds delay
      // })
      return await prisma.todo.findMany()
    },
  },
  RootMutation: {
    createTodo: async (_: any, args: { content: string }) => {
      return await prisma.todo.create({
        data: {
          content: args.content,
        },
      })
    },
    deleteTodo: async (_: any, args: { id: string }) => {
      try {
        await prisma.todo.delete({
          where: {
            id: parseInt(args.id),
          },
        })
        return args.id
      } catch (err) {
        console.log(err)
      }
    },
    checkTodo: async (_: any, args: { id: string; completed: boolean }) => {
      try {
        return await prisma.todo.update({
          where: { id: parseInt(args.id) },
          data: { completed: !args.completed },
        })
      } catch (err) {
        console.log(err)
      }
    },
  },
}
