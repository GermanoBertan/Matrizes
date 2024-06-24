//CRIAR MATRIZ 1
document.write("<div id='div1'>");
var matriz1 = new Array();
var linha1 = linha();
var coluna1 = coluna();
matriz1 = criarMatriz(linha1, coluna1)
imprimirTabela(matriz1, "Matriz 1",coluna1);

//SINAL DA MAIS
document.write("<table  id='sinalTable'> <tr> <td id='sinal'>+</td></tr></table>");

//CRIAR MATRIZ 2
var matriz2 = new Array();
matriz2 = criarMatriz(linha1, coluna1);   
imprimirTabela(matriz2, "Matriz 2", coluna1);

//SINAL DA IGUAL
document.write("<table  id='sinalTable' > <tr> <td id='sinal'>=</td></tr></table>");

var matrizSoma = new Array();
matrizSoma = Soma(linha1, coluna1,matriz1, matriz2);
imprimirTabela(matrizSoma, "Matriz Soma",coluna1);
document.write("</div>");

//SOMA DAS MATRIZES
function Soma(linhaS, colunaS, matriz1, matriz2){

    var matrizSoma = new Array();
    for( var i=0; i < linhaS; i++){

        var matrizColuna = new Array();
        matrizSoma[i] = matrizColuna;

        for(var y=0; y < colunaS; y++){

            var valorA = matriz1[i][y];
            var valorB = matriz2[i][y];

            matrizColuna[y] = valorA + valorB;
        }
    }
    return matrizSoma;
}


//QUANTAS LINHAS A MATRIZ TERÁ
function linha(){
    do{
        var linhas = parseInt(prompt("Quantas linha tem a matriz a ser SOMADA: "));
    }while(isNaN(linhas) ||  linhas < 1 );
    return linhas;
}
//QUANTAS COLUNAS A MATRIZ TERÁ
function coluna(){
    do{
        var colunas = parseInt(prompt("Quantas colunas tem a matriz a ser SOMADA: "));
    }while(isNaN(colunas) ||  colunas < 1 );
    return colunas;
}
//CRIAR A MATRIZ PARA AS OPERAÇÕES
function criarMatriz(linhas, colunas){
    
    var matrizLinha = new Array();
    for( var i=0; i < linhas; i++){

        var matrizColuna = new Array();
        matrizLinha[i] = matrizColuna;

        for(var y=0; y < colunas; y++){
            matrizColuna[y] = nAl();
        }
    }
    return matrizLinha;
}

//IMPRIMIR MATRIZ  EM TABELA
function imprimirTabela(m1 = new Array(), texto,colunas){

    document.write("<table>");
    document.write("<thead> <tr> <td colspan="+ (colunas)+" > "+ texto +" </td> </tr> </thead>");
    for(var l=0; l < m1.length; l++){
        document.write("<tr>");
        for(var c = 0; c < m1[l].length; c++){
            document.write("<td>" + m1[l][c] + "</td>");
        }
        document.write("</tr>");
    }
    document.write("</table>");
}

//GERA UM NÚMERO ALEATÓRIO
function nAl(){
    var numeroAlea = Math.floor(Math.random()*100);
    return numeroAlea;
}