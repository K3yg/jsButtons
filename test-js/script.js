function mostrarDiv(){
    var checkbox = document.getElementById("checkbox")

    var retangulo = document.getElementById("retangulo")

    if(checkbox.checked == true){
        retangulo.style.display = "block"
    } else{
        retangulo.style.display = "none"
    }};