import express,{Request,Response} from "express"

const route = express.Router();


route.get('/',(req:Request,res:Response)=>{
    res.send("Welcome to the home page route")
})


export default route;
