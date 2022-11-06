import { Database } from '../database'
import { PersonGateway } from './gateway'

class PersonFinder extends Database {
    async findByTelephone(telephone: string): Promise<PersonGateway[]> {
        const data = await this.db.any('select id, name, surname, email, telephone, password from person where telephone = ${telephone}', {
            telephone,
        })

        return data.map(({ id, name, surname, email, telephone, password }) => {
            const pg = new PersonGateway()
            pg.setId(id)
            pg.setName(name)
            pg.setSurname(surname)
            pg.setEmail(email)
            pg.setTelephone(telephone)
            pg.setPassword(password)

            return pg
        })
    }

    async findById(id: number): Promise<PersonGateway[]> {
        const data = await this.db.any('select id, name, surname, email, telephone, password from person where id = ${id}', {
            id,
        })

        return data.map(({ id, name, surname, email, telephone, password }) => {
            const pg = new PersonGateway()
            pg.setId(id)
            pg.setName(name)
            pg.setSurname(surname)
            pg.setEmail(email)
            pg.setTelephone(telephone)
            pg.setPassword(password)

            return pg
        })
    }
}

export {
    PersonFinder,
}