/* Task 2 */

// массив месяцев и вычисление номера месяца
var months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля',
              'августа', 'сентября', 'октября', 'ноября', 'декабря'];

var month = months.lastIndexOf (process.argv[3]);

//нахождение разницы между двумя датами
var newyear = new Date (2019,0,1);
var userdata = new Date (process.argv[4],month,process.argv[2]);
var timeDiff = newyear - userdata;

//перевод миллисекунд в дни
var days = timeDiff/86400000;
process.stdout.write(days);