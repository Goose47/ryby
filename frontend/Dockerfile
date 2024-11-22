FROM nginx
EXPOSE 80
RUN mkdir /app
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY ./build /app