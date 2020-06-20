# node-microservices-example
cool and easy to extend microservices example using node

## what's the project structure?
```
.
├── LICENSE
├── README.md
├── package-lock.json
├── package.json
├── src
│   ├── main.js
│   └── server.js
└── test
    └── server.test.js
```

## how to run and test the endpoint
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

## how to test the code
I'm using [Jest](https://jestjs.io/) and [Sinon](https://sinonjs.org/) for the test cases. To see the results you have to use this command:

```
$ npm run test
> jest ./test/**

PASS  test/server.test.js
  node microservices tests
    ✓ microservices host starting has to work (2 ms)
    ✓ microservices get endpoint calling has to work (1 ms)

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        1.096 s
```