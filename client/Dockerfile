# Stage 1: Build the Vite React application
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Copy package files and install dependencies securely using ci
COPY package.json package-lock.json ./
RUN npm ci

# Copy the rest of the application code
COPY . .

# Pass build arguments for environment variables needed by Vite during build
# e.g., ARG VITE_API_URL
# ENV VITE_API_URL=$VITE_API_URL

# Build the application
RUN npm run build

# Stage 2: Serve the application using Nginx
FROM nginx:alpine

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built assets from Stage 1
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
