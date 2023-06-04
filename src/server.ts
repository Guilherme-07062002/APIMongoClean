import { app } from "./app";
import { mongoConnection } from "./useCases/CreateUser";


const PORT = 3333

app.listen(PORT)

console.log(`Server inicializado na porta ${PORT}`)

mongoConnection.connect()