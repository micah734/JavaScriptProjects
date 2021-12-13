function Call_Loop() {
    var Digit = "";
    var X = 10;
    while (X > -1) {
        Digit += "<br>" + X;
        X--;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

function TextLength() {
    var text = "This will tell you the length of this sentence.";
    var numberChar = text.length;
    document.getElementById("length").innerHTML = numberChar;
}

var Instruments = ["Sousaphone", "Guitar", "Piano", "Violin", "Trumpet", "Clarinet"];
var Content = "";
var P;
function for_Loop() {
    for (P = 0; P < Instruments.length; P++) {
        Content += Instruments[P] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() {
    var family_Names = [];
    family_Names[0] = "Mom";
    family_Names[1] = "Dad";
    family_Names[2] = "Baby";
    family_Names[3] = "Gerbal";
    document.getElementById("Array").innerHTML = "My name is Micah in March I  will be called " + family_Names[1] + ".";
}

function constant_function() {
    const Musicial_Instrument = { type: "Trumpet", brand: "Bach", Model: "Strad", color: "Silver" };
    Musicial_Instrument.price = "$1200";
    Musicial_Instrument.brand = "Yamaha"
    document.getElementById("Constant").innerHTML = "The Cost of the " + Musicial_Instrument.brand + " is " + Musicial_Instrument.price + " for " + Musicial_Instrument.color + ".";
}

function let_function() {
    let Y = 96;
    let X = 4;
    document.getElementById("Let").innerHTML = (Y + X);
}

function return_Function() {
    return Math.PI;
}
document.getElementById("Return").innerHTML = return_Function();


let TV = {
    make: "LG",
    model: "Flat-Screen",
    size: "75 inch",
    display: "QLED",
    manufactured: "2020",
    discription: function () {
        return "The television is " + this.make + " , " + this.size + " , " + this.display + " for $500!";
    }
};
document.getElementById("TV").innerHTML = TV.discription();

let text = "";
for (let q = 0; q < 10; q++) {
    if (q === 5) { break; }
    text += "The number is " + q + "<br>";
}
document.getElementById("Break").innerHTML = text;

let Nm = "";
for (let v = 0; v < 12; v++) {
    if (v === 7) { continue; }
    Nm += "Number " + v + "<br>";
}
document.getElementById("Continue").innerHTML = Nm;