function encriptar(){
    let usuario = (document.getElementById("textoUsuario")).value;

    if(usuario.includes("a") || usuario.includes("e") || usuario.includes("i") || usuario.includes("o") || usuario.includes("u")){
        usuario = usuario.replaceAll("e","enter");
        usuario = usuario.replaceAll("i","imes");
        usuario = usuario.replaceAll("a","ai");
        usuario = usuario.replaceAll("o","ober");
        usuario = usuario.replaceAll("u","ufat");
    }
    document.getElementById("textoResultado").hidden = false;
    document.getElementById("textoResultado").innerHTML =usuario;
    document.getElementById("status").innerHTML = "Tu mensaje es: ";
    document.querySelector("#copiar").hidden = false;
    document.getElementById("muñeco").hidden = true;
    limpiar();

}

function desencriptar(){
    let usuario = (document.getElementById("textoUsuario")).value;

    if(usuario.includes("enter") || usuario.includes("imes") || usuario.includes("ai") || usuario.includes("ober") || usuario.includes("ufat")){
        usuario = usuario.replaceAll("enter","e");
        usuario = usuario.replaceAll("imes","i");
        usuario = usuario.replaceAll("ai","a");
        usuario = usuario.replaceAll("ober","o");
        usuario = usuario.replaceAll("ufat","u");
    }
    document.getElementById("textoResultado").hidden = false;
    document.getElementById("textoResultado").innerHTML =usuario;
    document.getElementById("status").innerHTML = "Tu mensaje es: ";
    document.querySelector("#copiar").hidden = false;
    document.getElementById("muñeco").hidden = true;
    limpiar();
}

function copiar(){
    let copyText = (document.getElementById("textoResultado"));
    copyText.select();
    copyText.setSelectionRange(0,99999);
    navigator.clipboard.writeText(copyText.value);
}

function limpiar(){
    document.querySelector("#textoUsuario").value = '';
}


