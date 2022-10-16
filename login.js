var dni=0;
console.log("El DNI inicio es: "+ dni); 

dni=prompt("Ingresá tu número de DNI (sin puntos ni espacios"); 
console.log("El DNI ingresado es: "+ dni); 

if (dni > 3000000 && dni < 60000000) {
    console.log("está en el rango");
    if (dni == 30123123) {
        console.log("DNI registrado " + dni);
        location.href = "/profile.html";
    }
    else {
        console.log("DNI nuevo " + dni);
        location.href = "/registro.html";
    }
}
else {
    alert('DNI incorrecto');
    location.href = "/login.html";
}

console.log(dni);




