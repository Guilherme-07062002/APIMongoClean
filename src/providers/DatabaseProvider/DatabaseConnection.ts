import mongoose from 'mongoose';

require('dotenv').config()

const PORT = process.env.MONGO_PORT
const HOST = process.env.HOST

/**Conexão com MongoDB */
export class DatabaseConnection {
    connect() {
        mongoose.connect(`mongodb://${HOST}:${PORT}/teste`, { autoCreate: true })
            .then(() => {
                console.log('Database connection successful')
            })
            .catch(err => { console.log('Failure in connection with database') })
    }
}