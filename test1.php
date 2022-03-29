<?php

function is_palindrome($input) {
    //solve this method that says if the sentence is palindrome or not
    if (strlen($cadena)<2) {
        return false;
    }
    $cadena=strtolower(str_replace([" ", ",", "."], "", $cadena));
    for ($i=0;$i<strlen($cadena);$i++){
        if($cadena[$i] != $cadena[strlen($cadena)-$i-1]){
            return false;
        }
    }
    return true;//if don´t enter in other returns is because is a palindrome
}

$input = "Allí por la tropa portado, traído a ese paraje de maniobras, una tipa como capitán usar boina me dejara, pese a odiar toda tropa por tal ropilla";
var_dump(is_palindrome($input));