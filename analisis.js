// HELPERS
function calcularMediaAritmetica(lista){
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



function esPar(numero){
    return (numero % 2 == 0);
}


const salariosCol = colombia.map(
    function (persona)
    {
        return persona.salary;
    }
    );
    
const salariosColSorted = salariosCol.sort(
    function(salaryA,salaryB)
    {
        return salaryA-salaryB;
    }
);

//CALCULO DE LA MEDIANA
function mediaSalarios(lista){
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)){
        const personaMitad1 = lista[mitad-1];
        const personaMitad2 = lista[mitad];
        const mediana = calcularMediaAritmetica([personaMitad1,personaMitad2]);
        return mediana;
    } else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

//MEDIANA GENERAL
const medianGeneral = mediaSalarios(salariosColSorted);
//MEDIANA TOP 10%
const spliceStart = (salariosColSorted.length * 90)/100; //obtenemos la posición que indica el inicio del 90%
const spliceEnd = salariosColSorted.length - spliceStart;




const salariosTop10 = salariosColSorted.splice(spliceStart, spliceEnd);
const medianaTop10 = mediaSalarios(salariosTop10);




console.log(medianGeneral);
console.log(medianaTop10);