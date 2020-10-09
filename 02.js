/*

Skriv en funktion som tar en sträng som parameter, gör om alla tecken som inte är a-z (stora eller små) till HTML-entiteter och returnerar resultatet.

Läs mer om HTML-entiteter här: https://dev.w3.org/html5/html-author/charref

Din funktion måste byta ut alla "osäkra" tecken mot "säkra". De tecken ni behöver byta ut är:
<
>
å
ä
ö
'

Alla tecken som inte är a-z eller någon av ovanstående (t ex kommatecken, punkter, bindestreck osv) ska tas bort.

*/

function safe_string(string) {
    let regex = /[<|>|å|ä|ö|,|']/g;
    let safeString = string.replace(regex, function(match) {
        if (match === "<") {
            return "&lt;";
        } else if (match === ">") {
            return "&gt;"
        } else if (match === "å") {
            return "&aring;";
        } else if (match === "ä") {
            return "&auml;";
        } else if (match === "ö") {
            return "&ouml;";
        } else if (match === ",") {
            return "";
        } else {
            return "&apos;";
        }
    });
    return safeString;
}

console.log( safe_string( "<h1>Sjörövare, O'hoj</h1>" ) ); // Expected output: &lt;h1&gt;Sj&ouml;r&ouml;vare O&apos;hoj&lt;/h1&gt;
                                                                             //&lt;h1&gt;Sj&ouml;r&ouml;vare O&apos;hoj&lt;/h1&gt;
