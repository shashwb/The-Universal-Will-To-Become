FROM node:12.16.1
EXPOSE 8000

WORKDIR /app

COPY . .
RUN rm package-lock.json

RUN npm install
RUN npm install -g gatsby-cli
RUN git config --global user.email "sethbalodi@gmail.com" && git config --global user.name "Seth"
CMD ["gatsby", "develop", "-H", "0.0.0.0"]