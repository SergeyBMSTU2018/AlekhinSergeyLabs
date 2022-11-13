import pgp from 'pg-promise'
import { developmentConfig } from '../config'

const dbConnect = pgp()(developmentConfig.database)

abstract class AbstractDatabase {
    constructor(protected db = dbConnect) {}
}

export {
    AbstractDatabase,
}