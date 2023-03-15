import {pool} from '../db.js'

export const getEmployees = async  (req ,res) => {
    const [rows] = await pool.query('Select * From employee')
    res.json(rows)
 }


export const getEmployee = async  (req ,res) => {
    const [rows] = await pool.query('Select * From employee where idnew_table = ?',[req.params.id])
    if(rows.length <= 0) return res.status(404).json({
     message:'Employee not found'
    })
    res.json(rows[0])
 }



export const createEmployee = async (req ,res) => {


    const {name , salary  } = req.body
    const [rows] =  await  pool.query('INSERT INTO employee (name , salary) values(?,?)',[name,salary])

    res.send({
        id:rows.insertId,
        name,
        salary,

    })
  }

export const updateEmployee = (req ,res) => res.send('actualizando empleado')


export const deleteEmployee = async  (req ,res) => {
    const [result]  = await pool.query('DELETE FROM employee WHERE idnew_table = ?',[req.params.id])
    //res.json(rows)
     if(result.affectedRows <= 0) return res.status(404).json({
         message: 'Employee not found'
     })


    console.log(result)
    res.sendStatus(204)
 }
