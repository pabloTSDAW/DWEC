/*4. The Temperature Converter
It's hot out! Let's make a converter, and again you'll have to search the internet how to do it.

Store a celsius temperature into a variable.
Convert it to fahrenheit and output "NN°C is NN°F".
Now store a fahrenheit temperature into a variable.
Convert it to celsius and output "NN°F is NN°C."*/

var celsius = 33;
var farenheit = 15;

console.log(celsius + " grados celsius son " + ((9/5)*celsius + 32) + " grados farenheit.");

console.log(farenheit + " grados farenheit son " + ((farenheit - 32)*5/9).toFixed(2) + " grados celsius."); // .toFixed(2) para redondear con dos decimales

