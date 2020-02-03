FROM node:12.13.1

# Working directory
WORKDIR /srv/marcusfran.co

# Install dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

EXPOSE 80
CMD ["npm", "start"]
