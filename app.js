const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const user = require('./routes/user')
const plant = require('./routes/plant')
const note = require('./routes/note')
dotenv.config({ path: './config.env' })
const app = express();



const DB = 'mongodb+srv://plant:1234@cluster0.hv8cmdd.mongodb.net/plnatapi?retryWrites=true&w=majority'.replace('<PASSWORD>', process.env.PASSWORD)
mongoose.connect(DB,
    { useNewUrlParser: true }).then(() => {
        console.log('Connected to the database Successfully')
    })


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('tiny'))
app.use(cookieParser())


app.get('/', (req, res) => {
    res.send('helooo node')
})


app.use('/api/v1/user', user)
app.use('/api/v1/plant',plant)
app.use('/api/v1/note',note)

process.on('uncaughtException',(error, source) => {
   console.log(error)
 })

app.listen(process.env.PORT, () => {
    console.log(`server is running at port ${process.env.PORT}`)
})
