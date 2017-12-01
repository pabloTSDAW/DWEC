<?php

$variable = $_GET['user'];

if (($variable == 'Pablo') || ($variable == 'Fran') || ($variable == 'Jesus')) {
  echo '{
	       "validar": "si"
       }';
} else {
  echo '{
      	"validar": "no"
      }';
}

?>
