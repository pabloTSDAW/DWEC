<?php
$variable = $_GET['place'];

try {
    $mbd = new PDO('mysql:host=localhost:3306;dbname=postal', 'root', '1331Ap1331');
    $sth = $mbd->prepare('SELECT poblacion.lat, poblacion.lon, codigopostal.codigopostalid FROM poblacion JOIN codigopostal ON poblacion.poblacionid=codigopostal.poblacionid AND poblacion.provinciaid=codigopostal.provinciaid WHERE poblacion.poblacion=:valor');
    $sth->bindParam(':valor', $variable);
    $sth->execute();
    $result = $sth->fetchAll();
    echo json_encode($result);
        // echo '{
        //        "lat": '.$fila[0].',
        //        "lon": '.$fila[1].'
        //      }';
    $mbd = null;
} catch (PDOException $e) {
    print "¡Error!: " . $e->getMessage() . "<br/>";
    die();
}
?>
