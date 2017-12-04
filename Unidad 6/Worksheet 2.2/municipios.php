<?php

$variable = $_GET['place'];

try {
    $mbd = new PDO('mysql:host=localhost:3306;dbname=postal', 'root', '1331Ap1331');
    $sth = $mbd->prepare('SELECT poblacion FROM poblacion JOIN provincia on provincia.provinciaid = poblacion.provinciaid WHERE provincia=:valor');
    $sth->bindParam(':valor', $variable);
    $sth->execute();
    $result = $sth->fetchAll();
    echo json_encode($result);
    $mbd = null;
} catch (PDOException $e) {
    print "¡Error!: " . $e->getMessage() . "<br/>";
    die();
}

?>
