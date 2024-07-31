# E-commerce API

This project is a RESTful API for a simple e-commerce platform built with Node.js, Express and PostgreSQL.

## Prerequisites

- Node.js (v14 or later)
- PostgreSQL

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/yourusername/ecommerce-api.git
cd ecommerce-api
```

2. Install dependencies:

```bash
npm install
```

3. Set up your PostgreSQL database and update the connection string in `src/config/database.ts`.

4. Run the development server:

```bash
npm run dev
```

5. The server will start on `http://localhost:3000`.

## Scripts

- `npm run dev`: Start the development server with hot-reloading
- `npm run build`: Compile TypeScript to JavaScript
- `npm start`: Run the compiled JavaScript in production

## Technologies Used

- Node.js
- Express.js
- TypeScript
- Sequelize (ORM)
- PostgreSQL
- Joi (for validation)

## Features (To be implemented)

- CRUD operations for products
- CRUD operations for orders
- Input validation
- Error handling
- Database interactions using Sequelize

## License

This project is licensed under the MIT License
