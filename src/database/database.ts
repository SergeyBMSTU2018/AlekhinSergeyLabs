import pgp from 'pg-promise'
import { developmentConfig } from '../config'

const db = pgp()(developmentConfig.database)

class Database {
    protected db!: pgp.IDatabase<any>

    constructor() {
        this.db = db
    }
}

export {
    Database,
}