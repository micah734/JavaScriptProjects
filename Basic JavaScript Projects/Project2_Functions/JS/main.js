function myFunction() {
    var str = "This text is blue"; //This shows up the text
    var result = str.fontcolor("blue"); //This  makes the above text blue
    document.getElementById("Blue_Text").innerHTML = result;
}

function myFunction2() {
    var sentence = "I am learning";
    sentence += " a lot from this book!"; //This adds the following sentence with this sentence
    document.getElementById("Concatenate").innerHTML = sentence;
}

function myMultiplication(a, b) {
    var x = a * b
    document.getElementById("demo").innerHTML;
    document.write("Answer=", x);
}


function changeText() {
    document.getElementById("rewrite").innerHTML = "Hello, World"
}