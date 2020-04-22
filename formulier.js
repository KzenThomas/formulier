//function controleergegevens() {
//  controleerVoornaam();
  //controleerAchternaam();
}//




    function controleerVoornaam() {
        console.log(function validateForm)
        var x = document.forms["form"]["voornaam"].value;
        if (x == "") {
            alert("voornaam moet ingevuld zijn");
            return false;
        }
    }

    function controleerAchternaam() {
        console.log(function validateForm)
        var x = document.forms["form"]["achternaam"].value;
        if (x == "") {
            alert("achternaam moet ingevuld zijn");
            return false;
        }
    }