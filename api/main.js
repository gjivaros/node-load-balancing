require('dotenv').config()

const Express = require('express')

const app = Express()

const appId = process.env.APPID

console.log(process.env)


app.get('/', (_, res)=>res.send(`App ${appId} is running on port ${appId}`))

app.listen(appId, ()=>console.log(`app is running on port ${appId}`))