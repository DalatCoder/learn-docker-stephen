# Specify a base image
FROM node:alpine

# Specify directory to store project
WORKDIR /usr/app

# Copy package.json first to get npm install correctly
COPY ./package.json ./
RUN npm install 

# Copy all other project files to WORKDIR
COPY ./ ./

# Default command to start
CMD [ "npm", "start" ]
