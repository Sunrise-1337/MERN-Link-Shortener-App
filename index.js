const express = require('express')
const config = require('config')
const mongoose = require('mongoose')

const app = express()

app.use('/api/auth', require('./routes/auth.routes'))

const PORT = config.get('port') || 8080

async function start() {
    try {
        await mongoose.connect(
            config.get('mongoURL')
        )
    } catch (e) {
        console.log('MERN Server Error', e.message)
        process.exit(1)
    }
}

start()

app.listen(PORT, () => console.log('lets get it started on ' + PORT))