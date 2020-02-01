import React, {useState} from 'react'
import PropTypes from 'prop-types'
import './index.scss'
import Icon from '../../atoms/icon'
import Heading from '../../atoms/heading'
import {
  getCalendarDays,
  getMonthName,
  getNextMonth,
  getPrevMonth,
  getDateFormat,
  WEEKDAYS_NAMES,
  getDateTransform
} from './dates'

const Calendar = ({date, month, year, onDateChange}) => {
  const actualDate = date ? getDateTransform(date) : new Date()
  const [dateSelected, setDateSelected] = useState({
    year: actualDate.getFullYear() || Number(year),
    month: actualDate.getMonth() + 1 || Number(month)
  })
  const daysInMonth = getCalendarDays(dateSelected.year, dateSelected.month)
  const [dateFull, setDateFull] = useState(
    getDateFormat(
      dateSelected.year,
      dateSelected.month,
      date && actualDate.getDate()
    )
  )

  const handleNextMonth = () => {
    setDateSelected(getNextMonth(dateSelected.year, dateSelected.month + 1))
  }

  const handlePrevMonth = () => {
    setDateSelected(getPrevMonth(dateSelected.year, dateSelected.month - 1))
  }

  const handleClickDay = date => {
    setDateFull(date)
    onDateChange && onDateChange(date)
  }

  return (
    <div className="Calendar">
      <div className="Calendar-topBar">
        <span
          className="Calendar-arrow Calendar-arrow--left"
          onClick={handlePrevMonth}
        >
          <Icon name="chevronLeft" />
        </span>
        <span className="Calendar-month">
          <Heading type="span" size="small">
            {getMonthName(dateSelected.month)} {dateSelected.year}
          </Heading>
        </span>
        <span
          className="Calendar-arrow Calendar-arrow--right"
          onClick={handleNextMonth}
        >
          <Icon name="chevronRight" />
        </span>
      </div>
      <div className="Calendar-days">
        {WEEKDAYS_NAMES.map(day => {
          let classname = 'Calendar-dayWeeks'
          if (day.weekend) {
            classname += ' Calendar-dayWeeks--weekend'
          }
          return (
            <div key={day.name} className={classname}>
              {day.name}
            </div>
          )
        })}
        {daysInMonth.map(dates => {
          const {day, date, month} = dates
          let classname = `Calendar-day Calendar-day--${month}`
          if (date === dateFull) {
            classname += ' is-selected'
          }
          return (
            <div
              key={date}
              className={classname}
              onClick={() => handleClickDay(date)}
            >
              {day}
            </div>
          )
        })}
      </div>
    </div>
  )
}

Calendar.propTypes = {
  /** Default date, format: dd/mm/yyyy  */
  date: PropTypes.string,
  /** Default month to display in calendar  */
  month: PropTypes.number,
  /** Default year to display in calendar  */
  year: PropTypes.number,
  /** Callback to return a selected date */
  onDateChange: PropTypes.func
}

export default Calendar
