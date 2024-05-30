<?php
$host = 'dummy.cwkuucszsskj.us-east-1.rds.amazonaws.com';
$dbname = 'employees';
$username = 'dummyuser';
$password = 'dummypassword';

try {
  $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
  echo "Conexión exitosa a la base de datos MySQL\n";
} catch (PDOException $e) {
  echo "Error al conectar a la base de datos: " . $e->getMessage();
}

$query = $conn->query("SELECT * FROM employees LIMIT 5");
$rows = $query->fetchAll(PDO::FETCH_ASSOC);
print_r($rows);

$conn = null;
