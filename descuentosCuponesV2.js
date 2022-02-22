function calcularPrecioConDescuento(precio,descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

const coupons = [
    {
        name : "Cupon50",
        discount : 50
    },
    {
        name : "Cupon70",
        discount : 70
    },
    {
        name : "Cupon80",
        discount : 80
    }
];


function obtenerPrecioConDescuento()
{    
    const inputPrice = document.getElementById("InputPrice");
    const inputCupon = document.getElementById("InputCupon");
    const resultadoP = document.getElementById("resultadoP");
    const price = inputPrice.value;
    const couponValue = inputCupon.value;
    
    const isCouponValueValid = function (coupon) {
        return coupon.name === couponValue;
    };

    const userCoupon = coupons.find(isCouponValueValid);
    if (!userCoupon){
        resultadoP.innerText = "Cupon no valido";
    }
    else{
        const descuento = userCoupon.discount;
        const precioConDescueto = calcularPrecioConDescuento(price,descuento);
        resultadoP.innerText = "El precio final con el " + descuento + "% es de: " + precioConDescueto;        
    }   
}


