# Specify a base image
# Get alpine version
FROM node:alpine

# Specify working directory inside the container
WORKDIR /usr/app

# Install some dependencies
# Copy all file from current working directory into
# current directory inside the container (/usr/app)
COPY ./package.json ./
RUN npm install

COPY ./ ./

# Default command
CMD ["npm", "start"]
