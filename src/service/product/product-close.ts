import createError from 'http-errors'
import { UserFinder, ProductFinder } from '../../database'
import { AbstractScript } from '../service'

interface ProductCloseData {
    userId: number
    productId: number
}

interface ProductClose {
    productId: number
}

class ProductCloseScript extends AbstractScript {
    public async run({ userId, productId }: ProductCloseData): Promise<ProductClose> {
        if (userId < 0) throw createError.BadRequest('UserId < 0')
        if (productId < 0) throw createError.BadRequest('ProductId < 0')

        const uf = new UserFinder()

        const users = await uf.findById(userId)
        if (users.length === 0) throw createError.BadRequest('Wrong userId')
        if (users.length > 1) throw createError.InternalServerError('Too many persons')

        const pf = new ProductFinder()

        const products = await pf.findById(productId)
        if (products.length === 0) throw createError.BadRequest('Wrong productId')
        if (products.length > 1) throw createError.InternalServerError('Too many products')

        const pg = products[0]
        if (pg.getOwnerId() !== userId) throw createError.Forbidden('Not your product')

        pg.setClose(true)

        const id = await pg.update()
        if (!id) throw createError.InternalServerError('DB error')

        return {
            productId: id,
        }
    }
}

export {
    ProductCloseScript,
}