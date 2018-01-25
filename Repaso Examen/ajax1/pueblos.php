<?php

$variable = $_GET['place'];

if ($variable == 'granada') {
  echo '{
    "uno":"Peligros",
    "dos":"Gualchos",
    "tres":"Maracena"
  }';
} elseif ($variable == 'madrid') {
  echo '{
    "uno":"San Sebastián",
    "dos":"Morata",
    "tres":"Navalcarnero"
  }';
} elseif ($variable == 'almeria') {
  echo '{
    "uno":"Viator",
    "dos":"Huercal de Almería",
    "tres":"Pechina"
  }';
}

 ?>
