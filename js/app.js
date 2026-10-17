// Selectores
const pacienteInput = document.querySelector("#paciente");
const propietarioInput = document.querySelector("#propietario");
const emailInput = document.querySelector("#email");
const fechaInput = document.querySelector("#fecha");
const sintomasInput = document.querySelector("#sintomas");
const formulario = document.querySelector("#formulario-cita")

// Objeto de Cita
const citaObj = {
    paciente: "",
    propietario: "",
    email: "",
    fecha: "",
    sintomas: ""
}

//Eventos
pacienteInput.addEventListener("change", datosCitas );
propietarioInput.addEventListener("change", datosCitas );
emailInput.addEventListener("change", datosCitas );
fechaInput.addEventListener("change", datosCitas );
sintomasInput.addEventListener("change", datosCitas );

formulario.addEventListener("submit", submitCita);

class Notificacion{

    constructor({texto, tipo}){
        this.texto = texto
        this.tipo = tipo

        this.mostrar()
    }
    
    mostrar(){
        //Crear notificacion
        const alerta = document.createElement("DIV")
        alerta.classList.add("text-center", "w-full", "p-3", "text-white", "my-5", "alert", "uppercase","font-bold", "text-sm")

        //Eliminar alertas duplicadas
        const alertaPrevia = document.querySelector(".alert")
        alertaPrevia?.remove()
        
        //Si es de tipo error Agrega una clase
        this.tipo === "error" ? alerta.classList.add("bg-red-500") :  alerta.classList.add("bg-green-500")

        //Mostrar mensaje de error
        alerta.textContent = this.texto

        //Insertar en el DOM 
        formulario.parentElement.insertBefore(alerta, formulario)

        //Quitar despues de 3 segundos
        setTimeout(() => {
            alerta.remove()
        }, 3000); 
    }
}
class AdminCitas {
    constructor(){
        this.citas = []

        console.log(this.citas)
    }
    agregar(cita){
        this.citas = [...this.citas, cita]
        console.log(this.citas)
    }
}

function datosCitas(event) {
    citaObj[event.target.name] = event.target.value

    // console.log(citaObj);
}

const citas = new AdminCitas()
function submitCita (e){
    e.preventDefault();

    if( Object.values(citaObj).some(valor => valor.trim() === "")){
        const notificacion = new Notificacion({
            texto: "Todos los campos son obligatorios",
            tipo: "error"

        })
        return
    } 
    citas.agregar(citaObj)
}

