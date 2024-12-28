# Use Node.js v14
FROM node:23.3.0

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

# Expose the port
EXPOSE 5000

CMD [ "node", "app.js" ]












# # Use the official Node.js image
# FROM node:20

# # Set the working directory
# WORKDIR /usr/src/app

# # Copy package.json and package-lock.json
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy the rest of the application code
# COPY . .

# # Expose the port the app runs on
# EXPOSE 5000

# # Command to run the application
# CMD ["npm", "run", "dev"]


