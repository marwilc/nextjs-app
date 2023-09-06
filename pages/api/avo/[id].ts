import Database from '@database'
import { NextApiRequest, NextApiResponse } from 'next'
const avo = async (request: NextApiRequest, response: NextApiResponse) => {
  const DB = new Database()
  const id = request.query.id
  const entry = await DB.getById(id as string)

  response.status(200).json(entry)
}

export default avo
