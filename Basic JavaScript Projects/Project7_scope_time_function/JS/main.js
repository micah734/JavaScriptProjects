var Y = 43; //Global Variable
function add_numbers() {
    document.write(Y + 22 + "<br>");
}
function multiply_num() {
    document.write(Y * 2 + "<br>");
}

function local_v() {
    var z = 32;
    document.write(z + 34 + "<br>");
}

function messup() {
    var z = 42;
    document.write(z + 11);
}

function get_day() {
    if (new Date().getDate() < 25) {
        document.getElementById("getdate").innerHTML = "It's Not Christmas Yet!";
    }
}

if (34 > 11) {
    document.write("The left number is larger")
}

function Fav_Color() {
    favColor = getElementById("favColor").value;
    if (favColor == "Blue") {
        Color = "That is my Favorite Color!";
    }
    else {
        Color = "That is not my Favorite Color.";
    }
    document.getElementById("FavoriteColor").innerHTML = Color;
}