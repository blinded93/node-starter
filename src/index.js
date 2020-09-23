import 'dotenv/config'
import cors from 'cors'
import express from 'express'

import routes from './routes'
import models from './models'

const app = express()

app.use(cors())

app.use((req, res, next) => {
	req.context = {
		models,
		me: models.users[1]
	}

	next()
})

app.get('/', (req, res) => {
	res.send('hello world')
})

app.use('/session', routes.session)
app.use('/users', routes.user)					
app.use('/messages', routes.message)

app.listen(process.env.PORT, () => {
	console.log(`Listening on port ${process.env.PORT}`)
})