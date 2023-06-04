import mongoose from 'mongoose';

const PORT = 27017
const HOST = '127.0.0.1'

/**Conexão com Mongo */
export class MongoConnection {
    connect() {
        mongoose.connect(`mongodb://${HOST}:${PORT}/teste`, { autoCreate: true })
            .then(() => {
                console.log('Database connection successful')
            })
            .catch(err => { console.log('Failure in connection with database') })
    }
}