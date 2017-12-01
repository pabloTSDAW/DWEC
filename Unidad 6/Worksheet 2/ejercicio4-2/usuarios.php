<?php
$variable = $_GET['user'];

$nombre = [];

if (($variable == 'Pablo') || ($variable == 'Fran') || ($variable == 'Jesus')) {
  for ($i=0; $i < 3 ; $i++) {
    $opcion = rand(1, 100);
    array_push($nombre, $variable.$opcion);
  }
  echo '{
	       "validar": "si",
         "nombre": '.json_encode(array_values($nombre)).'
       }';

} else {
  echo '{
      	"validar": "no"
      }';
}

?>
