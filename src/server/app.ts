import * as dotenv from 'dotenv';
import * as express from 'express';
import { Application, Request, Response, NextFunction, static as expressStatic } from 'express';
import { join } from 'path';
import { json, urlencoded } from 'body-parser';

dotenv.config();

const port = process.env.PORT;

const fork = () => {
    try {
        const app: Application = express();

        app.use(expressStatic(join(__dirname, '../')));
        app.use(json());
        app.use(urlencoded({ extended: true }));

        app.get('*', (req: Request, res: Response) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.send(expressStatic(join(__dirname, '../index.html')))
        })

        app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
            console.log(err);
        })

        app.listen(port, () => {
            console.log('Express server listening on port ' + port);
        })
    } catch (err) {
        console.log(err);
    }
}

fork();