import express from 'express';

export default class Routes{

    constructor(app: express.Application){

        app.get('/', (req : express.Request, res: express.Response) => {
            res.send('Hello Worlds!');
        });

        app.get('/test', (req : express.Request, res: express.Response) => {
            res.send('Test');
        });

    }

}