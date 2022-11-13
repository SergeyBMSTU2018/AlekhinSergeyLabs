import createError from 'http-errors'
import { AbstractScript } from '../service'
import { UserFinder, UserGateway } from '../../database'

interface UserRegData {
    name: string
    surname: string
    email: string
    telephone: string
    password: string
}

interface UserReg {
    userId: number
}

class UserRegScript extends AbstractScript {
    public async run({ name, surname, email, telephone, password }: UserRegData): Promise<UserReg> {
        if (name.length > 64) throw createError.BadRequest('Name > 64')
        if (surname.length > 64) throw createError.BadRequest('Surname > 64')
        if (email.length > 64) throw createError.BadRequest('Email > 64')
        if (telephone.length > 12) throw createError.BadRequest('Telephone > 12')

        const uf = new UserFinder()

        const users = await uf.findByTelephone(telephone)
        if (users.length > 0) throw createError.BadRequest('Telephone exist')

        const ug = new UserGateway()
        ug.setName(name)
        ug.setSurname(surname)
        ug.setEmail(email)
        ug.setTelephone(telephone)
        ug.setPassword(password)

        const userId = await ug.insert()
        if (!userId) throw createError.InternalServerError('DB error')

        return {
            userId,
        }
    }
}

export {
    UserRegScript,
}