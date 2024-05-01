// CONDICIONAL


let tipo = prompt("Escribe que tipo de vehiculo tienes");
let modificador = 0;

switch (tipo){
    case (tipo = "moto") || (tipo = "Moto"):
        alert("Dirijase a la seccion Basicos");
        modificador = 0.5
        break;

        case (tipo = "auto") || (tipo = "Auto"):
            alert("Dirijase a la seccion Basicos");
            modificador = 1.0
            break;
    
        case (tipo = "lancha") || (tipo = "Lancha"):
                alert("Dirijase a la seccion Especiales");
                modificador = 1.5
                break;

        case (tipo = "cuatriciclo") || (tipo =          "Cuatriciclo"):
                alert("Dirijase a la seccion Especiales");
                modificador = 1.2
                break;      

        
    default:
        alert("El tipo ingresado no es valido.");
        break;         
}





// BUCLE 

let precioBase = 500

if (modificador != 0 ) {
for (let index = 2000; index <= 2024; index++) {
    calcularPrecio(index, precioBase, modificador)
    
}
document.write(`<br> <br>`); 
}



// FUNCION 


function calcularPrecio(index, precioBase, modificador) {
    const element = index * precioBase * modificador 

    document.write(`El valor del seguro modelo ${index} es ${element} <br>`) 
}


