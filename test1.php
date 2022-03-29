<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

function is_palindrome($input) {
    //solve this method that says if the sentence is palindrome or not
    $input = strtolower(str_replace([" ", ",", "."], "", $input));
    $input = str_replace(["á", "é", "í", "ó", "ú"],["a", "e", "i", "o", "u"], $input );
    $invert = strrev($input);
    if($input == $invert){
        return true;
    }else{
        return false;
    }
}
//for test one
// $input = "Allí por la tropa portado, traído a ese paraje de maniobras, una tipa como capitán usar boina me dejara, pese a odiar toda tropa por tal ropilla";
// var_dump(is_palindrome($input));

//for http request
$_POST = json_decode(file_get_contents('php://input'), true);
var_dump(is_palindrome($_POST['input']));


