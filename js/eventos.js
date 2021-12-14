const carritoAbrir = document.getElementById ('boton-carrito');
const carritoCerrrar= document.getElementById('cerrarCarro');

const contenedorModal= document.getElementsByClassName ('modal-contenedor')[0];
const modalCarrito = document.getElementsByClassName('modal-carrito')[0];

carritoAbrir.addEventListener('click', ()=> {
    contenedorModal.classlist.toggle ('modal-active')
});

carritoCerrrar.addEventListener('click',() => {
    contenedorModal.classlist.toggle('modal-active')
});

modalCarrito.addEventListener('click',(e) => {
    e.stopPropagation()
});

contenedorModal.addEventListener('click',() => {
    carritoAbrir.click()
});