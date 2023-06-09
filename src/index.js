

import express from 'express'

import employesRoutes from './routes/employes.routes.js'
import indexRoutes from './routes/index.routers.js'

const app = express()

app.use(express.json())


app.use('/api',employesRoutes)
app.use('/api',indexRoutes)
app.listen(3000)

console.log('Server running in 3000')
