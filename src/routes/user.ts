import { Router } from 'express'
import createError from 'http-errors'
import { PersonAuthScript, PersonRegScript } from '../service'

const userRouter = Router()

userRouter.post('/auth', async (req, res, next) => {
  try {
    const { telephone, password } = req.body

    if (!telephone) throw createError.BadRequest('No telephone')
    if (!password) throw createError.BadRequest('No password')

    const personAuthScript = new PersonAuthScript()
    const data = await personAuthScript.run({
      telephone,
      password,
    })

    res.json(data)
  } catch (err) {
    next(err)
  }
})

userRouter.post('/reg', async (req, res, next) => {
  try {
    const { name, surname, email, telephone, password } = req.body

    if (!name) throw createError.BadRequest('No name')
    if (!surname) throw createError.BadRequest('No surname')
    if (!email) throw createError.BadRequest('No email')
    if (!telephone) throw createError.BadRequest('No telephone')
    if (!password) throw createError.BadRequest('No password')

    const personRegScript = new PersonRegScript()
    const data = await personRegScript.run({
      name,
      surname,
      email,
      telephone,
      password,
    })

    res.json(data)
  } catch (err) {
    next(err)
  }
})

export {
  userRouter,
}