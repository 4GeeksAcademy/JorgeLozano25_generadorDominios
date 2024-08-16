// Seleccionar el formulario y la lista donde se mostrarán los dominios
const form = document.getElementById("domainForm");
const domainList = document.getElementById("domainList");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // Evita que el formulario se envíe y la página se recargue

  // Obtener los valores de los inputs y convertirlos en arrays
  let pronombres = document.getElementById("pronombres").value.split(",");
  let adj = document.getElementById("adjetivos").value.split(",");
  let sust = document.getElementById("sustantivos").value.split(",");

  // Limpiar la lista anterior
  domainList.innerHTML = "";

  // Generar y mostrar todas las combinaciones posibles
  for (let p of pronombres) {
    for (let a of adj) {
      for (let n of sust) {
        // Crear un elemento <li> por cada combinación
        let listItem = document.createElement("li");
        // Asignar el texto al <li>
        listItem.textContent = p.trim() + a.trim() + n.trim() + ".com";
        // Agregar el <li> al <ul>
        domainList.appendChild(listItem);
      }
    }
  }
});
