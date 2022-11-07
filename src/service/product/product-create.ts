import createError from 'http-errors'
import { CategoryFinder, PersonFinder, ProductGateway } from '../../database'
import { AbstractScript } from '../service'

interface ProductCreateData {
    name: string
    description: string
    amount: number
    categoryId: number
    userId: number
}

interface ProductCreate {
    productId: number
}

class ProductCreateScript extends AbstractScript {
    async run({ name, description, amount, categoryId, userId }: ProductCreateData): Promise<ProductCreate> {
        if (name.length > 64) throw createError.BadRequest('Name > 64')
        if (amount < 0) throw createError.BadRequest('Amount < 0')
        if (categoryId < 0) throw createError.BadRequest('CategoryId < 0')
        if (userId < 0) throw createError.BadRequest('UserId < 0')

        const cf = new CategoryFinder()

        const categories = await cf.findById(categoryId)
        if (categories.length === 0) throw createError.BadRequest('Wrong categoryId')
        if (categories.length > 1) throw createError.InternalServerError('Too many categories')

        const pf = new PersonFinder()

        const persons = await pf.findById(userId)
        if (persons.length === 0) throw createError.BadRequest('Wrong userId')
        if (persons.length > 1) throw createError.InternalServerError('Too many persons')

        const pg = new ProductGateway()
        pg.setName(name)
        pg.setDescription(description)
        pg.setAmount(amount)
        pg.setCategoryId(categoryId)
        pg.setOwnerId(userId)

        const productId = await pg.insert()
        if (!productId) throw createError.InternalServerError('DB error')

        return {
            productId,
        }
    }
}

export {
    ProductCreateScript,
}