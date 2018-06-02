/*Task 1. Palindrome*/

var sum_1 ="";
var sum_2 ="";
var punctRE = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]/g;
var spaceRE = /\s/g;
var str = process.argv[2];

//Приведение строки к упрощенному виду: один регистр, без пробелов и знаков препинания
str = str.toUpperCase();
str = str.replace(punctRE, '').replace(spaceRE,'');

// Перевод строки в прямую последовательность ASCII 
 for (i = 0; i < str.length; i++){
	 
	var sum_1 = sum_1 + str.charCodeAt(i);
	
 }

 // Перевод строки в обратную последовательность ASCII  
 for (i = 1; i <=str.length; i++){
	 
	var sum_2 = sum_2 + str.charCodeAt(str.length-i);
	
 }

// сравнение полученных строк и вывод результата

if (sum_1==sum_2){
	process.stdout.write("true");
}
else {
	process.stdout.write("fasle");
}