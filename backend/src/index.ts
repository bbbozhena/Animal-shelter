import http from "http"
import * as dotenv from "dotenv";
dotenv.config()
console.log(process.env.PORT)
const port = process.env.PORT

const server = http.createServer((req, res) => {
    res.end("Hello")
})
server.listen(port, () => {
    console.log(`Server is running on  ${port}`)
})