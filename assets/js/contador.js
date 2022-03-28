const contador = document.querySelector(".contador__texto")

const numero = radomizador()

contador.innerHTML = `${numero} pessoas estão assistindo esse vídeo agora...`


function radomizador() {

    let numero = Math.floor(Math.random() * 100 + 20 )
    return numero
}



