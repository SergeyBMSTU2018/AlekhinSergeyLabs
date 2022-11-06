import { CategoryFinder, PersonFinder, ProductGateway } from '../../database'
import { AbstractScript } from '../service'
import { HttpError } from '../../utils'

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
        if (name.length > 64) throw new HttpError(400, 'Name > 64')
        if (amount < 0) throw new HttpError(400, 'Amount < 0')

        const cf = new CategoryFinder()

        const categories = await cf.findById(categoryId)
        if (categories.length === 0) throw new HttpError(400, 'Wrong categoryId')
        if (categories.length > 1) throw new HttpError(500, 'Too many categories')

        const pf = new PersonFinder()

        const persons = await pf.findById(userId)
        if (persons.length === 0) throw new HttpError(400, 'Wrong userId')
        if (persons.length > 1) throw new HttpError(500, 'Too many persons')

        const pg = new ProductGateway()
        pg.setName(name)
        pg.setDescription(description)
        pg.setAmount(amount)
        pg.setCategoryId(categoryId)
        pg.setOwnerId(userId)

        const productId = await pg.insert()
        if (!productId) throw new HttpError(500, 'DB error')

        return {
            productId,
        }
    }
}

export {
    ProductCreateScript,
}