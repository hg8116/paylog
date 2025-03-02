# Use Node.js as base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the frontend code
COPY . .

# Expose frontend port
EXPOSE 5173

# Start Vite server
CMD ["npm","run","dev"]
