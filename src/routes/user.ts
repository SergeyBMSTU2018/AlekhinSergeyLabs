import { Router } from 'express'
import {PersonAuthScript, PersonRegScript} from '../service'
import { HttpError } from '../utils'

const userRouter = Router()

userRouter.post('/auth', async (req, res, next) => {
  try {
    const { telephone, password } = req.body

    if (!telephone) throw new HttpError(400, 'No telephone')
    if (!password) throw new HttpError(400, 'No password')

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

    if (!name) throw new HttpError(400, 'No name')
    if (!surname) throw new HttpError(400, 'No surname')
    if (!email) throw new HttpError(400, 'No email')
    if (!telephone) throw new HttpError(400, 'No telephone')
    if (!password) throw new HttpError(400, 'No password')

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