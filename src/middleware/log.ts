import { RequestHandler } from 'express'

const logMiddleware: RequestHandler = (req, res, next) => {
    console.log('Request', req.method, req.url)
    next()
}

export {
    logMiddleware
}