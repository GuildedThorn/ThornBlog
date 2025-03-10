# Use an official Node.js runtime as a parent image
FROM node:18-slim

# Set the working directory in the container
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

# Copy the rest of the VitePress project files into the container
COPY . .

# Build the VitePress site
RUN npm run docs:build

# Expose port 5000 for the VitePress preview server
EXPOSE 5000

# Run the preview command to serve the site
CMD ["npm", "run", "docs:preview"]
