
function toggleSection(sectionId) {
  var section = document.getElementById(sectionId);
  var contenido = section.querySelector('.contenido');
  if (contenido.style.display === "none") {
      contenido.style.display = "block";
  } else {
      contenido.style.display = "none";
  }
}

function redirigirWhatsApp() {
  window.open("https://wa.me/5492954576330", "_blank");
}


//Mostrare edad esto lo hice gracias a https://chat.openai.com/
document.addEventListener("DOMContentLoaded", function() {
    // Obtener el elemento de fecha de nacimiento del DOM
    var fechaNacimiento = document.getElementById("fecha-nacimiento");
    
    if (fechaNacimiento) {
      // Obtener la fecha de nacimiento y calcular la edad
      var fecha = new Date(fechaNacimiento.textContent);
      var hoy = new Date();
      var edad = hoy.getFullYear() - fecha.getFullYear();
      var meses = hoy.getMonth() - fecha.getMonth();
      if (meses < 0 || (meses === 0 && hoy.getDate() < fecha.getDate())) {
        edad--;
      }
    
      // Mostrar la edad en el elemento correspondiente del DOM
      fechaNacimiento.insertAdjacentText('beforeend', ' (' + edad + ' años)');
    }
  });

  