const bombones = [ 
    {articulo:"bombones", precio: 850, stock: 5},
    {articulo:"surtidos", precio: 850, stock: 12},
    {articulo:"personalizados", precio: 1150, stock: 6},
    {articulo:"box", precio: 950, stock: 10},
    {articulo:"frutinellas", precio: 1250, stock: 20},
    {articulo:"drips", precio: 300, stock: 8}
]
const desayunos= [
    {articulo:"Desayuno simple", precio:1300},
    {articulo:"Desayuno personalizado", precio:1300},
    {articulo:"Desayuno grande", precio:1300}
]

const golosinas= [
    {articulo:"Osito de gomitas chico", precio:500},
    {articulo:"Osito de gomitas grande", precio:1300},
    {articulo:"Box de gomitas surtidas", precio:1000},
    {articulo:"Box de golosinas", precio:1100}
]


let productos= "";
desayunos.forEach(listaDeProductos);
document.getElementById("productosHtml").innerHTML= productos;

function listaDeProductos(articulo, precio){
    productos=+ articulo + precio;
}


