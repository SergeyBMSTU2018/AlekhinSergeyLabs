import createError from 'http-errors'
import { AbstractScript } from '../service'
import { ProductFinder } from '../../database'

interface ProductData {
    productId: number
}

interface Product {
    id: number
    name: string
    description: string
    amount: number
    categoryId: number
    ownerId: number
    close: boolean
}

class ProductScript extends AbstractScript {
    async run({ productId }: ProductData): Promise<Product> {
        if (productId < 0) throw createError.BadRequest('ProductId < 0')

        const pf = new ProductFinder()

        const products = await pf.findById(productId)
        if (products.length === 0) throw createError.BadRequest('Wrong productId')
        if (products.length > 1) throw createError.InternalServerError('Too many products')

        const product = products[0]

        return {
            id: product.getId(),
            name: product.getName(),
            description: product.getDescription(),
            amount: product.getAmount(),
            categoryId: product.getCategoryId(),
            ownerId: product.getOwnerId(),
            close: product.getClose(),
        }
    }
}

export {
    ProductScript,
}