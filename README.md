# E-commerce API

This project is a RESTful API for a simple e-commerce platform built with Node.js, Express and PostgreSQL.

## Prerequisites

- Docker
- Docker Compose

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/yourusername/ecommerce-api.git
cd ecommerce-api
```

2. Start the application:

```bash
docker-compose up --build
```

3. The server will start on http://localhost:3000.

## Development

For development with hot-reloading:

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

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

## License

This project is licensed under the MIT License.
