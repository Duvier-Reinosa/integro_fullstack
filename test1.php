<?php

function is_palindrome($input) {
    //solve this method that says if the sentence is palindrome or not
    $input=strtolower(str_replace([" ", ",", "."], "", $input));
    $invert = strrev($input);
    if($input == $invert){
        return true;
    }else{
        return false;
    }
}

$input = "Allí por la tropa portado, traído a ese paraje de maniobras, una tipa como capitán usar boina me dejara, pese a odiar toda tropa por tal ropilla";
var_dump(is_palindrome($input));