#FROM node:alpine AS builder
#WORKDIR /ang
#COPY . .
#RUN npm i && npm run build


#FROM nginx:alpine
#WORKDIR /user/share/nginx/html
#RUN rm -rf ./*
#COPY --from=builder /ang/dist .
#ENTRYPOINT ["nginx","-g","deamon off;"]

FROM node:14
RUN npm install
COPY . .
EXPOSE 3000 CMD ["node", "index.js" ]
