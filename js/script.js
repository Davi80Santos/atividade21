function dados() {
    var corTexto = document.getElementById("cor-texto").value;
    var corFundo = document.getElementById("cor-fundo").value;
    var nome = document.getElementById("nome").value;
    var comentario = document.getElementById("comentario").value;

    document.getElementById("action").innerHTML += '<div class="usuario" style="color: ' + corTexto + ';background-color: ' + corFundo + ';" ><h4>' + nome + '</h4><hr style="border-color: ' + corTexto + ';"><p>' + comentario + '</p></div>';
}

       
             