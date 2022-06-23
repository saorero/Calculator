
const operator=prompt('Enter operator to perform the calculation ( either +, -, * , / or %):');
const a = parseFloat(prompt ('First number: '));  
const b = parseFloat(prompt ('Second number: ')); 

let answer;  
  

if (operator == '+') { 
    answer = a + b;  
}  
else if (operator == '-') {
    answer = a - b;  
}  
else if (operator == '*') { 
    answer = a * b;  
}  
else if(operator == '/') {  
    answer = a / b; 
}  
else {
  answer= a % b ;
}
  

  

window.alert('ANSWER: ' +answer);