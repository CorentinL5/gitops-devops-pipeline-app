FROM node:20-alpine

WORKDIR /usr/src/app

COPY app/package.json app/package-lock.json* ./
RUN npm ci --omit=dev || npm install --omit=dev

COPY app/ ./

ENV PORT=8080
EXPOSE 8080

CMD ["npm", "start"]
