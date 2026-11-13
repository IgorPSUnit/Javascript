import {formataPeriodo, formataHemisferio, formataIntensidade} from './funcoesLogicas.js';

function imprimirItemLista(chuva, index){
    let indexAjustado = String(index + 1).padStart(2, ' ');
    let nomeChuva = chuva.nome;
    let dataInicio = chuva.inicio;
    let dataFim = chuva.fim;
    let declinacao = chuva.declinacao;
    let intensidade = chuva.intensidade;

    const dataInicioFormatado = formataPeriodo(dataInicio);
    const dataFimFormatado = formataPeriodo(dataFim);
    const declinacaoFormatado = formataHemisferio(declinacao);
    const intensidadeFormatado = formataIntensidade(intensidade);
    console.log(
        indexAjustado +': '+
        nomeChuva.padEnd(27,' ').padStart(2,' ') +'- '+
        intensidadeFormatado.padEnd(11,' ') +'- '+
        declinacaoFormatado.padEnd(10,' ')+'- '+
        dataInicioFormatado+' a '+
        dataFimFormatado
    );
}

function imprimirLista(chuvas){
    let labelNomeChuva = "NOME DA CHUVA";
    let labelDeclinacao = "HEMISFÉRIO";
    let labelIntensidade = "INTENSIDADE";
    let labelPeriodo = "PERÍODO";
    console.log(
        '    '+
        labelNomeChuva.padEnd(27,' ')+
        '- '+labelIntensidade.padEnd(11,' ')+
        '- '+labelDeclinacao.padEnd(10,' ')+
        '- '+labelPeriodo
    );
    chuvas.forEach(function(chuva,index) {
        imprimirItemLista(chuva, index);
    });
}

export default imprimirLista;