console.group("Cuadrado");

const perCua = (lado) => lado * 4;

function perimetroCuadrado(lado){
    return lado * 4; 
}

function areaCuadrado(lado){
    return lado * lado;
}
console.groupEnd();


console.group("Triangulo");

function perimetroTriangulo(ladoTriangulo1,ladoTriangulo2,baseTriangulo){
    return ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
}

function areaTriangulo(baseTriangulo, alturaTriangulo){
    return (baseTriangulo * alturaTriangulo) / 2;
}
console.groupEnd();

console.group("Circulo");

function diametroCirculo(radioCirculo){
    return radioCirculo * 2;
}

function perimetroCirculo(radioCirculo){
    return diametroCirculo(radioCirculo) * Math.PI;
}

function areaCirculo(radioCirculo){
    return Math.PI * (radioCirculo * radioCirculo);
}

console.groupEnd();