function clockTime () {
    var today = new Date()
    var hours = today.getHours()
    var minute = today.getMinutes()
    var second = today.getSeconds()
    var day = today.getDay()
    var year = today.getFullYear()
    var month = today.getMonth()
    var date = today.getDate()
    if (hours < 10) {
      hours = '0' + hours
    }
    if (minute < 10) {
      minute = '0' + minute
    }
    if (second < 10) {
      second = '0' + second
    }
    days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ]
    months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sept',
      'Oct',
      'Nov',
      'Dec'
    ]
    var result =
      days[day] +
      ' ' +
      date +
      '-' +
      months[month] +
      '-' +
      year +
      ' ' +
      hours +
      ':' +
      minute +
      ':' +
      second
    console.log(result)
    setTimeout(clockTime, 1000)
  }
  
  clockTime()