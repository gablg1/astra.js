import express, {Express, Request, Response} from 'express';
import { rpcHandler } from "typed-rpc/express";
import { myService } from "./myService.ts";

const app: Express = express();
const port = 4000;

app.use(express.json());

app.post("/api", rpcHandler(myService));
app.get('/', (req: Request, res: Response)=>{
    res.send('Hello, this is Express + TypeScript');
});

app.listen(port, ()=> {
console.log(`[Server]: I am running at https://localhost:${port}`);
});
