var relogio = document.getElementById("relogio")

function updateClock() {
    var data = new Date(),
        hora =  data.getHours() <= 9 ? "0"+data.getHours() : data.getHours()
        minuto = data.getMinutes() <= 9 ? "0"+data.getMinutes() : data.getMinutes()
        segundos = data.getSeconds() <= 9 ? "0"+data.getSeconds() : data.getSeconds() 

    relogio.innerHTML = `${hora}:${minuto}:${segundos}`
}

setInterval(updateClock, 1000)

