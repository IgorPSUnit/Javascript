// Requisitos:

// O usuário da aplicação deve escolher uma dentre três opções:
// Listar o histórico do salário mínimo
// Listar o histórico da taxa IPCA (inflação)
// Comparar e listar a porcentagem de crescimento salarial com a inflação(IPCA)
// Ao escolher a opção 1 a aplicação deve acessar e listar o histórico do salário mínimo entre 2010 e 2020. Os dados necessários devem estar no código da aplicação.
// Ao escolher a opção 2 a aplicação deve acessar e listar o histórico da inflação entre 2010 e 2020. Os dados da inflação também devem estar no código da aplicação.
// Ao escolher a opção 3 a aplicação deve listar o histórico de 2010 a 2020 do salário mínimo e da inflação. Além disso, na opção 3 deve ser calculado o percentual de crescimento do salário mínimo.
// O percentual de crescimento é calculado com base na diferença entre o salário do ano e do ano anterior, dessa forma, o percentual de crescimento só deve ser apresentado a partir de 2011.
// Cálculo do percentual de crescimento:

// diferenca = salarioAtual - SalarioAnterior;
// crescimentoSalarial = (diferenca / salarioAnterior) * 100;

// Exemplo prático considerando que:

// salário de 2010 = R$ 510
// Salário de 2011 = R$ 545

// diferenca = 545 - 510;
// crescimentoSalarial = (diferenca / 510) * 100;
// crescimentoSalarial = 6.86%;

// O valor da inflação (IPCA) já é dado em porcentagem, portanto, não precisa ser calculado
// Os dados devem ser formatados com o seguinte padrão:
// Valores monetários devem ser precedidos por R$
// Valores monetários devem ter duas casas decimais, ainda que o valor dos decimais seja 0. Ex.: R$ 599,00
// Valores percentuais devem ter o símbolo % após os números
// O separador decimal utilizado deve ser a vírgula (,) e não o ponto (.)
// A aplicação deve exibir o resultado na tela e encerrar o processamento, sendo necessário executá-la novamente para escolher uma nova opção.
import entradaDados from 'readline-sync';

let salarios = [
    {ano:2010 , salario: 510.00},
    {ano:2011 , salario: 545.00},
    {ano:2012 , salario: 585.80},
    {ano:2013 , salario: 599.99},
    {ano:2014 , salario: 620.00},
    {ano:2015 , salario: 680.90},
    {ano:2016 , salario: 710.80},
    {ano:2017 , salario: 770.70},
    {ano:2018 , salario: 850.60},
    {ano:2019 , salario: 900.50},
    {ano:2020 , salario: 950.00},
    {ano:2021 , salario: 975.50},
    {ano:2022 , salario: 1050.00},
    {ano:2023 , salario: 1150.80},
    {ano:2024 , salario: 1220.00},
    {ano:2032 , salario: 1300.60},
    {ano:2026 , salario: 1432.32},
];

let inflacoes = [
    {ano:2010 , ipca: 5.91},
    {ano:2011 , ipca: 6.50},
    {ano:2012 , ipca: 5.84},
    {ano:2013 , ipca: 5.91},
    {ano:2014 , ipca: 6.41},
    {ano:2015 , ipca: 0.67},
    {ano:2016 , ipca: 6.29},
    {ano:2017 , ipca: 2.95},
    {ano:2018 , ipca: 3.75},
    {ano:2019 , ipca: 4.31},
    {ano:2020 , ipca: 4.52},
    {ano:2021 , ipca: 5.55},
    {ano:2022 , ipca: 3.28},
    {ano:2023 , ipca: 4.23},
    {ano:2024 , ipca: 5.80},
    {ano:2032 , ipca: 6.33},
    {ano:2026 , ipca: 7.56},
];

console.log("Escolhe uma das opções do menu: ");

console.log("1 - Listar os  salários minímos de 2010 a 2026");
console.log("2 - Listar o índice IPCA de 2010 a 2026");
console.log("3 - Comparação entre o percentual de aumento salarial e o IPCA");

let escolha = entradaDados.question("Qual a opcao escolhida: ");
console.log("\n");

if(escolha == 1){
    for(let i = 0; i < salarios.length; i++){
        let ano = salarios[i].ano;
        let salario = salarios[i].salario;
        let label_ano = "Ano: ";
        let label_salario = "Salário mínimo: ";
        salario = salario.toFixed(2).replace(".",",");
        console.log(label_ano.padEnd(32, ".") + ano);
        console.log(label_salario.padEnd(32, ".") +"R$ "+salario+"\n")
    }
}else if(escolha == 2) {
    for(let i = 0; i < inflacoes.length; i++){
        let ano = inflacoes[i].ano;
        let ipca = inflacoes[i].ipca;
        let label_ano = "Ano: ";
        let label_ipca = "IPCA: ";
        ipca = ipca.toFixed(2).replace(".",",") ;
        console.log(label_ano.padEnd(32, ".") + ano);
        console.log(label_ipca.padEnd(32, ".") +ipca+"%\n")
    }
}else if(escolha == 3){
    for(let i = 0; i < salarios.length; i++){
        let ano = salarios[i].ano;
        let salario = salarios[i].salario;
        let salarioFormatado = salario.toFixed(2).replace(".",",");
        let ipca = inflacoes[i].ipca;
        ipca = ipca.toFixed(2).replace(".",",") ;
        let label_ano = "Ano: ";
        let label_salario = "Salário mínimo: ";
        let label_ipca = "IPCA: ";
        console.log(label_ano.padEnd(32, ".") + ano);
        console.log(label_salario.padEnd(32, ".") +"R$ "+salarioFormatado);
        let salarioAnterior = 0;
        let diferenca = 0;
        let crescimento = 0;
        let label_crescimento = "Crescimento Salarial: ";
        if(i===0){
            console.log(label_crescimento.padEnd(32, ".") + "-");
        }else{
            salarioAnterior = salarios[i-1].salario;
            diferenca = salario - salarioAnterior;
            crescimento = (diferenca/salarioAnterior)*100;
            console.log(label_crescimento.padEnd(32, ".") + crescimento.toFixed(2).replace(".",",")+"%\n");
        };
        console.log(label_ipca.padEnd(32, ".") +ipca+"%\n");
    }
}else {
    console.log("Opção inválida!");
};