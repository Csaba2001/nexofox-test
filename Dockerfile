FROM node:alpine
RUN ["echo","anya ird meg a programom"]
CMD ["node", "./dist/server.js"]