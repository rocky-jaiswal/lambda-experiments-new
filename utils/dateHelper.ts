import { startOfMonth, endOfMonth, format } from 'date-fns'

const dateFormat = 'yyyy-MM-dd'
const longFormat = 'MMMM d, yyyy'

interface Options {
  overrideStartDate?: number
  useLongFormat?: boolean
}

export const firstAndLastDaysOfMonth = (
  month: number,
  year: number,
  options: Options = { overrideStartDate: 1, useLongFormat: false }
) => {
  const baseDate = new Date(year, month - 1, options.overrideStartDate || 1)

  const startDate = options.overrideStartDate === 1 ? startOfMonth(baseDate) : baseDate

  const startDateOfMonth = format(startDate, options.useLongFormat ? longFormat : dateFormat)
  const endDateOfMonth = format(
    endOfMonth(baseDate),
    options.useLongFormat ? longFormat : dateFormat
  )

  return { startDateOfMonth, endDateOfMonth }
}
