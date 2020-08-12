import chromium from 'chrome-aws-lambda'

import { readFileAsync } from '../utils/fileUtils'
import DTO from '../dto'

const createPDF = async (dto: DTO) => {
  try {
    const executablePath = await chromium.executablePath

    const browser = await chromium.puppeteer.launch({
      headless: true,
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath
    })

    const page = await browser.newPage()
    const htmlContent = await readFileAsync(dto.htmlPath)
    await page.setContent(htmlContent.toString())

    // page.pdf() is currently supported only in headless mode.
    // @see https://bugs.chromium.org/p/chromium/issues/detail?id=753118
    await page.pdf({
      path: dto.pdfPath,
      format: 'A4',
      displayHeaderFooter: true,
      headerTemplate: '<span />',
      footerTemplate: `<span style="font-size: 8px; color: gray; padding: 10px">
        Page <span class="pageNumber"></span> of <span class="totalPages"></span>
        </span>`,
      margin: {
        top: '30px',
        right: '50px',
        bottom: '100px',
        left: '50px'
      }
    })

    await browser.close()

    return dto
  } catch (err) {
    throw new Error('Error generating pdf for account statement' + err)
  }
}

export default createPDF
