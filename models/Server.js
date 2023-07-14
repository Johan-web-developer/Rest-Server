const express = require('express');
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        //Middleware
        this.middleware();
        this.port = process.env.PORT
        this.usuarioPath = "/api/users"
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
            this.app.use(this.usuarioPath, require('../routes/usuario.routes.js'));
        }
        listen(){
            this.app.listen(this.port, ()=>{
                            console.log(`Server is running on port : ${this.port}`);
                        })
        }
}


module.exports = Server; 