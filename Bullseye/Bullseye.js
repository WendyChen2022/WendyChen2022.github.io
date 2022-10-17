var table = prompt("Please enter your number(0-10)", "0-10");             // Unit of table
var operator = 'multiplication'; // Type of calculation
var i = 1;                 // Set counter to 1
var msg ='<h2>Multiplication Table</h2>';              // Message

// if (operator === 'addition') {
//   // Do addition
//   while (i < 11) {
//     msg += i + ' + ' + table + ' = ' + (i + table) + '<br />';
//     i++;
//   }
// } else {
  // Do multiplication
  if(table>=0&&table<=10){
while (i < 11) {
    msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
    i++;
  }
// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;
  
  }else{
    document.getElementById('blackboard').innerHTML = 'Your number is not correct!';
  }
  