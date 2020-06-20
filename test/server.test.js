'use strict'
const sinon = require('sinon');
const Server = require('../src/server');

describe('node microservices tests', () => {
    let instance, mock, port, microservicesHost;

    beforeAll(() => {
        instance = { 
            get: () => {}, 
            listen: () => {} 
        };
        mock = sinon.mock(instance);
        port = process.env.MICROSERVICES_HOST_PORT || 8080;
        microservicesHost = new Server(instance, port);
    });

    test('microservices host starting has to work', () => {

        microservicesHost.start();

        mock.expects('listen').once();
        mock.expects('listen').never().throwsException();
    });

    test('microservices get endpoint calling has to work', () => {
        microservicesHost.start();

        mock.expects('get').once();
        mock.expects('get').never().throwsException();

        mock.expects('listen').once();
        mock.expects('listen').never().throwsException();
    });

    afterAll(() => {
        jest.clearAllMocks();
    });
});