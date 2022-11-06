import { RequestHandler } from 'express'
import { HttpError } from '../utils'

const notFoundMiddleware: RequestHandler = () => {
    throw new HttpError(404, 'Page not found')
}

export {
    notFoundMiddleware
}