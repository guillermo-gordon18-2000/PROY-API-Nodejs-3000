import {Router} from 'express'
import {getEmployees,createEmployee,updateEmployee,deleteEmployee, getEmployee} from '../controllers/employes.controller.js'

const router = Router()



router.get('/employees',getEmployees )

router.get('/employees/:id',getEmployee )
   // getEmployees)

router.post('/employees',createEmployee)


router.patch('/employees/:id',updateEmployee)


router.delete('/employees/:id',deleteEmployee)

export default router
