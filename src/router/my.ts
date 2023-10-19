// 绵阳路由
import express from 'express'
import axios from 'axios'
import responseInterceptor from '../interceptor/response'
import userModel from '../model/userModel'
import { port, host } from '../config/index'
const myRouter = express.Router()

const http = axios.create({
  baseURL: `http://${host}:${port}`,
  timeout: 3000,
})

http.interceptors.response.use(responseInterceptor)

myRouter.get('/getList', async (req, res) => {
  console.log('req,', req.query)

  const resData = await http.get('/', {
    headers: { access_token: req.query.token },
  } as any)
  res.json({ ...userModel, ...resData }).end()
  await Promise.resolve()
})

export default myRouter
