import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import _ from 'lodash'

const ldjamTimeZone = 'Etc/GMT-2'
const processDate = date => date instanceof Date ? date : new Date(date)
const dateTimeFormat = new Intl.DateTimeFormat('default', {
  timeZone: ldjamTimeZone,
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
})
TimeAgo.addLocale(en)
const timeAgo = new TimeAgo('en-US')

const format = (date) => dateTimeFormat.format(processDate(date))

const ago = date => timeAgo.format(
  new Date(
    processDate(date).toLocaleString('en-US', { timeZone: ldjamTimeZone })
  )
)

const eventDates = {
  LudumDare: {
    18: '2010-08-23', 19: '2010-12-20', 20: '2011-05-02', 21: '2011-08-22',
    22: '2011-12-19', 23: '2012-04-23', 24: '2012-08-27', 25: '2012-12-17',
    26: '2013-04-29', 27: '2013-08-26', 28: '2013-12-16', 29: '2014-04-28',
    30: '2014-08-25', 31: '2014-12-08', 32: '2015-04-20', 33: '2015-08-24',
    34: '2015-12-14', 35: '2016-04-18', 36: '2016-08-29'
  },
  MiniLD: {
    40: '2013-02-29', 41: '2013-03-31', 42: '2013-05-31', 43: '2013-06-30',
    44: '2013-07-31', 45: '2013-09-30', 46: '2013-11-30', 47: '2013-12-01',
    48: '2014-01-31', 49: '2014-02-28', 50: '2014-03-31', 51: '2014-05-31',
    52: '2014-06-30', 53: '2014-07-31', 54: '2014-09-30', 55: '2014-11-30',
    56: '2015-01-31', 57: '2015-02-28', 58: '2015-03-31', 59: '2015-05-31',
    60: '2015-06-30', 61: '2015-07-31', 62: '2015-09-30', 63: '2015-11-30',
    64: '2016-01-31', 65: '2016-02-29', 66: '2016-03-31', 67: '2016-05-31',
    68: '2016-06-30', 69: '2016-07-31', 70: '2016-09-30', 71: '2017-01-31',
    72: '2017-02-28', 73: '2017-03-31', 74: '2017-07-31'
  }
}

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
]

const parseAlakajamDate = (timestamp) => {
  const dateSplit = timestamp.split(" ")
  let day = dateSplit[dateSplit.length - 3].trim()
  if (day.includes("-")) {
    day = day.split("-")[1].trim()
  }
  let monthName = dateSplit[dateSplit.length - 2].trim()
  if (monthName === 'Nov.') {
    monthName = "November"
  }
  const month = monthNames.indexOf(monthName) + 1
  const year = dateSplit[dateSplit.length - 1].trim()
  return new Date(`${year}-${month}-${day}`)
}

const getLudumDareEventDate = (eventName, eventNumber) => {
  const eventDate = _.get(eventDates, `${eventName}.${eventNumber}`, false)
  if (eventDate) {
    return processDate(eventDate)
  }
  return null
}

export default { format, ago, getLudumDareEventDate, parseAlakajamDate }
export { format, ago, getLudumDareEventDate, parseAlakajamDate }
