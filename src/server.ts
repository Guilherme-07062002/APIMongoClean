import { app } from "./app";
import { dbConnection } from "./useCases/CreateUser";


const PORT = 3333

app.listen(PORT)

console.log(`Server inicializado na porta ${PORT}`)

dbConnection.connect()