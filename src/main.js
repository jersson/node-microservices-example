'use strict'
const express =  require('express');
const Server = require('./server');

const instance = express();
const port = process.env.MICROSERVICES_HOST_PORT || 8080;

const microservicesHost = new Server(instance, port);
microservicesHost.start();
