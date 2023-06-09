import { app } from "./src/app";
import { dbConnection } from "./src/useCases/CreateUser";

require('dotenv').config()


const PORT = process.env.PORT

app.listen(PORT)

console.log(`Server started on port ${PORT}`)

dbConnection.connect()