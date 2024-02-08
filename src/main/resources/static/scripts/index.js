//set ticketarray and the area where they are displayed
let ticketarr = [];
let ticketView = document.querySelector(".billetter");

let filmvalg;
let antall;
let fornavn;
let etternavn;
let telefonnr;
let epost;
let valElements = [];

const valgErr = document.querySelector(".fornavnRad td:nth-child(3)");
const antallErr = document.querySelector(".fornavnRad td:nth-child(3)");
const fnavnErr = document.querySelector(".fornavnRad td:nth-child(3)");
const enavnErr = document.querySelector(".fornavnRad td:nth-child(3)");
const tlfErr = document.querySelector(".fornavnRad td:nth-child(3)");
const epostErr = document.querySelector(".fornavnRad td:nth-child(3)");
const errElements = [valgErr, antallErr, fnavnErr, enavnErr,tlfErr,epostErr];

document.querySelector("#purchase").addEventListener("click", purchase);


function validateInput() {
    //empty list
    errorlist = [];
    //picked a movie?
    if(filmvalg === "") errorlist.push("valg");
    //attempt to turn user input into a number - and catch exception if they put something else
    try {
        antall = Number(antall);
    } catch (error) {
        errorlist.push("antall");
    }
    //check if it is positive
    if(antall < 1) errorlist.push("antall");
    //check for empty strings
    if(fornavn === "") errorlist.push("fornavn");
    if(etternavn === "") errorlist.push("etternavn");
    //check is the phonenumber is 8 digits (norwegian number)
    if(telefonnr.toString().length !== 8) errorlist.push("telefonnr");
    //email must atleast contain an @
    if(!epost.toString().includes("@")) errorlist.push("epost");
    return errorlist;
}

function clearErrors() {
    errElements.forEach((item) => {
        item.innerHTML = "";
    });
}
function showErrors(errorlist) {
    clearErrors();
}


function updateView() {
    let out = "";
    out += "\n" +
        "    <tr>\n" +
        "        <td>Film</td>\n" +
        "        <td>Antall</td>\n" +
        "        <td>Fornavn</td>\n" +
        "        <td>Etternavn</td>\n" +
        "        <td>Telefonnummer</td>\n" +
        "        <td>E-Post</td>\n" +
        "    </tr>";
        //debugger;

    //Normal array iteration did not work, but this did. basically a function that does a for loop through the array
    ticketarr.forEach((item) => {
        out += "<tr>";
        item.forEach((item) => {
            out += "<td>" + item + "</td>";
        });
        out += "</tr>";
    })

    ticketView.innerHTML = out;
}

function addTicket() {
    ticketarr.push(valElements);
    updateView();

}

function purchase() {
    //get values each buy-event, to avoid values being stored across purchases
    filmvalg = document.getElementById("valg").value;
    antall = document.getElementById("antall").value;
    fornavn = document.getElementById("fornavn").value;
    etternavn = document.getElementById("etternavn").value;
    telefonnr = document.getElementById("telefonnr").value;
    epost = document.getElementById("epost").value;
    //update the array
    valElements = [filmvalg, antall, fornavn, etternavn, telefonnr, epost];
    //get the errors
    let errors = validateInput();
    console.log(errors);


    if(errors.length === 0) {
        clearErrors();
        addTicket();
    } else {
        showErrors(errors);
    }

}

updateView();