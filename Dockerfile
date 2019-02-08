
# Pull base image from stock node image.
FROM node:10.9-alpine

ENV PORT=8080

# Set the current working directory to the new mapped folder.
WORKDIR /usr/src/app

# Add the current working folder as a mapped folder at /usr/src/app
COPY . .

# Install the express generator which gives you also scaffolding tools.
RUN yarn install \
  && yarn build

# Expose the node.js port to the Docker host.
EXPOSE $PORT

# This is the stock express binary to start the app.
CMD [ "yarn", "start" ]