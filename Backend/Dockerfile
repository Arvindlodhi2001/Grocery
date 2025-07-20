# Backend/Dockerfile

FROM node:18

WORKDIR /app

COPY package*.json ./

# ⬅️ Install nodemon (dev dependency)
RUN npm install --include=dev

COPY . .

EXPOSE 5000

CMD ["npm", "run", "dev"]
