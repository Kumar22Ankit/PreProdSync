# Dockerfile for React Frontend

# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install any needed packages
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the app for production with minification
RUN npm run build

# Install serve to serve the build
RUN npm install -g serve

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Define the command to run the app
CMD ["serve", "-s", "build"]

