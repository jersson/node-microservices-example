# node-microservices-example
cool and easy to extend microservices example using node

## what's the project structure?
```
.
├── LICENSE
├── README.md
├── package-lock.json
├── package.json
└── src
    └── server.js
```

## how to use/test the code
You have to follow two steps
> Run the server
```
$ npm start
> node .
server at port 8080 is running...
```

> Ask for the information using the `curl` command
```
$ curl localhost:8080/books
[{"id":1,"name":"Code Complete"},{"id":2,"name":"Clean Code"}]
```
