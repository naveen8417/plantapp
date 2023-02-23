const mongoose = require('mongoose')
const user = require('../model/user')
const plant = require('../model/plant')
const note = require('../model/notes')


const DB = 'mongodb+srv://plant:1234@cluster0.hv8cmdd.mongodb.net/plnatapi?retryWrites=true&w=majority'.replace('<PASSWORD>', process.env.PASSWORD)
mongoose.connect(DB,
    { useNewUrlParser: true }).then(() => {
        console.log('Connected to the database Successfully')
    })

async function flushAll() {

    try {

        await user.deleteMany()
        await plant.deleteMany()
        await note.deleteMany()

    } catch (err) {

    }

}
flushAll()
