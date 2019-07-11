
import express, { Application, Router } from 'express';
import Routes from './routes'

interface ITestMessage{
    message: string;
}

class TransportObject<T>{
    public data: T;
    constructor(options: T){
        this.data = options;
    }
}
class Server {
    public app: Application;
    public routes: Routes;
    constructor() {
        this.app = express();
        this.routes = new Routes(this.app);

        this.app.get('/home', this.home);

        this.app.listen(8080, () => {
            console.log('Example app listening on port 8080!');
        });

    }


    home(req: express.Request, res: express.Response): void {
        res.send(new TransportObject<ITestMessage>({
            message: "1234565"
        }))
    }


}
const server = new Server();
export default server;


