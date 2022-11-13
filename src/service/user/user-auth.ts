import createError from 'http-errors'
import { AbstractScript } from '../service'
import { UserFinder } from '../../database'

interface UserAuthData {
    telephone: string
    password: string
}

interface UserAuth {
    userId: number
}

class UserAuthScript extends AbstractScript {
    public async run({ telephone, password }: UserAuthData): Promise<UserAuth> {
        if (telephone.length > 12) throw createError.BadRequest('Telephone > 12')

        const uf = new UserFinder()

        const users = await uf.findByTelephone(telephone)
        if (!users) throw createError.InternalServerError('DB error')

        if (users.length === 0) throw createError.BadRequest('Wrong telephone')
        if (users.length > 1) throw createError.InternalServerError('Too many users')

        const user = users[0]
        if (user.getPassword() !== password) throw createError.BadRequest('Wrong password')

        return {
            userId: user.getId(),
        }
    }
}

export {
    UserAuthScript,
}