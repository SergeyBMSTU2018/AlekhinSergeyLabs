import { AbstractScript } from '../service'
import { PersonFinder } from '../../database'
import { HttpError } from '../../utils'

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
        if (!persons) throw new HttpError(500, 'DB error')

        if (persons.length === 0) throw new HttpError(400, 'Wrong telephone')
        if (persons.length > 1) throw new HttpError(500, 'Too many users')

        const user = persons[0]
        if (user.getPassword() !== password) throw new HttpError(400, 'Wrong password')

        return {
            userId: user.getId(),
        }
    }
}

export {
    PersonAuthScript,
}