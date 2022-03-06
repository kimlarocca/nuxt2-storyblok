export default {
  methods: {
    formatDate (date) {
      // format date and time with javascript
      const d = new Date(date)
      // const month = `0${d.getMonth() + 1}`.slice(-2)
      // get month name
      const monthName = [
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
      ][d.getMonth()]
      // const month = `0${d.getMonth() + 1}`.slice(-2)
      const day = `0${d.getDate()}`.slice(-2)
      const year = d.getFullYear()
      // const hours = `0${d.getHours()}`.slice(-2)
      // const minutes = `0${d.getMinutes()}`.slice(-2)
      // return `${day}/${month}/${year} ${hours}:${minutes}`
      return `${monthName} ${day}, ${year}`
    }
  }
}
