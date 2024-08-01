# E-commerce API

This project is a RESTful API for a simple e-commerce platform built with Node.js, Express, and PostgreSQL.

## Prerequisites

- Node.js (v14 or later)
- Docker and Docker Compose (for containerized development and deployment)
- PostgreSQL (for local development without Docker)

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/yourusername/ecommerce-api.git
cd ecommerce-api
```

2. Set up environment variables: Create a `.env` file in the project root and add the following:

```bash
DB_NAME=ecommerce_db
DB_USER=user
DB_PASSWORD=password
DB_HOST=localhost
DB_PORT=5432
```

## Development

### With Docker

1. Start the application:

```bash
npm run dev:docker
```

This will build and start both the API and PostgreSQL database in Docker containers.

### Without Docker

1. Ensure you have a local PostgreSQL instance running with the credentials specified in your `.env` file.

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

The server will start on `http://localhost:3000`.

## Scripts

- `npm run dev`: Start the development server with hot-reloading (local PostgreSQL)
- `npm run dev`:docker: Start the development environment using Docker
- `npm run build`: Compile TypeScript to JavaScript
- `npm start`: Run the compiled JavaScript in production
- `npm test`: Run tests
- `npm run` test:watch: Run tests in watch mode

## Technologies Used

- Node.js
- Express.js
- TypeScript
- Sequelize (ORM)
- PostgreSQL
- Joi (for validation)
- Swagger (for API documentation)
- Docker

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

The application and database are containerized using Docker. To build and run:

```bash
docker-compose up --build
```

The API will be available at `http://localhost:3000`.

## Continuous Integration

This project uses GitHub Actions for continuous integration. The CI pipeline runs on push to the main branch and on pull requests. It includes building the project and running tests.

## License

This project is licensed under the MIT License.
