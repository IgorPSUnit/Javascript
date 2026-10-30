import leituraDeDados from 'readline-sync'

const escolhePalavra = (listaDePalavras) => {
    return listaDePalavras[Math.floor(Math.random() * listaDePalavras.length)];
}

const ocultaPalavra = (palavraEscolhida) =>{
    let primeiraLetra = palavraEscolhida[0]
    let underline = "_".repeat(palavraEscolhida.length - 1)
    return primeiraLetra + underline
}

function atualizarPalavraOculta(palavraOculta, letraDigitada, palavraEscolhida) {
  let palavraOcultaArray = palavraOculta.split('')

  for (let i = 0; i < palavraEscolhida.length; i++) {
    if (letraDigitada === palavraEscolhida[i]) {
      palavraOcultaArray[i] = letraDigitada
    }
  }

  return palavraOcultaArray.join('')
}

function verificaLetraDigitada(palavraEscolhida, letraDigitada){
  for (let i = 0; i < palavraEscolhida.length; i++) {
    if (letraDigitada === palavraEscolhida[i]) {
      return true;
    }
  }
}

function validarLetraDigitada(letraDigitada){
  if(letraDigitada.length === 1 && letraDigitada.match(/[a-z]/)){
    return true
  } else {
    return false
  }
}

function jogoDaForca(listaDePalavras){
  let palavraEscolhida = escolhePalavra(listaDePalavras);
  let palavraOculta = ocultaPalavra(palavraEscolhida);
  let chances = 4;
  let statusJogo = 'andamento';

  console.log("Nome da fruta com "+ palavraEscolhida.length +" letras:");
  console.log(`\nFruta: ${palavraOculta}`);

  while (statusJogo === 'andamento') {
  //console.log(`\nFruta: ${atualizarPalavraOculta}`);
  const letraDigitada = leituraDeDados.question("Digite uma letra: ").toLowerCase();

  /* A lógica do jogo entrará aqui */
    if(validarLetraDigitada(letraDigitada)){
      if(verificaLetraDigitada(palavraEscolhida, letraDigitada)){
        palavraOculta = atualizarPalavraOculta(palavraOculta, letraDigitada, palavraEscolhida)
        console.log(`\nFruta: ${palavraOculta}`);
        if( palavraOculta === palavraEscolhida){
          console.log("--------------VOCÊ VENCEU!!-------------");
          console.log("Você acertou o nome da fruta: "+ palavraEscolhida);
          statusJogo = 'venceu';
        }
      }else{
        chances--
        console.log("OPÇÃO ERRADA! Você ainda tem "+ chances +" chance(s)!");
        if(chances === 0){
          console.log("--------------VOCÊ PERDEU!!-------------");
          console.log("A palavra certa é: "+ palavraEscolhida);
          statusJogo = 'perdeu';
        }
      }
    } else {
      console.log("\nPor favor, digite uma letra válida.");
    }
  }
}

export default jogoDaForca;
