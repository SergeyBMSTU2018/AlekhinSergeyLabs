import createError from 'http-errors'
import { AbstractScript } from '../service'
import { PersonFinder } from '../../database'

interface PersonAuthData {
    telephone: string
    password: string
}

interface PersonAuth {
    userId: number
}

class PersonAuthScript extends AbstractScript {
    async run({ telephone, password }: PersonAuthData): Promise<PersonAuth> {
        const pf = new PersonFinder()

        const persons = await pf.findByTelephone(telephone)
        if (!persons) throw createError.InternalServerError('DB error')

        if (persons.length === 0) throw createError.BadRequest('Wrong telephone')
        if (persons.length > 1) throw createError.InternalServerError('Too many users')

        const user = persons[0]
        if (user.getPassword() !== password) throw createError.BadRequest('Wrong password')

        return {
            userId: user.getId(),
        }
    }
}

export {
    PersonAuthScript,
}