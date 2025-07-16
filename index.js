const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello SS!')
})
app.get('/register', (req, res) => {
    res.send("Hello Changes done here")
})
app.get('/login', (req, res) => {
    res.send("Hello India")
})
app.get('/forgotpwd', (req, res) => {
    res.send("Hellooooo")
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
