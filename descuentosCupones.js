const precioOriginal = 120;
const descuento = 18;

function calcularPrecioConDescuento(precio,descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

const cupons = ["Cupon50","Cupon70","Cupon80"]


function obtenerPrecioConDescuento()
{
    const inputPrice = document.getElementById("InputPrice");
    const inputCupon = document.getElementById("InputCupon");
    const resultadoP = document.getElementById("resultadoP");
    const price = inputPrice.value;
    const cupon = inputCupon.value;
    const discount = ObtenerPorcentajeDescuentoCupon(cupon);

    if (discount==0){
        resultadoP.innerText = "CUPON NO VALIDO";
    }
    else{
        const precioConDescuento = calcularPrecioConDescuento(price,discount);
        resultadoP.innerText = "El precio con el descuento del " + discount + "% es: " + precioConDescuento;
    }        
}

function ObtenerPorcentajeDescuentoCupon(cupon){   
    let descuento = 0; 
    switch (cupon){
        case cupons[0]:
            descuento = 50;
            return descuento;
            break;
        case cupons[1]:
            descuento = 70;
            return descuento;
            break;
        case cupons[3]:
            descuento = 80;
            return descuento;
        default:
            return descuento;            
    }
}

