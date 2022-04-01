let carrito = [];
const contenedorProductos= document.getElementById ('contenedor-productos');
const contenedorCarrito= document.getElementById('carrito-container');

const contadorCarrito= document.getElementById('contadorContainer');
const total= document.getElementById('totalContainer');

const selectorProducto= document.getElementById ('Selector');

mostrarProductos(productosTienda);

function mostrarProductos (array){

    array.forEach(element => {
        let div = document.createElement('div')
        div.classList.add('producto')
        div.innerHTML += 
                        `<div class="card" style="width: 18rem;">
                        <img src=${element.img} class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">${element.nombre}</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a id="boton${element.id}" class="btn btn-primary">Go somewhere</a>
                        </div>
                        </div>`
    contenedorProductos.appendChild(div)

    let boton= document.getElementById(`boton${element.id}`)
    boton.addEventListener('click', () =>{
        agregarAlCarro(`${element.id}`);
    })
}); 
}


function agregarAlCarro(id){
    let agregar= productosTienda.find(elemento => elemento.id ==id);
    carrito.push(agregar);
    
    let div=document.createElement('div');
    div.classList.add('articuloEnCarro');
    div.innerHTML = `            <p>${agregar.nombre}</p>
                                 <p>$${agregar.precio}</p>
                                 <button  class="btn" id="btn-eliminar${agregar.id}"></button>`;
                                 
    carrito-contenedor.appendChild(div);
    carrito=carrito.filter(elemento => elemento.id != agregar.id)
}

  
 










/* esto es otro asunto */
/* let botonAgregar= document.getElementById ("boton");

botonAgregar.addEventlistener('click'), () => {
    console.log("Formulario enviado")
};

InputEvent.addEventlistener('input',()=>{
    console.log()
}) */