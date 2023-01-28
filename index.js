/*import express from "/node_modules/express";

const app = express();

app.listen(3000,()=>
console.log('server on'),
)
*/
const express = require('express')
const pug = require('pug')

const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


app.get('/user', (req, res) => {
    res.send('show user!')
  })