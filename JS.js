//CONECTAR COM API DO DOLAR SIMULANDO NO-SQL

fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL").then(resposta=> {
    return resposta.json()
}).then(economia => {
    console.log(economia)
document.getElementById('ValorDolar').innerHTML = "R$" + economia.USDBRL.bid

})