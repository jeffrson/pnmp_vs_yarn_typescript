import { Router } from 'express'

export const test = Router().get('/:namespace/:id', async (req, res) => {
    res.send(404)
})
