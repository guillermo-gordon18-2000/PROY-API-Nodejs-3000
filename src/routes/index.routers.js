import {Router } from 'express'

import {ping} from '../controllers/index.controller.js'

const router = Router()





app.get('/ping',ping);


export default router
