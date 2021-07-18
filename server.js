import express from 'express'
import http from 'http'


const app = express(http)

app.use(express.static('public'))

app.listen(3000, ()=>{
    console.log("funcionando na porta 3000")
})