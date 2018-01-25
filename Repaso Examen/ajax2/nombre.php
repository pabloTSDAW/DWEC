<?php
$variable = $_GET['nombre'];
$lista = ['pepe','jose','carlos'];

if (in_array($variable, $lista)) {
  echo 'Username already taken';
} elseif(strlen($variable) < 3) {
    echo 'Username too short';
} else {
  echo 'Username ok!';
}

?>
