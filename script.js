/* Cadastrar Cliente */
const cadCliente = document.querySelector('#cadCliente')

cadCliente.addEventListener('click', () => {

    let nome = document.querySelector('#nome').value
    let sobrenome = document.querySelector('#sobrenome').value
    let email = document.querySelector('#email').value
    let senha = document.querySelector('#senha').value
    
    let dadosCliente = {
        
        nome,
        sobrenome,
        email,
        senha
        
    }

    let convertDadosCliente = JSON.stringify(dadosCliente);

    if (localStorage.idClienteAtual) {
        localStorage.idClienteAtual = Number(localStorage.idClienteAtual) + 1;
        localStorage.setItem(`Cliente: ${localStorage.idClienteAtual}`, convertDadosCliente);
    }else {
        localStorage.idClienteAtual = 1;
        localStorage.setItem(`Cliente: ${localStorage.idClienteAtual}`, convertDadosCliente);
    }

    document.querySelector('#formCliente').reset();

})

/* Cadastrar Produto */
const cadProduto = document.querySelector('#cadProduto')

cadProduto.addEventListener('click', () => {

    let origem = document.querySelector('#origem').value
    let destino = document.querySelector('#destino').value
    let data = document.querySelector('#data').value
    let quarto = document.querySelector('#quarto').value

    let dadosProduto = {

        origem,
        destino,
        data,
        quarto

    }

    let convertDadosProduto = JSON.stringify(dadosProduto)    
    
    if (localStorage.idProdutoAtual) {
        localStorage.idClienteAtual = Number(localStorage.idProdutoAtual) + 1;
        localStorage.setItem(`Produto: ${localStorage.idProdutoAtual}`, convertDadosProduto);
    }else {
        localStorage.idProdutoAtual = 1;
        localStorage.setItem(`Produto: ${localStorage.idProdutoAtual}`, convertDadosProduto);
    }

    document.querySelector('#formProduto').reset();

})