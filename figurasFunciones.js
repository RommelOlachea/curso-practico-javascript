console.group("Cuadrado");

const perCua = (lado) => lado * 4;

function perimetroCuadrado(lado){
    return lado * 4; 
}

function areaCuadrado(lado){
    return lado * lado;
}

//INTERACTUAMOS CON HTML, CUADRADO
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}

console.groupEnd();


console.group("Triangulo");

function perimetroTriangulo(ladoTriangulo1,ladoTriangulo2,baseTriangulo){
    return  parseFloat(ladoTriangulo1) + parseFloat(ladoTriangulo2) + parseFloat(baseTriangulo);
}

function areaTriangulo(baseTriangulo, alturaTriangulo){
    return (baseTriangulo * alturaTriangulo) / 2;
}

//INTERACCION CON HTML TRIANGULO
function calculaPerimetroTriangulo(){
    const ladoA =  document.getElementById("LadoAtriangulo");
    const valueA = ladoA.value;
    const ladoB =  document.getElementById("LadoBtriangulo");
    const valueB = ladoB.value;
    const base =  document.getElementById("Basetriangulo");
    const valueBase = base.value;

    const perimetro = perimetroTriangulo(valueA,valueB,valueBase);
    alert(perimetro);     
}

function calculaAreaTriangulo(){
    const base =  document.getElementById("Basetriangulo");
    const valueBase = base.value;
    const altura = document.getElementById("Alturatriangulo");
    const valueAltura = altura.value;

    const area = areaTriangulo(valueBase,valueAltura);
    alert(area);     
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

function calculaCircunferencia(){
    const radio = document.getElementById("radio");
    const valueRadio = radio.value;
    const circunferencia = perimetroCirculo(valueRadio);
    alert(circunferencia);
}

function calculaAreaCirculo(){
    const radio = document.getElementById("radio");
    const valueRadio = radio.value;
    const area = areaCirculo(valueRadio);
    alert(area);

}

console.groupEnd();

console.group("TrianguloIsosceles")

function alturaIsosceles(lado,base){
  return Math.sqrt((lado*lado)-((base*base)/4))
}

function calculaAlturaIsosceles(){
    const ladoA = document.getElementById("LadoA");
    const ladoB = document.getElementById("LadoB");
    const baseT = document.getElementById("Base");
    const valueA = ladoA.value;
    const valueB = ladoB.value;
    const base = baseT.value;    
    //validamos que se trate de un triangulo isosceles
    if (valueA!=valueB){
        alert("No es un triangulo isósceles");
    }
    else{
        const altura = alturaIsosceles(valueA,base);
        alert(altura);
    }


}



console.groupEnd();