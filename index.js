console.log("Hello world");

import express from 'express'

import employesRoutes from './routes/employes.routes.js'
import indexRoutes from './routes/index.routes.js'

const app = express()




app.use(employesRoutes)
app.use(indexRoutes)
app.listen(3000)

console.log('Server running in 3000')
