import { Router } from 'express'

let router = Router()

export const test = router.get('/', (req, res) => {
    res.send(404)
})
