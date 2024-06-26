<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/PHPMailer-master/src/Exception.php';
require 'PHPMailer/PHPMailer-master/src/PHPMailer.php';
require 'PHPMailer/PHPMailer-master/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstName = $_POST['firstName'];
    $email = $_POST['email'];
    $description = $_POST['description'];

    $mail = new PHPMailer(true);
    try {
        //Server settings
        $mail->isSMTP();
        $mail->Host       = 'smtp.hostinger.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'kontakt@emarika.pl';
        $mail->Password   = 'TworzenieZPasja2024!';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587;
        $mail->CharSet    = 'UTF-8';

        //Recipients
        $mail->setFrom('kontakt@emarika.pl', 'eMarika');
        $mail->addAddress('emarikapl@gmail.com');

       // Content
        $mail->isHTML(true);
        $mail->Subject = 'NOWE ZLECENIE OD KLIENTA';
        $mail->Body    = "
        <h2>Nowe zlecenie od klienta</h2>
        <p><strong>Imię i Nazwisko:</strong> $firstName</p>
        <p><strong>Email:</strong> $email</p>
        <hr>
        <h3>Opis:</h3>
        <p>$description</p>

        $mail->AltBody = "
            Imię i Nazwisko: $firstName\n
            Email: $email\n

     $mail->send();

        $autoReply = new PHPMailer(true);
        $autoReply->isSMTP();
        $autoReply->Host       = 'smtp.hostinger.com'; // Użyj serwera SMTP dostarczonego przez Hostinger
        $autoReply->SMTPAuth   = true;
        $autoReply->Username   = 'kontakt@emarika.pl'; // SMTP username
        $autoReply->Password   = 'TworzenieZPasja2024!'; // SMTP password
        $autoReply->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $autoReply->Port       = 587; // Użyj odpowiedniego portu SMTP dostarczonego przez Hostinger
        $autoReply->CharSet    = 'UTF-8';

        $autoReply->setFrom('kontakt@emarika.pl', 'Zespół Emarika');
        $autoReply->addAddress($email); // Odbiorca to adres e-mail, który został podany w formularzu

        $autoReply->isHTML(true);
        $autoReply->Subject = 'Dziękujemy za przesłanie formularza';
        $autoReply->Body    = "
        <h2>Dziękujemy za przesłanie formularza</h2>
        <p>Drogi $firstName,</p>
        <p>Dziękujemy za kontakt z nami. Otrzymaliśmy Twoje zgłoszenie i wkrótce się z Tobą skontaktujemy.</p>
        <p>Pozdrawiamy,<br>Zespół Emarika</p>";
        $autoReply->AltBody = "Drogi $firstName,\n\nDziękujemy za kontakt z nami. Otrzymaliśmy Twoje zgłoszenie i wkrótce się z Tobą skontaktujemy.\n\nPozdrawiamy,\nZespół Emarika";

        $autoReply->send();
        
        echo 'Email sent successfully';
    } catch (Exception $e) {
        echo "Failed to send email. Mailer Error: {$mail->ErrorInfo}";
    }
}
?>
