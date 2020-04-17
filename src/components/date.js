import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

const ldjamTimeZone = "Etc/GMT-2"
const processDate = date =>  date instanceof Date ? date : new Date(date)
const dateTimeFormat = new Intl.DateTimeFormat("default", {
    timeZone: ldjamTimeZone,
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
})
TimeAgo.addLocale(en)
const timeAgo = new TimeAgo("en-US")

const format = (date) => dateTimeFormat.format(processDate(date))

const ago = date => timeAgo.format(
    new Date(
        processDate(date).toLocaleString("en-US", {timeZone: ldjamTimeZone})
    )
)

export default { format, ago }