import express, { type Express, type Response, type Request} from 'express'

const app: Express = express()

app.get('/', (req: Request, res: Response) => {
    res.send('Hi')
})