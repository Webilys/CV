<?php
$array = [
    "firstname" => "",
    "name" => "",
    "email" => "",
    "telephone" => "",
    "message" => "",
    "firstnameError" => "",
    "nameError" => "",
    "emailError" => "",
    "telephoneError" => "",
    "messageError" => "",
    "isSucces" => false
];

$emailTo = "contact@webilys.fr"; // Email de réception

if ($_SERVER['REQUEST_METHOD'] == "POST") {
    $array["firstname"] = verifyInput($_POST['firstname']);
    $array["name"] = verifyInput($_POST['name']);
    $array["email"] = verifyInput($_POST['email']);
    $array["telephone"] = verifyInput($_POST['telephone']);
    $array["message"] = verifyInput($_POST['message']);
    $array["isSucces"] = true;
    $emailText = "";

    if (empty($array["firstname"])) {
        $array["firstnameError"] = "Veuillez entrer votre prénom";
        $array["isSucces"] = false;
    } else {
        $emailText .= "Prénom : {$array["firstname"]}\n";
    }

    if (empty($array["name"])) {
        $array["nameError"] = "Veuillez entrer votre nom";
        $array["isSucces"] = false;
    } else {
        $emailText .= "Nom : {$array["name"]}\n";
    }

    if (!isEmail($array["email"])) {
        $array["emailError"] = "Veuillez entrer une adresse email valide";
        $array["isSucces"] = false;
    } else {
        $emailText .= "Email : {$array["email"]}\n";
    }

    if (!isPhone($array["telephone"])) {
        $array["telephoneError"] = "Veuillez entrer un numéro de téléphone valide";
        $array["isSucces"] = false;
    } else {
        $emailText .= "Tel. : {$array["telephone"]}\n";
    }

    if (empty($array["message"])) {
        $array["messageError"] = "Veuillez saisir votre message";
        $array["isSucces"] = false;
    } else {
        $emailText .= "Message :\n{$array["message"]}\n";
    }

    if ($array["isSucces"]) {
        // Utilisation d'une adresse email du même domaine pour éviter le blocage
        $fromEmail = "contact@webilys.fr"; // Remplace par une adresse email réelle du serveur
        $headers = "From: Webilys <" . $fromEmail . ">\r\n";
        $headers .= "Reply-To: {$array["email"]}\r\n";
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

        mail($emailTo, "Nouveau message de contact", $emailText, $headers);
    }

    echo json_encode($array);
}

// Fonctions de validation
function isPhone($var)
{
    return preg_match("/^[0-9 .]*$/", $var);
}

function isEmail($var)
{
    return filter_var($var, FILTER_VALIDATE_EMAIL);
}

function verifyInput($var)
{
    $var = trim($var);
    $var = stripslashes($var);
    $var = htmlspecialchars($var);
    return $var;
}
?>