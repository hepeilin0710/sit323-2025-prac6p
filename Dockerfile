# Use the official Node.js as the base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# copy
COPY . .

# Exposed port (based on your application port configuration)
EXPOSE 3000

# start
CMD ["node", "index.js"]

