FROM node:alpine AS builder
WORKDIR /ang
COPY . .
RUN npm i && npm run build


FROM nginx:alpine
WORKDIR /user/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /ang/dist .
ENTRYPOINT ["nginx","-g","deamon off;"]