import path from 'path'
import { promises as fs } from 'fs'

export default async function handler(req, res) {
  const filePath = path.join(process.cwd(), 'public/languages/')
  const fileContents = await fs.readFile(filePath + 'postsData.json', 'utf8')
  const data = JSON.parse(fileContents)

  res.json({
    data,
  })
}
