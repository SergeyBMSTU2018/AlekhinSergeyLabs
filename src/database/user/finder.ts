import { AbstractDatabase } from '../database'
import { UserGateway } from './gateway'

class UserFinder extends AbstractDatabase {
    public async findByTelephone(telephone: string): Promise<UserGateway[]> {
        const data = await this.db.any('select id, name, surname, email, telephone, password from users where telephone = ${telephone}', {
            telephone,
        })

        return data.map(({ id, name, surname, email, telephone, password }) => {
            const pg = new UserGateway()
            pg.setId(id)
            pg.setName(name)
            pg.setSurname(surname)
            pg.setEmail(email)
            pg.setTelephone(telephone)
            pg.setPassword(password)

            return pg
        })
    }

    public async findById(id: number): Promise<UserGateway[]> {
        const data = await this.db.any('select id, name, surname, email, telephone, password from users where id = ${id}', {
            id,
        })

        return data.map(({ id, name, surname, email, telephone, password }) => {
            const pg = new UserGateway()
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
    UserFinder,
}