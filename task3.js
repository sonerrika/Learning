/* Task 3 */

sum_2 = parseInt(process.argv[2])+ parseInt (process.argv[3]);
var hour = 0;
var min = 0;
var ost = 0;
//перевод в часы

ost = sum_2%3600;
hour = (sum_2 - ost)/3600; 

if (hour == 1 || hour == 21){
	process.stdout.write(hour + " час ");
}
else if (hour>=2 && hour<=4 || hour>=22 && hour<=24){
	process.stdout.write(hour + " часа ");
}
else {
	process.stdout.write(hour + " часов ");
}

//перевод в минуты
var sum = ost%60;
min = (ost - sum)/60;


if (min == 1 || min == 21 || min == 31 || min == 41 || min == 51 ){
	process.stdout.write(min + " минута ");
}
else if (min>=2 && min<=4 || min>=22 && min<=24 || min>=32 && min<=34 || min>=42 && min<=44 ||
 min>=52 && min<=4){
	process.stdout.write(min + " минуты ");
}
else {
	process.stdout.write(min + " минут ");
}

//вывод секунд

if (sum == 1 || sum == 21 || sum == 31 || sum == 41 || sum == 51 ){
	process.stdout.write(sum + " секунда");
}
else if (sum>=2 && sum<=4 || sum>=22 && sum<=24 || sum>=32 && sum<=34 || sum>=42 && sum<=44 ||
 sum>=52 && sum<=4){
	process.stdout.write(sum + " секунды");
}
else {
	process.stdout.write(sum + " секунд");
}
