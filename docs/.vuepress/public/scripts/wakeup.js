var engine =
  document.cookie.replace(
    /(?:(?:^|.*;\s*)engine\s*\=\s*([^;]*).*$)|^.*$/,
    '$1'
  ) || '0'
if (engine != '1') {
  fetch('https://comment.imcao.cn/')
  var exp = new Date()
  exp.setTime(exp.getTime() + 20 * 60 * 1000)
  document.cookie = 'engine=1;path=/;expires=' + exp.toGMTString()
}
