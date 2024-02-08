let filmvalg;
let antall;
let fornavn;
let etternavn;
let telefonnr;
let epost;
let ticketarr = [];

const fnavnErr = document.querySelector(".fornavnRad:nth-child(3)");
fnavnErr.innerHTML = "test";


function validateInput() {
    errorlist = []
    if(filmvalg === "") errorlist.push("valg");
    if(!antall.isInteger()) errorlist.push("antall");
    if(fornavn === "") errorlist.push("fornavn");
    if(etternavn === "") errorlist.push("etternavn");
    if(telefonnr.toString().length !== 8) errorlist.push("telefonnr");
    if(!epost.toString().includes("@")) errorlist.push("epost");
    return errorlist;
}
function showErrors(errorlist) {

}
function purchase() {
    filmvalg = document.getElementById("valg");
    antall = document.getElementById("antall");
    fornavn = document.getElementById("fornavn");
    etternavn = document.getElementById("etternavn");
    telefonnr = document.getElementById("telefonnr");
    epost = document.getElementById("epost");
    let errors = validateInput()
    if(errors.length === 0) {
        //buy ticket
    } else {
        showErrors(errors)
    }
}

