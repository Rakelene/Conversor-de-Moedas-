function Converter () {
    let valorElemento = document.getElementById("valor")
    let valor = valorElemento.value;
    let valorEmDolarNumerico = parseFloat(valor);
    
    let valorEmReal = valorEmDolarNumerico * 5;
    console.log(valorEmReal);
    
    let elementoValorConvertido = document.getElementById ("valorConvertido");
    
    var valorConvertido = "O resultado em real é R$ " + valorEmReal;
    elementoValorConvertido.innerHTML = valorConvertido;
  }