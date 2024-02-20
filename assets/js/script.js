const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const dias = document.getElementById('dia');
const mes = document.getElementById('mes');
const ano = document.getElementById('ano');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();

    if(hr < 10) hr = '0' + hr;
    if(min < 10) min = '0' + min;
    if(sec < 10) sec = '0' + sec;
    
    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = sec;

});
const data = setInterval(function date(){
    let dateToday = new Date();
    let day = dateToday.getDate();
    let month = dateToday.getMonth() + 1;
    let year = dateToday.getFullYear();

    if(day < 10) day = '0' + day;
    if(month < 10) month = '0' + month;

    dias.textContent = day;
    mes.textContent = month;
    ano.textContent = year;
});