# Create image based off of the official Node 14 image
FROM node:14

# Create a directory where our app will be placed
RUN mkdir -p /app

# Get all the code needed to run the app
COPY ./client /app

# Change directory so that our commands run inside this new dir
WORKDIR /app

# Install dependecies
RUN yarn
