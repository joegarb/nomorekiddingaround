FROM node:8.12-onbuild

RUN npm install
RUN npm run build

EXPOSE 8000
