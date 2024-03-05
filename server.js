const express = require('express')
const app = express()
const authRoute = require('./routes/auth')
const protectedRoute = require('./routes/protectedRoute')

app.use(express.json())
app.use('/auth', authRoute);
app.use('/protected', protectedRoute);


app.listen(5000, () => {
    console.log('listening on port 5000')
})