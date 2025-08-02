<?php

header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Pobierz dane z formularza
    $name = htmlspecialchars($_POST["name"]);
    $email = filter_var($_POST["email"], FILTER_VALIDATE_EMAIL);
    $message = htmlspecialchars($_POST["message"]);
    $rodo = isset($_POST["rodo"]) ? "Tak" : "Nie";

    // Walidacja danych
    if (!$name || !$email || !$message) {
        echo json_encode(["status" => "error", "message" => "Wszystkie pola są wymagane."]);
        exit;
    }

    // Obsługa przesłanego pliku CV
    if (isset($_FILES["cv"]) && $_FILES["cv"]["error"] === UPLOAD_ERR_OK) {
        $cvFile = $_FILES["cv"];
        $cvPath = $cvFile["tmp_name"];
        $cvName = $cvFile["name"];
    } else {
        echo json_encode(["status" => "error", "message" => "Błąd przesyłania pliku CV."]);
        exit;
    }

    // Konfiguracja e-maila
    $to = "koziol.natalia03@gmail.com"; // Adres odbiorcy
    $subject = "Nowa aplikacja od $name";
    $headers = "From: $email\r\n";
    $headers .= "Content-Type: multipart/mixed; boundary=\"boundary\"\r\n";

    // Treść wiadomości
    $body = "--boundary\r\n";
    $body .= "Content-Type: text/plain; charset=UTF-8\r\n\r\n";
    $body .= "Imię i nazwisko: $name\n";
    $body .= "E-mail: $email\n";
    $body .= "Wiadomość: $message\n";
    $body .= "RODO: $rodo\n";

    // Dodaj załącznik
    $fileContent = chunk_split(base64_encode(file_get_contents($cvPath)));
    $body .= "--boundary\r\n";
    $body .= "Content-Type: application/octet-stream; name=\"$cvName\"\r\n";
    $body .= "Content-Disposition: attachment; filename=\"$cvName\"\r\n";
    $body .= "Content-Transfer-Encoding: base64\r\n\r\n";
    $body .= $fileContent . "\r\n";
    $body .= "--boundary--";

    // Wyślij e-mail
    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(["status" => "success", "message" => "Aplikacja została wysłana pomyślnie!"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Wystąpił błąd podczas wysyłania aplikacji."]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Nieprawidłowa metoda żądania."]);
}
