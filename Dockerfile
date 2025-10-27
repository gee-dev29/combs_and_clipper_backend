FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY tsconfig*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Expose the port from config.env (3000)
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start:dev"]
