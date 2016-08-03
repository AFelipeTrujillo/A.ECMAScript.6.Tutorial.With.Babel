# A ES2015 Tutorial With Babel & Gulp #

##What is Babel?##

Basically, Babel is a ECMAScript 6 to ECMACScript 5 compiler. This tools allows to use
ES6 features in our projects. The process is simple, firstly, you shoul learn about new
standar, such as let and const vars, arrow functions, classes, template string, default
values and modules. Secondly, prepeare a task with **gulp** and **gulp-babel** 
(see more later) and finally use **browserSync**

> This repositories is a fork from https://github.com/AFelipeTrujillo/A.GulpJS.Tutorial

##Waht is GulpJS?##

More: https://github.com/AFelipeTrujillo/A.GulpJS.Tutorial

Post: http://wp.me/p4bZsK-gm

##Installation##

```
git clone https://github.com/AFelipeTrujillo/A.ECMAScript.6.Tutorial.With.Babel.git
cd A.ECMAScript.6.Tutorial.With.Babel
npm install
gulp
```

**Find out more**: http://wp.me/p4bZsK-io

##Dockerfile Definition##

```unix
FROM node:argon
RUN mkdir -p /usr/app
COPY package.json /usr/app
COPY gulpfile.js /usr/app
WORKDIR /usr/app
RUN npm install gulp -g
RUN npm install
EXPOSE 8080
CMD ["gulp"]
```

Inspired By: Some Beers & Myhem https://open.spotify.com/album/4O9K2VUsGve0wJl49AG0Mu
