export const MONTHS_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

export const WEEKDAYS_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

export const CALENDAR_ROWS = 6

export const CALENDAR_GRID = CALENDAR_ROWS * WEEKDAYS_NAMES.length

export const getDateFormat = (year, month, day) => {
  return new Date(year, month - 1, day).toLocaleDateString(undefined, {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  })
}

export const getMonthName = month => {
  return MONTHS_NAMES[month - 1]
}

export const getNextMonth = (year, month) => {
  const nextMonth = month >= 13 ? 1 : month
  const nextYear = month >= 13 ? year + 1 : year
  return {year: nextYear, month: nextMonth}
}

export const getPrevMonth = (year, month) => {
  const prevMonth = month <= 0 ? 12 : month
  const prevYear = month <= 0 ? year - 1 : year
  return {year: prevYear, month: prevMonth}
}

export const getMonthDays = (year, month) => {
  return new Date(year, month, 0).getDate()
}

export const getMonthDayWeek = (year, month, day) => {
  return new Date(`${year}-${month}-${day}`).getDay() + 1
}

export const getCalendarDays = (year, month) => {
  const actualMonthDays = getMonthDays(year, month)
  const monthFirstDay = getMonthDayWeek(year, month, 1)
  const prevMonth = getPrevMonth(year, month - 1)
  const nextMonth = getNextMonth(year, month + 1)
  const daysFromPrevMonth = monthFirstDay - 1
  const daysFromNextMonth =
    CALENDAR_GRID - (daysFromPrevMonth + actualMonthDays)

  const actualMonthDates = [...new Array(actualMonthDays)].map((val, day) => {
    const dayMonth = day + 1
    return {
      day: dayMonth,
      date: getDateFormat(year, month, dayMonth),
      month: 'actual'
    }
  })

  const prevMonthDays = getMonthDays(prevMonth.year, prevMonth.month)
  const prevMonthDates = [...new Array(daysFromPrevMonth)].map((val, day) => {
    const dayMonth = day + 1 + (prevMonthDays - daysFromPrevMonth)
    return {
      day: dayMonth,
      date: getDateFormat(prevMonth.year, prevMonth.month, dayMonth),
      month: 'prev'
    }
  })

  const nextMonthDates = [...new Array(daysFromNextMonth)].map((val, day) => {
    const dayMonth = day + 1
    return {
      day: dayMonth,
      date: getDateFormat(nextMonth.year, nextMonth.month, dayMonth),
      month: 'next'
    }
  })

  return [...prevMonthDates, ...actualMonthDates, ...nextMonthDates]
}
