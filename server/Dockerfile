FROM node:18-alpine

# Create app directory
WORKDIR /app

# Copy package files and install dependencies securely
COPY package.json package-lock.json ./
RUN npm ci

# Copy the application source code
COPY . .

# Expose port
EXPOSE 5000

# Security: run as non-root user 'node'
# 'node' user is built into the node images
USER node

# Start the application
CMD ["npm", "start"]
