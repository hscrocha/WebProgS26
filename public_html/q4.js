function showEnglish(){
    document.getElementById("english").setAttribute("style",
        "visibility:visible; display:block;");
    document.getElementById("spanish").setAttribute("style",
        "visibility:hidden; display:none;");
}

function showSpanish(){
    document.getElementById("english").setAttribute("style",
        "visibility:hidden; display:none;");
    document.getElementById("spanish").setAttribute("style",
        "visibility:visible; display:inherit;");
}