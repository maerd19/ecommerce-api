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

## Features

- CRUD operations for products
- CRUD operations for orders
- Input validation
- Error handling
- Database interactions using Sequelize

## API Documentation

API documentation is available via Swagger UI at `/api-docs` when running the server.

## Deployment

### Docker

To build and run the application using Docker:

1. Build the Docker image:

```bash
docker build -t ecommerce-api .
```

2. Run the container:

```bash
docker run -p 3000:3000 ecommerce-api
```

The API will be available at `http://localhost:3000`.

## Continuous Integration

This project uses GitHub Actions for continuous integration. The CI pipeline runs on push to the main branch and on pull requests. It includes building the project and running tests.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
