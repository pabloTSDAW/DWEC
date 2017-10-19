/*3. The Geometrizer
Calculate properties of a circle, searching the internet for definitions if not remember.

Store a radius into a variable.
Calculate the circumference based on the radius, and output "The circumference is NN".
Calculate the area based on the radius, and output "The area is NN".*/

var pi = Math.PI;
var r = 5;

console.log("El perimetro de la circunferencia es: " + (2*pi*r).toFixed(2)); // .toFixed(2) para redondear con dos decimales

console.log("El área de la circunferencia es: " + (pi*(r**2)).toFixed(2));