# --- Stage 1: Build the React Application ---
FROM node:22-alpine AS builder

WORKDIR /app

# Copy package files first to leverage Docker layer caching
COPY package*.json ./

# Install all dependencies (including devDependencies needed for build)
RUN npm ci

# Copy the rest of the application source code
COPY . .

# Build the production assets (typically outputs to /app/build or /app/dist)
RUN npm run build

# --- Stage 2: Serve Production Assets via Nginx ---
FROM nginx:1.27-alpine

# Copy the built assets from the previous stage to Nginx web root
# Note: Change "dist" to "build" if your build tool outputs to a folder named build
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom Nginx configuration to handle React single-page routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

