const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");

function btnEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value);
    mensagem.value = textoEncriptado;
}

function encriptar(stringEncriptada){
   stringEncriptada = stringEncriptada.replace(/e/gi,"enter");
   stringEncriptada = stringEncriptada.replace(/i/gi,"imes");
   stringEncriptada = stringEncriptada.replace(/a/gi,"ai");
   stringEncriptada = stringEncriptada.replace(/o/gi,"ober");
   stringEncriptada = stringEncriptada.replace(/u/gi,"ufat");

   return stringEncriptada;
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(inputTexto.value);
    mensagem.value = textoEncriptado;
}

function desencriptar(stringEncriptada){
    stringEncriptada = stringEncriptada.replace(/enter/gi,"e");
    stringEncriptada = stringEncriptada.replace(/imes/gi,"i");
    stringEncriptada = stringEncriptada.replace(/ai/gi,"a");
    stringEncriptada = stringEncriptada.replace(/ober/gi,"o");
    stringEncriptada = stringEncriptada.replace(/ufat/gi,"u");
 
    return stringEncriptada;
}

function copiar() {
    let copiarTexto = document.querySelector(".mensagem");
    copiarTexto.select();
    navigator.clipboard.writeText(copiarTexto.value);
    inputTexto.value = "";
  }