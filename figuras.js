// Codigo del cuadrado
console.group("Cuadrados")

const ladoCuadrado = 5;
console.log("El lado del cuadrado es: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");

console.groupEnd();

// Código del triangulo
console.group("Triángulo");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log("Los lados del triángulo miden: " + ladoTriangulo1 + " cm, " + ladoTriangulo2 + " cm, y la base del triángulo  mide " + baseTriangulo + " cm");
console.log("La altura del triángulo es de: " + alturaTriangulo);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triángulo es: " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo)/2;
console.log("El área del triángulo es: " + areaTriangulo + "cm^2");

console.groupEnd();


// Código del círculo
console.group("Círculo");

//radio
const radioCirculo = 4;

//Diámetro
const diametroCirculo = radioCirculo * 2;

//PI
const PI = Math.PI;

//Circunferencia
const perimetroCirculo = diametroCirculo * PI;

//Área
const areaCirculo = PI * (radioCirculo*radioCirculo);

console.log("El valor de PI es: " + PI);
console.log("El radio del círculo es: " + radioCirculo + " cm");
console.log("El diámetro del círculo es: " + diametroCirculo + " cm");
console.log("La circunferencia del círculo es: " + perimetroCirculo + " cm");
console.log("El área del círculo es: " + areaCirculo + " cm^2");

console.groupEnd();


