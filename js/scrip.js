let opcion = parseInt(prompt('Elegir un producto \n1-JABÓN DE ALMENDRA $ 1500 .\n2-JABÓN DE COCO, NARANJA Y ROMERO $1700 .\n3-JABÓN DE CHOCOLATE Y ALMENDRA $ 1600. \n4-JABÓN DE VAINILLA $ 1800 \n0-Finalizar compra.'));
let seleccionarCantidad;
let total = 0;

const cantidad = (cant, precio) => {
    return cant * precio
}

while (opcion != 0) {
    switch (opcion) {
        case 1:
            seleccionarCantidad = parseInt(prompt('el producto seleccionado es JABÓN DE ALMENDRA, indique la cantidad'))
            total += cantidad(seleccionarCantidad, 1500)
            break;
        case 2:
            seleccionarCantidad = parseInt(prompt('el producto seleccionado es JABÓN DE COCO, NARANJA Y ROMERO, indique la cantidad'))
            total += cantidad(seleccionarCantidad, 1700)
            break;
        case 3:
            seleccionarCantidad = parseInt(prompt('el producto seleccionado es JABÓN DE CHOCOLATE Y ALMENDRA, indique la cantidad'))
            total += cantidad(seleccionarCantidad, 1600)
            break;
        case 4:
            seleccionarCantidad = parseInt(prompt('el producto seleccionado es JABÓN DE VAINILLA , indique la cantidad'))
            total += cantidad(seleccionarCantidad, 1800)
            break;

        default:
            break;
    }
    opcion = parseInt(prompt('\n1-JABÓN DE ALMENDRA $ 1500 .\n2-JABÓN DE COCO, NARANJA Y ROMERO $1700 .\n3-JABÓN DE CHOCOLATE Y ALMENDRA $ 1600. \n4-JABÓN DE VAINILLA $ 1800 \n0-Finalizar compra.'));
}
alert('el total de la compra es de: ' + total);

alert('Gracias por su compra');