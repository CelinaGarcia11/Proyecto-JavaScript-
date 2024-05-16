
let arrayDeudores = crearArrayDeudores(10)
let opcion = prompt("Si desea cotizar su vehiculo con nosotros ingrese 1 y si desea consultar si posee deuda ingrese 2")
if (opcion === "1") {
    cotizadorDeSeguros();
} else if (opcion === "2") {
    buscadorDeDeudores(arrayDeudores)
  
}
else {
    alert("Opcion ingresada no valida")
}
 
function buscadorDeDeudores(arrayDeudores) {
    let nombreCliente = prompt("Ingrese su nombre y apellido (para motivos de testing inicie el programa con consola abierta)")
     let deudorEncontrado = null
     arrayDeudores.forEach((deudor) =>{
        let nombreCompuesto =`${deudor.nombre} ${deudor.apellido}`
        if(nombreCompuesto == nombreCliente){
            deudorEncontrado = deudor
        }
    }) 
 
    if (deudorEncontrado != null) {
        alert(`${deudorEncontrado.nombre} ${deudorEncontrado.apellido} con deuda de $${deudorEncontrado.monto} vencida el ${deudorEncontrado.fecha}`)
    } else {
        alert("Deudor no encontrado")
    }
    
}

function crearArrayDeudores(largo){
    function Deudor(nombre, apellido, fecha, monto){
        this.nombre = nombre
        this.apellido =apellido
        this.fecha = fecha
        this.monto = monto
    }

    let nombres = [
        "Juan", "Marcos", "Gaston", "Tomas", "Facundo", "Andrea", "Paula", "Camila", "Josefina", "Catalina"
    ]
    let apellidos = [
        "Juarez", "Garcia", "Rodriguez", "Alvarez", "Perez", "Pizarro", "Moyano", "Suarez", "Romero", "Balegno"
    ]
    let fechas = [
        "2022-06-15", "11-01-17", "21-02-18", "22-03-22", "17-03-23", "20-05-24", "13-06-21", "29-07-16", "31-10-20","09-12-22"
    ]
    let arrayDeudores = [] 
    for (let index = 0; index < largo; index++) { 
        let fechaRandom = fechas[generarNumeroRandom(0,9)]
        let nombreRandom = nombres[generarNumeroRandom(0,9)]
        let apellidoRandom = apellidos[generarNumeroRandom(0,9)]
        let montoRandom = generarNumeroRandom(100000, 500000)
        let deudor = new Deudor(nombreRandom, apellidoRandom, fechaRandom, montoRandom)
        arrayDeudores.push(deudor) 
    }
    console.log(JSON.stringify(arrayDeudores))
    return arrayDeudores;
}

function generarNumeroRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min
}

function cotizadorDeSeguros() {
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







let precioBase = 500

if (modificador != 0 ) {
for (let index = 2000; index <= 2024; index++) {
    calcularPrecio(index, precioBase, modificador)
    
}
document.write(`<br> <br>`); 
}

}

function calcularPrecio(index, precioBase, modificador) {
    const element = index * precioBase * modificador 

    document.write(`El valor del seguro modelo ${index} es ${element} <br>`) 

}


let miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit",agregarListaAuto);

function agregarListaAuto(e){
    e.preventDefault();

    const selectElement = document.getElementById("inputCorreo").value
    const selectTelefono = document.getElementById("inputTelefono").value
    const selectConsulta= document.getElementById("inputConsulta").value
   
    const objeto =  {"correo" :selectElement, "telefono":selectTelefono, "consulta":selectConsulta}
    

    const arrayMemoria = localStorage.setItem("listaDeConsultas", JSON.stringify(objeto))

    
    



alert("La consulta fue enviada con exito. Le responderemos a la brevedad.")    
}

