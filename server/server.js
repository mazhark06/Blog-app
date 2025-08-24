import app from "./app.js"
import http from "http"
import dotenv from 'dotenv'

dotenv.config()
const PORT  = process.env.PORT || 3000
let server  = http.createServer(app)
server.listen(PORT,() => {
    console.log(`App is listening on http://localhost:${PORT}`);
    
})
