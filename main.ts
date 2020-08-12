import pipeAsync from './utils/pipeAsync'

import DTO from './dto'

import generateAndStoreTemplate from './actions/generateAndStoreTemplate'
import createPDF from './actions/createPDF'
import uploadToS3 from './actions/uploadToS3'

const actions = async (dto: DTO) => {
  const pipedActions = pipeAsync(
    generateAndStoreTemplate,
    createPDF,
    uploadToS3
  )

  return pipedActions<DTO>(dto)
}

export const generateStatement = async () => {
  try {
    await actions(new DTO())
  } catch (error) {
    console.error(error)
  }
  return {}
}
