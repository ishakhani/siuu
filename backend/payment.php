<?php
//tester si la methode de requete est'Post'//
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $phone = $_POST['tel'];
    $address = $_POST['address'];
    $card = $_POST['card'];

    // Recuperer les parametres de la requete
    $sneaker = $_POST['sneaker'];
    $price = $_POST['price'];
    $color = $_POST['color'];
    $size = $_POST['size'];

   // Paramètres de connexion à la base de données
    $host = 'localhost';
    $user = 'root';
    $password = '';
    $dbname = 'backend';
    
    // Creer une connection
    $conn = new mysqli($host, $user, $password, $dbname);

    // Verifier la  connection
    if ($conn->connect_error) {
        die("Connection failed: ". $conn->connect_error);
    }

    $sql = "INSERT INTO product (sneaker, price, color, size) VALUES ('$sneaker', '$price', '$color', '$size')";
    $stmt = $conn->prepare("INSERT INTO pay (nom, phone_number, adresse, card_number) VALUES (?,?,?,?)");
    $stmt->bind_param("ssss", $name, $phone, $address, $card);
    $stmt->execute();
        echo "Thanks for buying from us...";
        $stmt->close();
        $conn->close();
} else {
    echo "No data received";
}
