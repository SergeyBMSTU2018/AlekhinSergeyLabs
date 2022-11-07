import createError from 'http-errors'
import { AbstractScript } from '../service'
import { PersonFinder, PersonGateway } from '../../database'

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
        if (name.length > 64) throw createError.BadRequest('Name > 64')
        if (surname.length > 64) throw createError.BadRequest('Surname > 64')
        if (email.length > 64) throw createError.BadRequest('Email > 64')
        if (telephone.length > 12) throw createError.BadRequest('Telephone > 12')

        const pf = new PersonFinder()

        const persons = await pf.findByTelephone(telephone)
        if (persons.length > 0) throw createError.BadRequest('Telephone exist')

        const pg = new PersonGateway()
        pg.setName(name)
        pg.setSurname(surname)
        pg.setEmail(email)
        pg.setTelephone(telephone)
        pg.setPassword(password)

        const userId = await pg.insert()
        if (!userId) throw createError.InternalServerError('DB error')

        return {
            userId,
        }
    }
}

export {
    PersonRegScript,
}