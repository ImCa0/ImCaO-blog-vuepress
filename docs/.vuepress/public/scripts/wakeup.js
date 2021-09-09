var engine =
  document.cookie.replace(
    /(?:(?:^|.*;\s*)engine\s*\=\s*([^;]*).*$)|^.*$/,
    '$1'
  ) || '0'
console.log(engine)
if (engine != '1') {
  fetch('https://quan.suning.com/getSysTime.do')
    .then(function (response) {
      console.log(response)
      return response.json()
    })
    .then(function (date) {
      var hours = new Date(date.sysTime2).getHours()
      console.log(hours)
      if (hours > 7 && hours < 23) {
        fetch('https://comment.imcao.cn/')
        var exp = new Date(date.sysTime2)
        exp.setTime(exp.getTime() + 20 * 60 * 1000)
        console.log(exp)
        document.cookie = 'engine=1;path=/;expires=' + exp.toGMTString()
      }
    })
}
console.log(
  document.cookie.replace(/(?:(?:^|.*;\s*)engine\s*\=\s*([^;]*).*$)|^.*$/, '$1')
)
