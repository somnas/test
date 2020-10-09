/*

Gör en funktion som tar emot en fras som parameter och returnerar true (boolskt, inte sträng eller annat) om strängen är ett palindrom eller false om den inte är det.

https://sv.wikipedia.org/wiki/Palindrom

https://medium.com/better-programming/5-ways-to-reverse-a-string-in-javascript-466f62845827

Lägg märke till att ni måste hantera mellanslag. "Ni talar bra latin" är t ex ett palindrom. Ni behöver bara hantera små bokstäver.

*/

function is_palindrome(string) {
    //ta bort mellanslag
    let rem_spaces = string.replace(/ /g, "");

    //skapa tom array
    let reversed_array = []; 
    const length = rem_spaces.length - 1;

    //loopa bakifrån
    for(let i = length; i >= 0; i--) { 
        reversed_array.push(rem_spaces[i]); 
    }
    
    //skapa ny sträng av array
    let new_string = reversed_array.join("");

    if(rem_spaces === new_string ) {
        return true;
    }
    
}

let test_string = 'sirap i paris';

 is_palindrome(test_string);
if ( is_palindrome( test_string ) ) {
    console.log( test_string + " is a palindrome" );
} else {
    console.log( test_string + " is NOT a palindrome" );
}  
