let tabela = [
    {equipe: 'Time Azul', pontos: 25 },
    {equipe: 'Time Verde', pontos: 47 },
    {equipe: 'Time Amarelo', pontos: 39 },
    {equipe: 'Time Vermelho', pontos: 16 },
];//Array de objetos

function ordenaMaisPontos(a, b){
    return b.pontos - a.pontos;
}//A ordenação conta com a função determinando a regra de uso do sort
//Nesse caso a regra padrão de ordenação decrescente.

tabela.sort(ordenaMaisPontos);//Ordenaçào do array

for(let i = 0; i < tabela.length; i++)
{
    let posicao = i+1;
    console.log(posicao+" | "+tabela[i].equipe+" - "+tabela[i].pontos+" pts");
}//Exibição dos dados ordenados