// titulo de pestaña web
document.querySelector('title').innerHTML="Modelo Boda" // este

// establezco el ícono de lista. Solo modificar por nombre la variable "ic".
var ico = document.querySelectorAll('.icono');
var ic="fas fa-heart" //este 
for (var i=0; i<ico.length; i++){
    ico[i].setAttribute('class', ic);
};

// nombre del lugar donde se hace el evento
document.querySelector('.lugar').innerHTML="Nombre del salón"; //este

// direccion para la api de Google Maps. La obtengo desde https://developers.google.com/maps/documentation/embed/map-generator#api-key. Solo agrego el htpps.
var direccion = "https://www.google.com/maps/embed/v1/search?q=Primera%20Junta%201100%2C%20Villa%20Madero%2C%20Provincia%20de%20Buenos%20Aires%2C%20Argentina&key=AIzaSyBxVENSlCu6-GgeIrd99X6M73Lx0yjZrJk"; // este
document.querySelector('#apiMap').setAttribute('src', direccion);

// dirección que se ve en la página
var direccionCompleta = "av algo nro, barrio"; // este
document.querySelector('#dir').innerHTML = direccionCompleta;

// fecha del evento que se ve en la página
var fecha = "domingo 07 de enero del 2022"; // este
document.querySelector('#dia').innerHTML=fecha;

// hora del evento que se ve en la página
var hs = "16:00 horas"; // este
document.querySelector('#hora').innerHTML=hs;

// dress code
document.querySelector('.dress_code').innerHTML="Elegante" // este
document.querySelector('.img_code').setAttribute('src', './img/elegante.png') // este

// hashtag en instagram
document.querySelector('#instagram').innerHTML="#BodaSofiyEsteban" // este
document.querySelector('.linkInsta').setAttribute('href', 'https://www.instagram.com/explore/tags/bodas/'); // link al hashtag

// link de respuesta al whatsapp
document.querySelector('.confirmacion1').setAttribute('href', 'https://api.whatsapp.com/send?phone=541153111778&text=Hola%20Sofi,%20confirmo%20mi%20asistencia%20a%20la%20fiesta');
document.querySelector('#conf1').innerHTML="Confirmar a Sofia" // texto boton
document.querySelector('.confirmacion2').setAttribute('href', 'https://api.whatsapp.com/send?phone=541153111778&text=Hola%20Tebi,%20confirmo%20mi%20asistencia%20a%20la%20fiesta');
document.querySelector('#conf2').innerHTML="Confirmar a Esteban" // texto boton

// link a las mesas de regalo
document.querySelector('.mesa1').setAttribute('href', 'https://www.elpalaciodehierro.com/on/demandware.store/Sites-palacio-MX-Site/es_MX/Celebra-Show')
document.querySelector('.mesa2').setAttribute('href', 'https://mesaderegalos.liverpool.com.mx/')

// firma final de los anfitriones
document.querySelector('#firma').innerHTML="Sofi y Tebi"