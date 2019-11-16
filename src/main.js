const listaImagens = [
    './imagens/bulbasaurs_01.jpg',
    './imagens/bulbasaurs_02.jpg',
    './imagens/bulbasaurs_03.jpg'
];
var indexImagem = 0;
const img_imagem = document.getElementById('imagem');
img_imagem.removeAttribute('alt');
img_imagem.src = listaImagens[indexImagem];

function confirmarTituloImagem() {
    const button = document.getElementById('btn_definir_titulo');
    const input_titulo = document.getElementById('input_titulo');
    const h1_titulo = document.createElement('h1');
    h1_titulo.innerHTML = input_titulo.value;
    document.body.insertBefore(h1_titulo, document.getElementById('imagem'));    
    document.body.removeChild(input_titulo);
    document.body.removeChild(button);
}

function mudarImagem(e) {
    const rect = img_imagem.getBoundingClientRect();
    const x = e.clientX;
    const y = e.clientY;
    const input_titulo = document.getElementById('input_titulo');
    //input_titulo.value = `${rect.left} / ${rect.right}`;
    //input_titulo.value += ` / ${e.clientX}`;
    if (x <= (rect.left + 150)) {
        indexImagem--;
        if (indexImagem < 0) {
            indexImagem = listaImagens.length - 1;
        }
    } else if (x >= rect.right - 150) {
        indexImagem++;
        if (indexImagem >= listaImagens.length) {
            indexImagem = 0;
        }
    }
    img_imagem.src = listaImagens[indexImagem];
}
