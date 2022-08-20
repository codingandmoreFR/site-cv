var heuresDiv = document.querySelector(".heures");
var dateDiv = document.querySelector(".date");

var affichageHeure = function(){
    var ajd, année, listeMois, mois, listeJours, jourNumero, jourNom, heures, minutes, secondes, deuxChiffres;

    ajd = new Date();

    année = ajd.getFullYear();

    listeMois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Decembre"];
    mois = listeMois[ajd.getMonth()];

    jourNumero = ajd.getDate();
    listeJours = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    jourNom = listeJours[ajd.getDay()];

    deuxChiffres = function(i){
        if(i < 10){
            return i = "0" + i;
        }else{
            return i;
        }
    }

    heures = deuxChiffres(ajd.getHours());

    minutes = deuxChiffres(ajd.getMinutes());

    secondes = deuxChiffres(ajd.getSeconds());

    heuresDiv.textContent = heures + ":" + minutes + ":" + secondes;
    dateDiv.textContent = jourNom + " " + jourNumero + " " + mois + " " + année;

    setTimeout(affichageHeure, 1000)
}

affichageHeure();