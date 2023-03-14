import {pool} from '../db.js'

export const getEmployees = (req ,res) => res.send('obteniendo  empleado')


export const createEmployee = (req ,res) => {
   // pool.query('INSERT INTO employees (name , salary) values(?,?)',[])
    console.log(req.body)

         }

export const updateEmployee = (req ,res) => res.send('actualizando empleado')


export const deleteEmployee = (req ,res) => res.send('Eliminando empleado')

