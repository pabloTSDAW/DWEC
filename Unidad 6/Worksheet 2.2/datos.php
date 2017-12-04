<?php

try {
    $mbd = new PDO('mysql:host=localhost:3306;dbname=postal', 'root', '1331Ap1331');
    $sth = $mbd->prepare('SELECT provincia FROM provincia');
    $sth->execute();
    $result = $sth->fetchAll();
    echo json_encode($result);
    $mbd = null;
} catch (PDOException $e) {
    print "¡Error!: " . $e->getMessage() . "<br/>";
    die();
}
?>
