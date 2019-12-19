FROM node:11-alpine

WORKDIR /safiralab

COPY ./safira_lab /safiralab

# CMD [ "npm", "i", "-g", "yarn" ]
# CMD [ "yarn" ]
# CMD [ "yarn", "start" ]
RUN npm i -g yarn && \
    yarn && \
    yarn start
EXPOSE 3000