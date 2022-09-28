//Dichiarazioni e inizializzazioni
let counterValue = 0;
let body = document.getElementsByTagName("body")[0];

createCounter();
createSign();

//Funzione di popolamento della pagina 
function createCounter() {

    //Creazione del contenitore principale
    let mainContainer = createCustomElement("div", null, "main-container", body);

    //Creazione di titolo 
    createCustomElement("h1", "Try Me!", null, mainContainer);
    
    //Creazione dei contenitori principali della pagina 
    let numberContainer = createCustomElement("div", counterValue, "counter-text", mainContainer);

    let buttonContainer = createCustomElement("div", null, "btn-container", mainContainer);
    

    //Creazione dei button
    let decreaseBtn = createCustomElement("button", "-", "btn-increase-decrease", buttonContainer);

    let resetBtn = createCustomElement("button", null, "btn-reset", buttonContainer);

    let resetIcon = createCustomElement("i", null, "fa-solid", resetBtn);
    resetIcon.classList.add("fa-arrows-rotate");

    let increaseBtn = createCustomElement("button", "+", "btn-increase-decrease", buttonContainer);

    //Creazione eventi per i button
    increaseBtn.addEventListener("click", function() {
        counterValue++;
        numberContainer.innerHTML = counterValue;
    });

    decreaseBtn.addEventListener("click", function() {
        counterValue--;
        numberContainer.innerHTML = counterValue;
    });

    resetBtn.addEventListener("click", function() {
        counterValue = 0;
        numberContainer.innerHTML = counterValue;
    });
    
}
//Funzione di creazione firma
function createSign() {
    let signContainer = createCustomElement("div", null, "sign-container", body);

    createCustomElement("span", "Made with love by", "sign-text", signContainer);

    let link = createCustomElement("a", null, null, signContainer);
    link.href = "https://valentinaboolean.github.io/";
    link.target = "_blank";

    let image = createCustomElement("img", null, null, link);
    image.src = "./assets/img/logo.svg";
}

//Funzione che gestisce la creazione degli elementi html
function createCustomElement(type, value, cssClass, cont) {
    let element = document.createElement(type);
    element.innerHTML = value;
    if (cssClass != null) element.classList.add(cssClass);
    cont.appendChild(element);
    return element;
}
