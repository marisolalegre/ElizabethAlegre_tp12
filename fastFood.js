function callback (a, b , c, d, e, f, g, h, i){
    let resultado=(a+b+c) +(d +e + f + g + h +i);
 return resultado;}
 let total= callback();
 console.log("El total a pagar es:" + total)

 function fastFood(nombre, apellido, callback){
    let nombre= (nombre +apellido + callback);
    return fastFood;
 };
 let mensaje = fastFood(carne,true, false, false, true, true, false, true, false)
console.log(mensaje)