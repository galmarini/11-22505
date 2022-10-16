const fecha = new Date();
const añoActual = fecha.getFullYear();
console.log(añoActual); //2020
const hoy = fecha.getDate();
const mesActual = fecha.getMonth() + 1; 
console.log(hoy);
console.log(mesActual);

//getElementsByClassName-------------
var diaSer = document.getElementsByClassName("dia"); 
var mesSer = document.getElementsByClassName("mes"); 
var añoSer = document.getElementsByClassName("año"); 
console.log(diaSer);

for (i = 0; i < fechaser.length; i++) {
    if (añoSer >= añoActual) {console.log("año ok")
        if (mesSer >= mesActual) {console.log("mes ok")
            if (diaSer >= hoy) {console.log("dia ok")}}};
    //else {console.log("cuenta vencida")}


    //<p>EDENOR <span class="dia">10</span>/<span class="mes">10</span>/<span class="año">2022</span><br></p>
      //      <button type="button" onclick="alert('Redirigiendo al sitio de pago')">Pagar ahora</button>
      //      <p>ARBA <span class="dia">25</span>/<span class="mes">10</span>/<span class="año"></span>2022</span><br></p>
      //      <button type="button" onclick="alert('Redirigiendo al sitio de pago')">Pagar ahora</button>
      //      <p>PERSONAL <span class="dia">08</span>/<span class="mes">10</span>/<span class="mes">2022</span><br></p>
      //      <button type="button" onclick="alert('Redirigiendo al sitio de pago')">Pagar ahora</button>
