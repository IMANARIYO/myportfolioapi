# Use the official Node.js image based on Alpine for a small footprint
FROM node:alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json before installing dependencies (this improves caching)
COPY ./package.json ./ 
COPY ./package-lock.json ./

# Install the application dependencies
RUN npm install

# Copy the entire source code into the container (excluding files specified in .dockerignore)
COPY ./src ./src
COPY ./.env ./
COPY ./config ./config

# Expose the port the app will run on
EXPOSE 3000

# Define the default command to run your application
CMD ["npm", "start"]
