# Dockerfile

# Use an existing node alpine image as a base image.
FROM node:18-alpine

# Set the working directory.
WORKDIR /app

# Copy the package.json file.
COPY package.json yarn.lock ./

# Install application dependencies.
RUN yarn install

# Copy the environment variable manually
ARG ALLOWED_ORIGIN
ENV ALLOWED_ORIGIN=${ALLOWED_ORIGIN}

# Bundle app source
COPY . .

# Copy the SQLite database file into the container
COPY ./database/database.sqlite ./database/database.sqlite

# Build the application.
RUN yarn build

# Expose the port.
EXPOSE 3200

# Run the application.
CMD ["node", "dist/main.js"]
