//Se unifica toda la URL en una variable para mejor manejo

const usersEndpoint = 'https://api.github.com/users';

/* Se cambia el nombre de las variables por uno más comprensivo y se cambia el método de
traerlos del HTML */

const nombre = document.getElementById('name');
const blog = document.getElementById('blog');
const address = document.getElementById('address')
// Se borra location porque no se usará

// Se unen las dos funciones en una sola
function displayUser(username) {
  fetch(`${usersEndpoint}/${username}`)
  .then(data => data.json()) // Se convierten los datos a json
  .then(data =>{
    nombre.innerHTML = data.name;
    blog.innerHTML = data.blog;
    blog.setAttribute("href", data.blog);
    address.innerHTML = data.location;
    //
  }).catch(error => {
    console.log('OH NO');
    console.log(error);
    nombre.textContent = `Algo salió mal: ${error}`
  });
}

displayUser('stolinski');