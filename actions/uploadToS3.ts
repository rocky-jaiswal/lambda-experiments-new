import aws from 'aws-sdk'

import { readFileAsync } from '../utils/fileUtils'
import DTO from '../dto'

const s3 = new aws.S3()

const uploadToS3 = async (dto: DTO) => {
  try {
    const file = await readFileAsync(dto.pdfPath)

    const params = {
      Bucket: 'test-statement-foo',
      Key: dto.templateId!!,
      Body: file
    }

    await s3.upload(params).promise()

    return dto
  } catch (err) {
    throw new Error('Error uploading account statement to S3' + err)
  }
}

export default uploadToS3
