import { APIGatewayProxyHandler } from 'aws-lambda'
import 'source-map-support/register'

import { generateStatement } from './main'

export const hello: APIGatewayProxyHandler = async (_event, _context) => {
  try {
    await generateStatement()
  } catch (err) {
    console.error(err)
  }

  return {
    statusCode: 200,
    body: ''
  }
}
