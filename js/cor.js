function background_vermelho() {
    var cor = "#f75656";
    document.body.style.backgroundColor = cor;
    sessionStorage.setItem("cor", cor)
}

function background_azul() {
    var cor = "#4991d4";
    document.body.style.backgroundColor = cor;
    sessionStorage.setItem("cor", cor)
}

function background_verde() {
    var cor = "#9bde6e";
    document.body.style.backgroundColor = cor;
    sessionStorage.setItem("cor", cor)
}


document.body.style.backgroundColor = sessionStorage.getItem("cor")