## Use the official Node.js runtime as a parent image
FROM node:latest
# Set the working directory to /app
WORKDIR /app
RUN git config --global http.sslverify false
# Clone the Express.js repository
RUN git clone https://github.com/rdbharti/express.git
# Set the working directory to /app/express/examples
WORKDIR /app/express/examples/hello-world
RUN npm config set strict-ssl false
# Install the dependencies
RUN npm install
#Entry
CMD ["node", "index.js"]