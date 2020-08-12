import { v4 as uuidv4 } from 'uuid'

class DTO {
  public templateId: string

  constructor() {
    this.templateId = uuidv4()
  }

  public get htmlPath() {
    return `/tmp/${this.templateId}.html`
  }

  public get pdfPath() {
    return `/tmp/${this.templateId}.pdf`
  }
}

export default DTO
