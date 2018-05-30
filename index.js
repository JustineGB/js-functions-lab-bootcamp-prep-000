var index = require("../index-test.js")

function happyHolidays () {
  return 'Happy holidays!';
}

function happyHolidaysTo (name) {
  return 'Happy holidays, ${name}!';
}

function happyHolidayTo (holiday, name){
  return 'Happy ${holiday}, ${name}!';
}

function holidayCountdown (days, holiday){
  return 'It\'s is ${days} days until ${holiday}!';
}
