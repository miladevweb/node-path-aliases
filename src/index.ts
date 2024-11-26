import 'dotenv/config'
if (process.env.NODE_ENV === 'production') require('module-alias/register')

import express from 'express'
import { greet } from '@/utils/greet'

const app = express()
const PORT = process.env.PORT || 8000

app.get('/', (_req, res) => {
  const result = greet('Camilla')
  return res.send(result)
})

app.listen(PORT, () => console.log('Server is running on port ' + PORT))
