import { AbstractScript } from '../service'
import { PersonFinder, PersonGateway } from '../../database'
import { HttpError } from '../../utils'

interface PersonRegData {
    name: string
    surname: string
    email: string
    telephone: string
    password: string
}

interface PersonReg {
    userId: number
}

class PersonRegScript extends AbstractScript {
    async run({ name, surname, email, telephone, password }: PersonRegData): Promise<PersonReg> {
        if (name.length > 128) throw new HttpError(400, 'Name > 128')

        const pf = new PersonFinder()

        const persons = await pf.findByTelephone(telephone)
        if (persons.length > 0) throw new HttpError(400, 'Telephone exist')

        const pg = new PersonGateway()
        pg.setName(name)
        pg.setSurname(surname)
        pg.setEmail(email)
        pg.setTelephone(telephone)
        pg.setPassword(password)

        const userId = await pg.insert()
        if (!userId) throw new HttpError(500, 'DB error')

        return {
            userId,
        }
    }
}

export {
    PersonRegScript,
}