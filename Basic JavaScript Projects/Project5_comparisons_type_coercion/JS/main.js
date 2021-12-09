
document.write("five" + 10, "<br>");

document.write(32 > 12, "<br>");

document.write(32 < 12, "<br>");

console.log(12 + 12);

console.log(13 < 11);

function my_Function() {
    document.getElementById("Test").innerHTML = 0 / 0;
}

function NoNumber() {
    document.getElementById("Demo").innerHTML = isNaN("This is a string");
}

function NoNaN() {
    document.getElementById("isNaN").innerHTML = isNaN(900);
}

function Inf() {
    document.getElementById("Infinity").innerHTML = (2E310);
}

function NoInf() {
    document.getElementById("NegInf").innerHTML = (-3E310);
}


document.write(12 == 12, "<br>");
document.write(11 == 34, "<br>");

document.write(12 === 12, "<br>");

document.write(12 === "13", "<br>");
document.write(13 === "13", "<br>");
document.write(32 === 'Thirty-Nine', "<br>");
document.write(5 > 2 && 10 > 4, "<br>");
document.write(11 < 4 && 32 > 5, "<br>");
document.write(6 > 10 || 11 > 3, "<br>");
document.write(6 < 3 || 5 < 1, "<br>");

function not_Function() {
    document.getElementById("Not").innerHTML = !(5 > 10);
}
function yes_Function() {
    document.getElementById("Yes").innerHTML = !(20 > 10);
}
