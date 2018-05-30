function happyHolidays () {
  return 'Happy holidays!';
}

function happyHolidaysTo (name) {
  return 'Happy holidays, ${name}!';
}

var name = "you";

happyHolidaysTo ("you");

function happyHolidayTo (holiday, name){
  return 'Happy ${holiday}, ${name}!';
}

function holidayCountdown (days, holiday){
  return 'It\'s is ${days} days until ${holiday}!';
}
