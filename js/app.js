// Selectores
const pacienteInput = document.querySelector("#paciente");
const propietarioInput = document.querySelector("#propietario");
const emailInput = document.querySelector("#email");
const fechaInput = document.querySelector("#fecha");
const sintomasInput = document.querySelector("#sintomas");

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

function datosCitas(event) {
    citaObj[event.target.name] = event.target.value

    console.log(citaObj);
}