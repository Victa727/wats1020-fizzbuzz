// Place your FizzBuzz code here.   


var i

// For each number, check the following:

// Count the number 1 though 20.
// Determine whether each number is divisible by 3, 5, or both.

for (i=1; i<=20; i++) 
    { 

  // Determine if number is divisible by both 3 and 5
       if ( i % 3 === 0 && i % 5 === 0 ) 
     // If both are true:  Print FizzBuzz 
        {
     	 document.write('FizzBuzz');
			 document.write("<br>");	
				}
       else if (i%3 ===0)
         // If number is only divisible by 3:  Print Fizz
       {
         document.write('Fizz');
				 document.write("<br>");
       }
   
     
  // Determin whether number is divisible by 5
        else if (i%5 === 0)
      {
// If yes: Print Buzz
          document.write('Buzz');
				  document.write("<br>");
      }  
 
// If number is not divisible by 3 or 5: Printer number
        else 
      {
        document.write(i);
				document.write("<br>");
      }
  
}  




