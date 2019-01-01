
var ones = [ 
  "", "one ", "two ", "three ", "four ",  "five ", "six ", "seven ", "eight ",  
  "nine ", "ten ", "eleven ", "twelve ", "thirteen ", "fourteen ", "fifteen ", 
  "sixteen ", "seventeen ", "eighteen ", "nineteen "
]

var tens = [ "", "", "twenty ", "thirty ", "forty ", "fifty ", "sixty ", "seventy ", "eighty ", "ninety " ]

function convertNumberToWords(num){
  var convertedWords = "";
  convertedWords += numToWords((num/10000000), "crore ");
  convertedWords += numToWords(((num/100000) % 100), "lakh ");
  convertedWords += numToWords(((num/1000) % 100), "thousand ");
  convertedWords += numToWords(((num/100) % 10), "hundred ");

  if(num > 100 && num % 100){
    convertedWords += "and ";
  }

  convertedWords += numToWords((num % 100), "");

  return convertedWords;

}

function numToWords(num, places){
  var currentPlacesText = "";
  
  num = parseInt(num);

  if(num > 19){
    currentPlacesText = tens[parseInt(num/10)] + ones[num % 10];
  }else{
    currentPlacesText  = ones[parseInt(num)];
  }

  if(num){
    currentPlacesText +=places;
  }

  return currentPlacesText;
}

module.exports.convertNumberToWords = convertNumberToWords;