# Use the official Node.js image as a base image
FROM node:20

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Expose port 8001
EXPOSE 8001

# Start the server
CMD ["npm", "start"]
