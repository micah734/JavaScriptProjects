function addition() {
    var addition = 12 + 14;
    document.getElementById("Math").innerHTML = "12+14=" + addition;
}

function subtraction() {
    var subtraction = 34 - 12;
    document.getElementById("subtract").innerHTML = "34-12=" + subtraction;
}

function multiplication() {
    var multiplication = 9 * 64;
    document.getElementById("multiply").innerHTML = "9 x 64=" + multiplication;
}

function division() {
    var division = 64 / 4;
    document.getElementById("division").innerHTML = "64/4=" + division;
}

function simple_Math() {
    var math = (2 + 12) * 22 / 2 - 5;
    document.getElementById("simple_Math").innerHTML = "(2+12)*22/2-5=" + math;
}

function modulus_Operator() {
    var Remainder = 86 % 7;
    document.getElementById("Math_Remainder").innerHTML = "What is the remainder of 86 divided by 7?" + Remainder;
}

function negation_Operator() {
    var x = 34;
    document.getElementById("negation").innerHTML = -x;
}

var y = 12;
y++;
document.write("Increment of 12 is " + y)

var z = 34;
z--;
document.write("  Decrement of 34 is " + z)

window.alert(Math.random() * 100);

document.getElementById("PI").innerHTML = Math.PI; //built in Math feature

document.getElementById("max").innerHTML = Math.max(11, 24, 54, 345, 234, 123123); //another built in math feature