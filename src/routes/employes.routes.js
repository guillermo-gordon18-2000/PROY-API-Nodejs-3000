import {Router} from 'express'
import {getEmployees,createEmployee,updateEmployee,deleteEmployee} from '../controllers/employes.controller.js'

const router = Router()



router.get('/employees', (req,res ) => res.send('Hola'))
   // getEmployees)

router.post('/employees',createEmployee)


router.put('/employees',updateEmployee)


router.delete('/employees',deleteEmployee)

export default router
