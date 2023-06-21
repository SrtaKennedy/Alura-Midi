function tocaSons (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento != null && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        alert('Elemento não encontrado ou seletor inválido');
    }
}

const listaDeSons = document.querySelectorAll('.tecla');

// Enquanto
for (let contador = 0; contador < listaDeSons.length; contador++) {

    const tecla = listaDeSons[contador]
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSons(idAudio);
    }

    tecla.onkeydown = function (evento) {

        console.log(evento.code === 'Space' || evento.code === 'Enter')
        if(evento.code == 'Space') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function() {
        tecla.classList.remove('tecla')
    };

}

