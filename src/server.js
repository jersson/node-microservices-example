'use strict'

class Server{
    constructor(serverInstance, port){
        this.instance = serverInstance;
        this.port = port;
    };

    start = () => {
        this.instance.get('/books', (req, res) => {
            console.log(`the request is from ${req.url}`);
            const books = [
                { id: 1, name: 'Code Complete' },
                { id: 2, name: 'Clean Code' }
            ];
    
            res.send(books);
        });
    
        this.instance.listen(this.port, () => {
            console.log(`server at port ${this.port} is running...`);
        });
    };
}

module.exports = Server;