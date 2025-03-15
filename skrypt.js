function kolejnyBlok(bloku, blokp) {
    document.getElementById(bloku).style.opacity = "0";
    document.getElementById(blokp).style.opacity = "1";
}

document.getElementById("kolejny1").addEventListener("click", function() {

    const imie = document.getElementById("imie").value;
    const nazwisko = document.getElementById("nazwisko").value;

    if(imie && nazwisko) {
        kolejnyBlok("blok1", "blok2");
    }

});

document.getElementById("kolejny2").addEventListener("click", function() {

    const email = document.getElementById("email").value;
    const telefon = document.getElementById("telefon").value;

    if(email && telefon) {
        kolejnyBlok("blok2", "blok3");
    }
});

document.getElementById("zatwierdz").addEventListener("click", function() {

    const haslo = document.getElementById("haslo").value;
    const powtorzoneHaslo = document.getElementById("powtorz-haslo").value;

    if(haslo != powtorzoneHaslo) {
        alert("Podane hasła różnią się");
    } else {
        console.log("Witaj", imie.value, nazwisko.value);
    }

});