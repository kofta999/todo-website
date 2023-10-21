# Todo Website

This is a simple todo website built using Vuetify, Vue, Prisma, GraphQL, and SQLite.

## Features

- Create new todos with  description.
- Mark todos as completed.
- Delete todos.

## Technologies Used

- Vuetify: A Material Design component framework for Vue.js.
- Vue.js: A JavaScript framework for building user interfaces.
- Prisma: A modern database toolkit for Node.js and TypeScript.
- Apollo server: A GraphQL server for Node.js
- GraphQL: A query language for APIs.
- SQLite: A lightweight and file-based SQL database engine.

## Setup Instructions

1. Clone the repository:

   
bash
   git clone https://github.com/kofta999/todo-website.git
   
2. Install dependencies:

   
bash
   cd todo-website
   npm install
   
3. Configure the database connection in the `.env` file:

   

   DATABASE_URL="file:dev.db"
   
4. Run the database migrations:

   
bash
   npx prisma migrate dev --preview-feature
   
5. Start the development server:

   
bash
   npm run serve
   
6. Open the website in your browser:

   

   http://localhost:8080/
   

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
