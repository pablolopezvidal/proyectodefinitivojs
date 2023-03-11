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