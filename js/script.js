//localStorage.setItem("nombre", "Data")
//localStorage.getItem("nombre")
//localStorage.removeItemItem("nombre")
//localStorage.clear()

// Cuando refresco la página tiene que añadir +1 a la visita V
// ponemos el dato id contadorVisitas V
// este es el botón que reestablece los datos a 0 id btnReestablecer



const contadorVisitas = document.getElementById("contadorVisitas")
const btnReestablecer = document.getElementById("btnReestablecer")
let visita = localStorage.getItem("visita") || 0


function addVisit () {
  visita++
  // console.log(visita)
  contadorVisitas.innerText = visita
}

addVisit()

btnReestablecer.addEventListener("click", () => {
  // localStorage.setItem("visita", 0)
  localStorage.removeItem("visita")
  //localStorage.clear()
  contadorVisitas.innerText = visita
})


localStorage.setItem("visita", visita)
localStorage.setItem("nombre", "Data")


//JSON.stringify("DATOS") // pasar los datos a texto/string
//JSON.parse("DATOS") // pasear los datos de string a un JSON

const btnGuardar = document.getElementById("btnGuardar")
const btnLeer = document.getElementById("btnLeer")
const listaUsuarios = document.getElementById("listaUsuarios")

const usuarios = [
  {nombre: "Data", edad:28},
  {nombre: "Reyes", edad:27},
  {nombre: "Carlos", edad:42},
  {nombre: "cocreta", edad:1000}
]

btnGuardar.addEventListener("click", () => {
  localStorage.setItem("usuarios", JSON.stringify(usuarios))
})

btnLeer.addEventListener("click", () => {
  const datos = localStorage.getItem("usuarios")
  const usuariosGuardados = JSON.parse(datos)
  console.log(usuariosGuardados)
  usuariosGuardados.forEach(usuario => {
    const { nombre, edad } = usuario
    listaUsuarios.innerHTML += `
    <li>
    <h2>Nombre: ${nombre}</h2>
    <p>Edad: ${edad}</p>
    </li>
    `
  });


})


