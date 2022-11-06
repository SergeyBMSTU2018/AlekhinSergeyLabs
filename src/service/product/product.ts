import { AbstractScript } from '../service'
import { ProductFinder } from '../../database'
import { HttpError } from '../../utils'

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
        const pf = new ProductFinder()

        const products = await pf.findById(productId)
        if (products.length === 0) throw new HttpError(400, 'Wrong productId')
        if (products.length > 1) throw new HttpError(500, 'Too many products')

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