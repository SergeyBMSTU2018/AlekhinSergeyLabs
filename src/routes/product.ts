import { Router } from 'express'
import createError from 'http-errors'
import {ProductCloseScript, ProductCreateScript, ProductScript} from '../service'

const productRouter = Router()

productRouter.post('/create', async (req, res, next) => {
    try {
        const { name, description, amount, categoryId, userId } = req.body

        if (!name) throw createError.BadRequest('No name')
        if (!description) throw createError.BadRequest('No description')
        if (!amount) throw createError.BadRequest('No amount')
        if (!categoryId) throw createError.BadRequest('No categoryId')
        if (!userId) throw createError.BadRequest('No userId')

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

        if (!userId) throw createError.BadRequest('No userId')
        if (!productId) throw createError.BadRequest('No productId')

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

        if (!productId) throw createError.BadRequest('No productId')

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