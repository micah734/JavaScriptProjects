var Y = 43; //Global Variable
function add_numbers() {
    document.getElementById("add_numbers").innerHTML = (Y + 22 + "<br>");
}
function multiply_num() {
    document.getElementById("multiply").innerHTML = (Y * 2 + "<br>");
}

function local_v() {
    var z = 32;
    document.getElementById("local_v").innerHTML = (z + 34 + "<br>");
}

function messup() { //messed up on purpose
    console.log("messup").innerHTML = (z + 11);
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
    favColor = document.getElementById("favColor").value;
    if (favColor == "Blue") {
        Color = "That is my Favorite Color!";
    }
    else {
        Color = "That is not my Favorite Color.";
    }
    document.getElementById("FavoriteColor").innerHTML = Color;
}

function Time_Function() {   //Time Function 
    var time = new Date().getHours();
    var Reply;
    if (time < 12 == time > 0) {
        Reply = "It's morning time";
    }
    else if (time >= 12 == time < 18) {
        Reply = "It's afternoon";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_Day").innerHTML = Reply;
}