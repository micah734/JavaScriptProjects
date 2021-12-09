function myDictionary() {
    var Instrument = {
        "Name": "Trumpet",
        "Family": "Brass",
        "Key": "B-flat",
        "Ran": "G3",
        "Famous": "Louis Armstrong"
    };
    delete Instrument.Ran
    document.getElementById("Dictionary").innerHTML = Instrument.Ran;
}