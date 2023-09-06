import Database from '@database'
import { NextApiRequest, NextApiResponse } from 'next'
const allAvos = async (request: NextApiRequest, response: NextApiResponse) => {
  const DB = new Database()
  const allEntries = await DB.getAll()
  const length = allEntries.length

  response.status(200).json({
    length,
    data: allEntries,
  })
}

export default allAvos
