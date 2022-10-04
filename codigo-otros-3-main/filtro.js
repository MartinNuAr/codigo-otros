// Tenemos un li de productos

const productos = [
  // Se corrige la ruta de las imágnenes
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./src/taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./src/taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./src/bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./src/bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./src/zapato-rojo.jpg"}
]

// Se renombran la variables para mejor comprensión
// Se cambia también el Name por ID
const lista = document.getElementById("lista-de-productos");
// Se reemplaza el querySelector por getElement
const inputSelect = document.getElementById("seleccion");

for (let i = 0; i < productos.length; i++) {
  // Se renombra la variable 'd' a 'div' para mejor comprensión
  var div = document.createElement("div")
  div.classList.add("producto")

  // Cambio de nombre de variable 'ti' a 'title'
  var title = document.createElement("p")
  title.classList.add("titulo")
  title.textContent = productos[i].nombre
  
  var imagen = document.createElement("img");
  imagen.setAttribute('src', productos[i].img);

  // Se reemplaza el appendChild por append para más versatilidad 
  div.append(title)
  div.append(imagen)

  lista.append(div)
}

const botonDeFiltro = document.getElementById("btnFiltro");

// Se cambia el "onclick" por un event listener
botonDeFiltro.addEventListener("click", function (event){
  event.preventDefault();
  while (lista.firstChild) {
    lista.removeChild(lista.firstChild);
  }

  let texto = inputSelect.value;
  let productosFiltrados = filtrado(productos, texto);
  productosFiltrados.forEach(productoFiltrado =>{
    // Se cambia el append por un innerHTML 
    lista.innerHTML += (` <div class="producto">
    <p class="titulo">${productoFiltrado.nombre}</p>
    <img src="${productoFiltrado.img}" alt="">
  </div>`);
  })
})

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  