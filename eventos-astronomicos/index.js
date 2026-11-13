// Requisitos:
// A aplicação terá que conter todos os dados das chuvas de meteoros, para que possa gerar as listas.
// A aplicação deve exibir uma lista com as chuvas que podem ser vistas hoje.
// Caso não tenha chuvas para serem vistas hoje, uma mensagem definida pelo cliente deve ser impressa.
// A aplicação deve exibir outra lista com as chuvas que poderão ser vistas nos próximos 2 meses.
// Os dados exibidos em cada lista devem ser: nome, intensidade, hemisfério e período em que ela vai passar.

import dados from "./data/dados.js";
import {verificaChuvasHoje, verificaChuvasProximas} from './funcoes/funcoesLogicas.js';
import imprimirLista  from "./funcoes/funcoesInterface.js";

const dataHoje = new Date();

console.log("Chuva de meteoros\n")

// Executando e exibindo os resultados
const chuvasHoje = verificaChuvasHoje(dados, dataHoje);
const chuvasProximas = verificaChuvasProximas(dados, dataHoje);

if (chuvasHoje.length > 0) {
    if(chuvasHoje.length == 1){
        console.log("Encontramos 1 chuva de meteoros que pode ser vista hoje:\n");
    }else{
        console.log("Encontramos "+ chuvasHoje.length+" chuvas de meteoros que pode ser vista hoje:\n");
    }
    imprimirLista(chuvasHoje);
} else {
    console.log("Nenhuma chuva de meteoros passando no momento.\n");
}

console.log("\nNão perca as próximas chuvas de meteoros: \n");
imprimirLista(chuvasProximas);