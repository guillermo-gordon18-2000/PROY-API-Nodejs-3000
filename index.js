console.log("Hello world");

import express from 'express'
import {pool} from './db.js'

const app = express()

app.get('/employees',(req ,res) => res.send('Opteniendo empleado'))

app.get('/ping', async (req,res) => {
  const [result] =  await   pool.query('SELECT 1 + 1 AS result')
 res.json(result)
 });



app.post('/employees',(req ,res) => res.send('Creando empleado'))


app.put('/employees',(req ,res) => res.send('actualizando empleado'))


app.delete('/employees',(req ,res) => res.send('Eliminando empleado'))
app.listen(3000)

console.log('Server running in 3000')
