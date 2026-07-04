# Stage 1: Build the SvelteKit site
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files for dependency installation
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the application source code
COPY . .

# Build-time environment variables for SvelteKit static site
ARG PUBLIC_WEBSITE_HOSTNAME=www.jng.me.uk
ENV PUBLIC_WEBSITE_HOSTNAME=$PUBLIC_WEBSITE_HOSTNAME

# Build the application (runs 'vite build' producing the 'build' directory)
RUN npm run build

# Stage 2: Serve the application using Nginx
FROM nginx:alpine

# Set the default port to 8080 (standard for GCP Cloud Run)
ENV PORT=8080

# Copy the built static files to Nginx public folder
COPY --from=builder /app/build /usr/share/nginx/html

# Copy the Nginx configuration template. The official Nginx docker image
# will automatically substitute environment variables (like ${PORT}) in files
# under /etc/nginx/templates/*.template and output the result to /etc/nginx/conf.d/
COPY nginx.conf.template /etc/nginx/templates/default.conf.template

# Expose the default port (informative)
EXPOSE 8080

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
