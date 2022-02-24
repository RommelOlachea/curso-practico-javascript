const lista = [
   100,
    200,
    500,
    1000,
    400000000
];

const mitadLista1 = parseInt(lista.length / 2);
function esPar(numerito){
    if (numerito % 2 === 0){
        return true;
    } else {
        return false;
    }
}

function calcularMediaAritmetica(lista){
    // let sumaLista = 0;
    // for (let i=0;i<lista.length;i++) {
    //     sumaLista += lista[i];
    // }
                                            //se le asigna 0, como valor iniciar, y el elemento del arreglo lista
    
    //antes de buscar la mediana organizamos los elementos del arreglo

    let compare = function(a,b){
        return a-b;
    };

    lista.sort(compare);

    const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento){
        return valorAcumulado + nuevoElemento;
    });

    const promedioLista1 = sumaLista / lista.length;
    return promedioLista1;
}


let mediana;

if(esPar(lista.length)){
    const elemento1 = lista[mitadLista1-1];
    const elemento2 = lista[mitadLista1];
    const promedioElemento1y2 = calcularMediaAritmetica([elemento1,elemento2]);
    mediana = promedioElemento1y2;
} else {
    mediana  = lista[mitadLista1];
}

