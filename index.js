
function happyHolidays () {
  return 'Happy holidays!';
}

var name = "you"
function happyHolidaysTo (name) {
  return 'Happy holidays, ${name}!';
}

var holiday = "Indenpendence Day"
function happyHolidayTo (holiday, name){
  return 'Happy ${holiday}, ${name}!';
}

var days = 20
var holiday = "Mother\'s Day"
function holidayCountdown (days, holiday){
  return 'It\'s is ${days} days until ${holiday}!';
}

happyHolidays ()
happyHolidaysTo (name)
happyHolidayTo (holiday, name)
holidayCountdown (days, holiday)
