function myDictionary() {
    var Instrument = {
        Name="Trumpet",
        Family="Brass",
        Key="B-flat",
        Ran="G3-C5",
        Famous="Louis Armstrong"
    };
    document.getElementById("Dictionary").innerHTML = Instrument.Family;
}