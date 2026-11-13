
function preparaDatasChuva(chuva, dataReferencia) {
  const anoAtual = dataReferencia.getFullYear();
  const [mesInicio, diaInicio] = chuva.inicio.split('/');
  const [mesFim, diaFim] = chuva.fim.split('/');

  let dataInicio = new Date(anoAtual, mesInicio - 1, diaInicio, 0, 0, 0);
  let dataFim = new Date(anoAtual, mesFim - 1, diaFim, 23, 59, 59);

  if (dataFim < dataInicio) {
    
    if (dataReferencia.getMonth() < (mesFim - 1)) {
      dataInicio.setFullYear(anoAtual - 1);
    } else {
      dataFim.setFullYear(anoAtual + 1);
    }
  }

  return { dataInicio, dataFim };
}

function verificaChuvasHoje(dados, dataAtual) {
  return dados.filter((chuva) => {
    const { dataInicio, dataFim } = preparaDatasChuva(chuva, dataAtual);
    return dataAtual >= dataInicio && dataAtual <= dataFim;
  });
}

function verificaChuvasProximas(dados, dataAtual) {
  const dataLimite = new Date(dataAtual);
  dataLimite.setMonth(dataLimite.getMonth() + 2);
  return dados.filter((chuva) => {
    let { dataInicio } = preparaDatasChuva(chuva, dataAtual);
    if(dataInicio <dataAtual){
      dataInicio.setFullYear(dataInicio.getFullYear() + 1);
    }
    return dataInicio > dataAtual && dataInicio <= dataLimite;
  });
}

function formataIntensidade(intensidade){
  let intensidadeFormatada = "1 (Fraca)";
  intensidade = intensidade.split(' ')[0];
  switch(intensidade){
    case "Fraca":
      intensidadeFormatada = "1 (Fraca)"
      break;
    case "Média":
      intensidadeFormatada = "2 (Média)"
      break;
    case "Forte":
      intensidadeFormatada = "3 (Forte)"
      break;
    case "Irregular":
      intensidadeFormatada = "Irregular"
      break;
    default:
      console.log("Chegamos no default");
      intensidadeFormatada = "1 (Fraca)"
  }
  return intensidadeFormatada;
}

function formataHemisferio(hemisfério){
  let hemisférioRetorno = "Equador"
  if(hemisfério >= 0){
    hemisférioRetorno = "Norte";
  }else{
    hemisférioRetorno = "Sul";
  }
  return hemisférioRetorno;
}

function formataPeriodo(data){
  const [mes, dia]= data.split('/');
  //Antes a data estava : mês/dia
  return dia+'/'+ mes;;
}

export {verificaChuvasHoje, verificaChuvasProximas, formataHemisferio, formataIntensidade, formataPeriodo};