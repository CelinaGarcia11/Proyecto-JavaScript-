//document.getElementById('').addEventListener('click', cargarJSON)

document.getElementById("formularioCliente").addEventListener('click', cargarJSON);

let arrayDeudores = crearArrayDeudores(10)

function buscadorDeDeudores(e) { 
    e.preventDefault();
    let nombreCliente = document.getElementById("inputDeuda").value;
     let deudorEncontrado = null
     arrayDeudores.forEach((deudor) =>{
        let nombreCompuesto =`${deudor.nombre} ${deudor.apellido}`
        if(nombreCompuesto == nombreCliente){
            deudorEncontrado = deudor
        }
    }) 
 
    if (deudorEncontrado != null) {
        document.getElementById("texto").innerHTML = `${deudorEncontrado.nombre} ${deudorEncontrado.apellido} con deuda de $${deudorEncontrado.monto} vencida el ${deudorEncontrado.fecha}`
    } else {
        document.getElementById("texto").innerHTML = "El tipo ingresado no es valido.";
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

function cotizadorDeSeguros(e) {
    e.preventDefault();
let tipo = document.getElementById("inputVehiculo").value;
let modificador = 0;

switch (tipo){
    case (tipo = "moto") || (tipo = "Moto"):
        modificador = 0.5
        break;

        case (tipo = "auto") || (tipo = "Auto"):
            modificador = 1.0
            break;
    
        case (tipo = "lancha") || (tipo = "Lancha"):
                modificador = 1.5
                break;

        case (tipo = "cuatriciclo") || (tipo ="Cuatriciclo"):
                modificador = 1.2
                break;      

        
    default:
        document.getElementById("mensaje").innerHTML = "El tipo ingresado no es valido.";
        break;         
}


let precioBase = 500
let acomulador = ""
if (modificador != 0 ) {
for (let index = 2000; index <= 2024; index++) {
    acomulador = calcularPrecio(index, precioBase, modificador) + acomulador
    
}
document.getElementById("mensaje").innerHTML = acomulador
}

}

function calcularPrecio(index, precioBase, modificador) {
    const element = index * precioBase * modificador 

   return `El valor del seguro modelo ${index} es ${element} <br>`

}

let formularioCotizar = document.getElementById("formularioCotizar");
formularioCotizar.addEventListener("submit",cotizadorDeSeguros);

let formularioDeuda = document.getElementById("formularioDeuda");
formularioDeuda.addEventListener("submit",buscadorDeDeudores);

let miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit",agregarListaAuto);

function agregarListaAuto(e){
    e.preventDefault();

    const selectElement = document.getElementById("inputCorreo").value
    const selectTelefono = document.getElementById("inputTelefono").value
    const selectConsulta= document.getElementById("inputConsulta").value
   
    const objeto =  {"correo" :selectElement, "telefono":selectTelefono, "consulta":selectConsulta}
    

    const arrayMemoria = localStorage.setItem("listaDeConsultas", JSON.stringify(objeto))

    let listaDeConsultas = localStorage.getItem("listaDeConsultas");

    console.log(listaDeConsultas)
 



// document.getElementById("consulta").innerHTML = "La consulta fue enviada con exito. Le responderemos a la brevedad."    
}

const btn = document.querySelector('#myButton')
btn.addEventListener('click', () => {

    Swal.fire({
        title: 'Genial!',
        text: 'La consulta fue enviada con éxito. Le responderemos a la brevedad!',
        icon: 'success',
        confirmButtonText: 'Aceptar'
})
})


function cargarJSON() {
    fetch('./clientes.json')
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            document.getElementById("mensajeCliente").innerHTML = JSON.stringify(data);
        }) 
}
