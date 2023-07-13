const express = require('express');
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        //Middleware
        this.middleware();
        this.port = process.env.PORT
         //Routes
        this.routes();
    }
    middleware() {
        //CORS 
        this.app.use(cors());
        //Public Directory
        this.app.use(express.static('public'));
    }
    routes() {
            this.app.get("/home", (req,res)=>{
                res.json({
                    "message": "landingpage"
                })
            });
            this.app.post("/", (req,res)=>{
                res.json({
                    "message": "post api"
                })
            });
            this.app.delete("/", (req,res)=>{
                res.json({
                    "message": "delete api"
                })
            });
            this.app.put("/", (req,res)=>{
                res.json({
                    "message": "put api"
                })
            })
            this.app.patch("/", (req,res)=>{
                res.json({
                    "message": "patch api"
                })
            })
        }
        listen(){
            this.app.listen(this.port, ()=>{
                            console.log(`Server is running on port : ${this.port}`);
                        })
        }
}


module.exports = Server; 