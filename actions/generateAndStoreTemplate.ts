import pug from 'pug'

import { writeFileAsync } from '../utils/fileUtils'
import DTO from '../dto'

// pre-compile for better performance
const compiledFunction = pug.compileFile(`./templates/statement.pug`)

const generateAndStoreTemplate = async (dto: DTO) => {
  try {
    const template = compiledFunction({})

    await writeFileAsync(dto.htmlPath, template)

    return dto
  } catch (err) {
    throw new Error('Error generating template for account statement' + err)
  }
}

export default generateAndStoreTemplate
