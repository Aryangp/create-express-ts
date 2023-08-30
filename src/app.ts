import express , {Express,Request,Response}from 'express';
import bodyParser from 'body-parser';
import homeRoute from "./routes/homeRoute"

const app :Express = express();
const port:number = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/home",homeRoute)

// Routes
app.get('/', (req:Request, res:Response) => {
  res.send('Hello, Express with TypeScript by Aryan Gupta');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});