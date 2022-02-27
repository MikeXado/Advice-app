const api_url = "https://api.adviceslip.com/advice"

async function getAdvice() {
    const response = await fetch(api_url);
    const data = await response.json();
    let adviceNr = document.querySelector(".advice-nr");
    let adviceId = data.slip.id;
    let quote = data.slip.advice;
    let adviceNumber = adviceId.toString();
    adviceNr.innerHTML = adviceNumber;
    document.querySelector(".loader").style.display = "none"
    document.querySelector(".quote").style.display = "block"
    document.querySelector(".quote").innerHTML = '"' + quote.toString() + '"';
}




function showAdvice() {
    let quote = document.querySelector(".quote");
    let loader = document.querySelector(".loader");
    let button = document.querySelector(".quote-button");

    quote.style.display = "none";
    loader.style.display = "block";
    setTimeout(() => {
        getAdvice();
    }, 1000);
}




window.onload = () => {
    getAdvice();
}
