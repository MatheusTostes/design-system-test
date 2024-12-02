# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Build Storybook static files
RUN npm run build-storybook

# Start both services using a shell script
COPY start.sh .
RUN chmod +x start.sh

CMD ["./start.sh"] 