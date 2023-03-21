
//Funciones
function myFunction(p1, p2) {
    return p1 * p2;
    
  }

let x = myFunction(4, 3);   // Function is called, return value will end up in x
document.write(x);
document.write("<br></br>"+myFunction(4, 3))
function myFunction(a, b) {
 return a * b;             // Function returns the product of a and b
}

function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
  }

  document.getElementById("demo").innerHTML = "farahain "+toCelsius(77);

   //text area 
function textarea() {
    let txtarnom=document.getElementById("texanomb").value;
    return(txtarnom);
    }
    