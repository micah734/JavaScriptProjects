function Age_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are too young to vote" : "You are able to vote";
    document.getElementById("vote").innerHTML = Can_vote + " you must be 18.";
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_make = Make;
    this.Vehicle_model = Model;
    this.Vehicle_year = Year;
    this.Vehicle_color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_color + "-colored " + Erik.Vehicle_model + " manufactured in " + Erik.Vehicle_year;
}

function Class(School, Color, GPA, Year) {
    this.Class_school = School;
    this.Class_color = Color;
    this.Class_GPA = GPA;
    this.Class_year = Year;
}
var Megan = new Class("IUPUI", "Crimson and Gold", "3.97", "2013");
var Micah = new Class("MSU", "Maroon and White", 3.9, 2010);
var Ron = new Class("IWU", "Red and White", 4.0, 2014);
function Graduation() {
    document.getElementById("New_and_This").innerHTML = "Megan went to " + Megan.Class_school + " and graduated with a GPA: " + Megan.Class_GPA + " in the year: " + Megan.Class_year + ".";
}

function count_Function() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var StartingPoint = 12;
        function Plus_one() { StartingPoint += 1; }
        Plus_one();
        return StartingPoint;
    }
}