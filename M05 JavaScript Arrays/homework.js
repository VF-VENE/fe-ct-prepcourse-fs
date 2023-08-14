/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0];
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[array.length - 1]; //cuidado con la palabra lenght
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   var ArrayIncrementado = [] 
   for (var i=0 ; i < array.length ; i++ ) {
ArrayIncrementado.push(array[i] + 1); 
   } return ArrayIncrementado;
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push (elemento);
   return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift (elemento);
   return array;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   return palabras.join (" "); //junta (join) las palabras con un espacio " "

}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   return array.includes (elemento);
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   var acumulador = 0;
   for (var i =0 ; i < arrayOfNums.length ; i++){
      acumulador = acumulador + arrayOfNums[i]
   } return acumulador;
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números. ej:[9, 8 , 9]
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
    var acumulador = 0
    for (i=0; i < resultadosTest.length ; i++) {
      acumulador = acumulador + resultadosTest [i] //sumatoria. "i" indica cada uno de los num
    };
    const promedio = acumulador / resultadosTest.length; //no te olvides que .length sirve para decir la CANTIDAD de elementos
    return promedio;
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código: // [1,3 ,9 ,7]
   var cajita = 0
   for (i=0; i < arrayOfNums.length ; i++) {
      if (arrayOfNums[i]> cajita) 
      {cajita = arrayOfNums[i];}
   } return cajita;
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   var acumulador = 1;
   if (arguments.length === 0) {
      return 0;}
   else if (arguments.length === 0) {
      return arguments;
   }
   else {
      for (i=0; i< arguments.length ; i++) {
         acumulador = acumulador * arguments [i] 
      }
   } return acumulador; 
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18. 
   //retornar todos los elementos que sean mayores a 18 [4, 78, 18, 33, 0, ...]
   // Tu código:
   var acumulador = 0 //aca va juntar la cantidad de numeros
   for (i=0; i< array.length; i++) {
      if (array[i]> 18) {
         acumulador = acumulador + 1 //SE PUEDE ESCRIBIR COMO acumulador += 1. 
         //por cada numero que cumpla con la condicion se le va a sumar 1
      }
   } return acumulador;
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if (numeroDeDia === 1 || numeroDeDia === 7) {
      return "Es fin de semana";
   } else if (numeroDeDia > 1 && numeroDeDia < 7) {
      return "Es dia laboral";}
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   var numStr = num.toString (); //convertir el numero en un string.
   // con esto se puede tratar cada numero de forma individual como si fuera un arreglo
   if (numStr[0] === "9") { //poner entre "" porque se esta hablando de un string
      return true
   } else {return false}
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   for (i=0; i< array.length - 1; i++) {
      if (array[i] !== array[i+1]) {
         return false
      } else return true;
   }
} //si en todas las vueltas que da el bucle, se encuentra un elemento diferente. 
//es condicon suficiente para que no se cumpla la igualdad. 
//si por el contrario, no se encuentra ningun elemento diferente. el false no se ejecuta y en cambio se ejecuta el else

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   var NuevoArray = [];
   for (i=0; i < array.length; i++) {
      if (array[i]=== "Enero" || array[i]=== "Marzo" ||array[i]=== "Noviembre") {
         NuevoArray.push (array[i]);} //se agrega lo que esta entre () a lo que tiene .push
   } 
   if (NuevoArray.length === 3) {return NuevoArray;} 
   else {return "No se encontraron los meses pedidos";}
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
  var tablaDelSeis= [];
  for (i=0; i<= 10; i++) {
   var resultado= i * 6;
  tablaDelSeis.push (resultado);}
  return tablaDelSeis
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   var mayorACien = [];
   for (i=0; i < 200; i++) {
     if (array[i]> 100) { //"array[i]" sirve para indicar el ELEMENTO
     mayorACien.push (array[i]);
   }
     } return mayorACien;         
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   var nuevoValor = [];
   for (i=0; i < 10; i++) 
   {
      num = num +2;
    nuevoValor.push (num);
   if (num === i) {return "Se interrumpió la ejecución";} 
   //no es necesario el break porque el mismo return ya lo interrumpe.
   }
   return nuevoValor; //no hace falta el "else" porque el if esta dentro del bucle for.
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   var nuevoValor = [];
   for (i=0; i < 10; i++) 
   { if (i === 5) {continue}
      num = num +2;
    nuevoValor.push (num);
} return nuevoValor;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
