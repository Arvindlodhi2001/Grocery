# Base image
FROM node:18

# Create app directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the application code
COPY . .

# Expose the port your app runs on (change if needed)
EXPOSE 5000

# Start the app using 'npm run dev'
CMD ["npm", "run", "dev"]

