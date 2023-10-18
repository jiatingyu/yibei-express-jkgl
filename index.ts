import express from 'express'

// eslint-disable-next-line
import 'express-async-errors'
import myRouter from './router/my'
import cors from 'cors'
const host = '127.0.0.1'
const port = 3000
const app = express()

app.use(cors())
app.use('/my', myRouter)

app.get('/', (req, res) => {
  console.log('header', req.header('access_token'))
  res.json({ message: 'hello jkgl interface' })
})

app.use((err, req, res, next) => {
  if (err != null) {
    console.error('全局操作捕获1，', err)
    res.json({ err: err.message })
    return
  }
  next()
})

app.use('*', (req, res) => {
  res.json({ message: '不存在的地址' })
})

app.listen(port, () => {
  console.log(`serve start success, it running http://${host}:${port} `)
})
