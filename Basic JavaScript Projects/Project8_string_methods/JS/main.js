function full_Sentence() {
    var part_1 = "I am";
    var part_2 = " a master";
    var part_3 = " at writing";
    var part_4 = " really bad";
    var part_5 = " sentences!";
    var whole_sentence = part_1.concat(part_2, part_3, part_4, part_5);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_method() { //slice sentences
    var Sentence = "There are fourteen days until Christmas!";
    var section = Sentence.slice(10, 18);
    document.getElementById("slice").innerHTML = section;
}

function To_Uppercase() {//Changing to uppercase
    var Word = "elephant";
    var UP = Word.toUpperCase();
    document.getElementById("Uppercase").innerHTML = UP;
}

function Search_Function() { //search function
    var Text = "Mr. Gooden has a Blue Bungalow on the Beach.";
    var find = Text.search("Bungalow");
    document.getElementById("Search").innerHTML = find;
}

function Number_Function() {
    var X = 921;
    document.getElementById("number_to_string").innerHTML = X.toString();
}

function Precision_Function() {
    var Z = 1234.93482587123498712309418;
    document.getElementById("precision").innerHTML = Z.toPrecision(8);
}

function fixed_function() {
    var O = 123.9586769849039;
    document.getElementById("fixed").innerHTML = O.toFixed(2);
}

function value_string() {
    let text = "This is a sentence.";
    var result = text.valueOf();
    document.getElementById("value_of").innerHTML = result

}