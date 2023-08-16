class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        var preçoTotal = retornarPreçoTotal(itens)
        var msg

        if(itens.length == 0 || itens == null){
            msg = "Não há itens no carrinho de compra!"
        } else {
                switch(metodoDePagamento) {
                    case 'debito':
                        break;
        
                    case 'dinheiro':
                        preçoTotal = preçoTotal - (preçoTotal * 0.05)
                        msg = `R$ ${preçoTotal}`
                        preçoTotal.ToFixed(2)
                        break;
        
                    case 'credito':
                        preçoTotal = preçoTotal + (preçoTotal * 0.03)
                        msg = `R$ ${preçoTotal}`
                        preçoTotal.ToFixed(2)
                        break;
        
                    default:
                        msg =  "Forma de pagamento inválida!"
                        break;
                }
                
                
        }

        return msg.replace('.', ',');
    }

}

function retornarPreçoTotal(itens){

    var precoTotal

    for (var i = 0; i < itens.length; i++) {
        var partes = itens[i].split(',');
        var nomeItem = partes[0];
        var quantidade = parseInt(partes[1]);
        var preco = retornaPreço(nomeItem);


        precoTotal + (preco * quantidade);
    }

    return precoTotal;
}

function retornaPreço(nomeItem){
    switch (nomeItem) {
        case 'cafe':
            return 3
        case 'chantily':
            return 1.5
        case 'suco':
            return 6.2
        case 'sanduiche':
            return 6.5
        case 'queijo':
            return 2
        case 'salgado':
            return 7.25
        case 'combo1':
            return 9.5
        case 'combo2':
            return 7.5
        default:
            return 0
    }
}

export { CaixaDaLanchonete };
