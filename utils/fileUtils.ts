import FS from 'fs'
import Util from 'util'

export const writeFileAsync = Util.promisify(FS.writeFile)

export const readFileAsync = Util.promisify(FS.readFile)

export const deleteFileAsync = Util.promisify(FS.unlink)
