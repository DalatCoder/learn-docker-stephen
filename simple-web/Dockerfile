# Specify a base image
# Get alpine version
FROM node:alpine

# Install some dependencies
# Copy all file from current working directory into
# current directory inside the container
COPY . .
RUN npm install

# Default command
CMD ["npm", "start"]
