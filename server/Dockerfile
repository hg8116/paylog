# Use Node.js as base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the entire server code
COPY . .

# Expose backend port
EXPOSE 3000

# Start the server
CMD ["sh", "-c", "npx prisma migrate dev --name init && npx prisma db seed && npm start"]

