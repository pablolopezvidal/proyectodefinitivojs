/*EJERCICIO 1*/

function colorChanger(){
    var selectValue = document.getElementById("mySelector").value;
    document.body.style.backgroundColor = selectValue; 
}

/*EJERCICIO 2*/ 
function ocultar1(){
    document.getElementById('carta2').style.display = 'none';
    document.getElementById('carta3').style.display = 'none';
    document.getElementById('carta1').style.display = 'block';
    document.getElementById('carta4').style.display = 'block';

}
function ocultar2(){
    document.getElementById('carta2').style.display = 'block';
    document.getElementById('carta3').style.display = 'block';
    document.getElementById('carta1').style.display = 'block';
    document.getElementById('carta4').style.display = 'block';
}
function ocultar3(){
    document.getElementById('carta2').style.display = 'block';
    document.getElementById('carta4').style.display = 'block';
    document.getElementById('carta1').style.display = 'none';
    document.getElementById('carta3').style.display = 'none';
}
function ocultar4(){
    document.getElementById('carta2').style.display = 'none';
    document.getElementById('carta4').style.display = 'block';
    document.getElementById('carta1').style.display = 'none';
    document.getElementById('carta3').style.display = 'block';
}

/*EJERCICIO 3*/ 
const nombreInput = document.getElementById('nombre');
const emailInput = document.getElementById('email');
const descripcionInput = document.getElementById('descripcion');

function actualizarEstadoInput(input) {
    if (input.value.trim() === '') {
        input.classList.remove('valido');
        input.classList.remove('invalido');
    } else if (input.classList.contains('invalido')) {
        input.classList.remove('invalido');
        input.classList.add('valido');
    } else {
        input.classList.add('valido');
    }
}

function actualizarEstadoNombre() {
actualizarEstadoInput(nombreInput);
    if (nombreInput.classList.contains('valido')) {
        nombreInput.style.borderColor = '#00ff00';
    } else {
        nombreInput.style.borderColor = '#ff0000';
    }
}

function actualizarEstadoEmail() {
actualizarEstadoInput(emailInput);
    if (emailInput.checkValidity()) {
        emailInput.style.borderColor = '#00ff00';
    } else {
        emailInput.style.borderColor = '#ff0000';
    }
}

function actualizarEstadoDescripcion() {
actualizarEstadoInput(descripcionInput);
    if (descripcionInput.classList.contains('valido')) {
        descripcionInput.style.borderColor = '#00ff00';
    } else {
        descripcionInput.style.borderColor = '#ff0000';
    }
}

nombreInput.addEventListener('input', actualizarEstadoNombre);
emailInput.addEventListener('input', actualizarEstadoEmail);
descripcionInput.addEventListener('input', actualizarEstadoDescripcion);

nombreInput.addEventListener('blur', actualizarEstadoNombre);
emailInput.addEventListener('blur', actualizarEstadoEmail);
descripcionInput.addEventListener('blur', actualizarEstadoDescripcion);
