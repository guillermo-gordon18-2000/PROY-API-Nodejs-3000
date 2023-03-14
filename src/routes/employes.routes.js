import {Router} from 'express'


const router = Router()



router.get('/employees',(req ,res) => res.send('Creando empleado'))

router.post('/employees',(req ,res) => res.send('Creando empleado'))


router.put('/employees',(req ,res) => res.send('actualizando empleado'))


router.delete('/employees',(req ,res) => res.send('Eliminando empleado'))

export default router
