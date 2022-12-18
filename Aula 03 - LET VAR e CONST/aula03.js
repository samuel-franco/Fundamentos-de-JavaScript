//   Aula 03 - Fundamentos de Javascript Moderno
//  Diferença entre LET, VAR e CONST em Javascript

/* usando o "use strict" devemos declarar a variavel
 para o código funcionar */

"use strict";

function teste() {
  if (true) {
    let nome = "Silva";
    console.log("Dentro do IF do teste: " + nome);
  }
  console.log("Dentro do este: " + nome);
}

teste();
console.log("Fora do teste: " + nome); // Aqui nessa linha o código do " IF " vai apresentar erro pois
                                       // a variável foi declarada dentro do escopo da função