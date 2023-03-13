import {createPool} from 'mysql2/promise'


export const pool = createPool({
    host:'localhost',
    user:'maverick',
    password:'maverick',
    port: 3306,
    database:'Prueba-3000'
})


