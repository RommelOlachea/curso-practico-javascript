const lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1
];

//se declara un array de objetos
const lista1Count = {};

//el metodo map nos va a ayudar a recorrer nuestro arreglo, al final regreso un arreglo de objetos, pero es por el ejemplo.
lista1.map(
    function(elemento){
        if (lista1Count[elemento]){
            lista1Count[elemento] += 1;
        }
        else{
            lista1Count[elemento] = 1;
        }
    }
);
                   //pasamos el arreglo de objetos, a un arreglo de arreglos ( de esto {1: 3, 2: 5, 3: 2, 4: 1} a esto [Array(2), Array(2), Array(2), Array(2)])
const listaArray = Object.entries(lista1Count).sort(function(a,b){
    return a[1] - b[1];
}
);

const moda = listaArray[listaArray.length-1][0];





