import { Router } from 'express'
import {ProductCloseScript, ProductCreateScript, ProductScript} from '../service'
import { HttpError } from '../utils'

const productRouter = Router()

productRouter.post('/create', async (req, res, next) => {
    try {
        const { name, description, amount, categoryId, userId } = req.body

        if (!name) throw new HttpError(400, 'No name')
        if (!description) throw new HttpError(400, 'No description')
        if (!amount) throw new HttpError(400, 'No amount')
        if (!categoryId) throw new HttpError(400, 'No categoryId')
        if (!userId) throw new HttpError(400, 'No userId')

        const productCreateScript = new ProductCreateScript()
        const data = await productCreateScript.run({
            name,
            description,
            amount: Number(amount),
            categoryId: Number(categoryId),
            userId: Number(userId),
        })

        res.json(data)
    } catch (err) {
        next(err)
    }
})

productRouter.put('/close', async (req, res, next) => {
    try {
        const { userId, productId } = req.body

        if (!userId) throw new HttpError(400, 'No userId')
        if (!productId) throw new HttpError(400, 'No productId')

        const productCloseScript = new ProductCloseScript()
        const data = await productCloseScript.run({
            userId: Number(userId),
            productId: Number(productId),
        })

        res.json(data)
    } catch (err) {
        next(err)
    }
})

productRouter.get('/', async (req, res, next) => {
    try {
        const { productId } = req.body

        if (!productId) throw new HttpError(400, 'No productId')

        const productScript = new ProductScript()
        const data = await productScript.run({
            productId: Number(productId),
        })

        res.json(data)
    } catch (err) {
        next(err)
    }
})

export {
    productRouter,
}