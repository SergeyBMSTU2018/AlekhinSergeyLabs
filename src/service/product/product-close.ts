import { PersonFinder, ProductFinder } from '../../database'
import { AbstractScript } from '../service'
import { HttpError } from '../../utils'

interface ProductCloseData {
    userId: number
    productId: number
}

interface ProductClose {
    productId: number
}

class ProductCloseScript extends AbstractScript {
    async run({ userId, productId }: ProductCloseData): Promise<ProductClose> {
        const pf = new PersonFinder()

        const persons = await pf.findById(userId)
        if (persons.length === 0) throw new HttpError(400, 'Wrong userId')
        if (persons.length > 1) throw new HttpError(500, 'Too many persons')

        const prf = new ProductFinder()

        const products = await prf.findById(productId)
        if (products.length === 0) throw new HttpError(400, 'Wrong productId')
        if (products.length > 1) throw new HttpError(500, 'Too many products')

        const pg = products[0]
        if (pg.getOwnerId() !== userId) throw new HttpError(403, 'Not your product')

        pg.setClose(true)

        const id = await pg.update()
        if (!id) throw new HttpError(500, 'DB error')

        return {
            productId: id,
        }
    }
}

export {
    ProductCloseScript,
}