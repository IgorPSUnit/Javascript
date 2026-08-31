// Requisitos:

// O usuário da aplicação deve informar o valor da dívida e o número de dias que ela se encontra em atraso.
// O valor da dívida deve ser maior que zero, caso contrário, a aplicação deve informar ao usuário do problema e encerrar
// O número de dias nos ajuda a determinar a taxa de juros.
// Dívidas com mais de 15 dias de atraso tem uma taxa de 10% de juros aplicada sobre o valor da dívida, já as dívidas com menos de 15 dias de atraso tem uma taxa de apenas 5% de juros sobre o valor da dívida.
// Os juros só devem ser aplicados, se houver ao menos um dia de atraso, do contrário, o usuário é considerado "em dia" e a aplicação deve ser encerrada com uma mensagem de aviso.

import leitorDeDados from 'readline-sync'

let valorDevido
let diasDevido
let taxaJuros
let valorJuros
let valorTotalDivida

valorDevido = leitorDeDados.question("Informe o valor devido: ")
if(valorDevido > 0){
    diasDevido = leitorDeDados.question("Informe quantos dias se passaram desde o vencimento do boleto: ")
    if(diasDevido>0){
        if(diasDevido > 15){
            taxaJuros = 10
            valorJuros = (valorDevido/100) * taxaJuros;
        }else{
            taxaJuros = 5
            valorJuros = (valorDevido/100) * taxaJuros;
        }
        valorTotalDivida = Number(valorDevido) + Number(valorJuros);

        console.log("Valor original da divida: "+ valorDevido)
        console.log("Dias atrasados: "+ diasDevido)
        console.log("Taxa de Juros: "+ taxaJuros+ "%")
        console.log("Valor total com juros: R$ "+valorTotalDivida)
    }else{
        console.log("Você está em dia!")
}
}else{
    console.log("O valor da dívida deve ser maior que zero!")
}


