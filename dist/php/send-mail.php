<?php

class SendMail
{
    function __construct() {
        $_POST = json_decode(file_get_contents("php://input"), true);
    }
    
    public function response ($output) 
    {
        if ($output === true) 
        {
            exit(json_encode(true));
        } 
        else 
        {
            exit(json_encode(false));
        } 
    }
    
    public function sendMail($company, $name, $email, $number) 
    {
        $to = "info@vte2021.com";
        
        $subject = "VTE 2021 REGISTRATION";
        
        $headers = "From: VTE <vte2021.com>\r\n";
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-type: text/html; charset=utf-8\r\n";
        
        $message = "Company name: ". $company ."<br>";
        $message .= "Contact person: ". $name ."<br>";
        $message .= "E-mail: ". $email ."<br>";
        $message .= "Mobile phone: ". $number ."<br>";

        $send = mail($to, $subject, $message, $headers);

        if ($send === true) 
        {
            $GLOBALS['email_send'] = true;
        } 
        else 
        {
            $GLOBALS['email_send'] = false;
        }
    }
}


$sendMail = new SendMail();
$sendMail->sendMail(
    $_POST['companyName'], 
    $_POST['contactPerson'], 
    $_POST['email'], 
    $_POST['Phone']
);
$sendMail->response($GLOBALS['email_send']);