FROM node:20

WORKDIR /home/app

COPY api /home/app

RUN npm i

CMD npm run start