#FROM node:alpine AS builder
#WORKDIR /ang
#COPY . .
#RUN npm i && npm run build


#FROM nginx:alpine
#WORKDIR /user/share/nginx/html
#RUN rm -rf ./*
#COPY --from=builder /ang/dist .
#ENTRYPOINT ["nginx","-g","deamon off;"]


# Stage 1: Compile and Build angular codebase 
# Use official node image as the base image
FROM node:latest as build 
# Set the working directory
WORKDIR /usr/local/app 
# Add the source code to app
COPY ./ /usr/local/app/ 
# Install all the dependencies
RUN npm install 
# Generate the build of the application
RUN npm run build  
# Stage 2: Serve app with nginx server 
# Use official nginx image as the base image
FROM nginx:alpine 
# Copy the build output to replace the default nginx contents.
COPY --from=build /usr/local/app/dist/sample-angular-app /usr/share/nginx/html 
# Expose port 80
EXPOSE 80
