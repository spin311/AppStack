FROM node:10

COPY package*.json ./

RUN npm install

COPY . .

RUN npm start








# FROM node:13-alpine

# RUN mkdir -p /home/app

# COPY . /home/app

# CMD ["node","/home/app/script.js"]