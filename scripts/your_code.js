
var formula = "";   //empty string variable
var answer = null;

formula += "21";    //appends 21 to the end of the string
formula += "/";     //appends the divide symbol to the end of the string
formula += "3";     //appends 3 to the end of the string

Calculator.setDisplayValue(formula); // the display will now show "21/3"

answer = Calculator.calculate(formula); // the answer is now 7

Calculator.setDisplayValue(answer); // the display will now show "7"
Calculator.clearDisplay();

alert("test");