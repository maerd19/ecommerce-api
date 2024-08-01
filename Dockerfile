# Build stage
# Start with a full Node.js image for building
FROM node:14 AS builder

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to leverage Docker cache
COPY package*.json ./

# Install all dependencies (including devDependencies)
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application (compile TypeScript to JavaScript)
RUN npm run build

# Production stage
# Use a slim version of Node.js for the final image to reduce size
FROM node:14-slim

# Set the working directory in the production container
WORKDIR /usr/src/app

# Copy only the built artifacts from the build stage
COPY --from=builder /usr/src/app/dist ./dist

# Copy package files for production dependencies
COPY package*.json ./

# Install only production dependencies
RUN npm install --only=production

# Expose the port the app will run on
EXPOSE 3000

# Command to run the application
CMD ["node", "dist/server.js"]