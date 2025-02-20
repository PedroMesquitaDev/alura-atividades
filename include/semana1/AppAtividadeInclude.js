
//Função para escrever o codigo
function exibirTextoNaTela(id, texto) {
    let campo = document.getElementById(id);
    campo.innerHTML = texto;
}



function aula1(opcao, num){
    // if que na opção 1 escolhe o codigo que vai executar e na 2 o que vai mostrar
    if(opcao == 1){
        switch (num){
            case 1:
                alert("Boas vindas ao nosso site");
                break;
            case 2:
                let nome = "lua";
                exibirTextoNaTela("codigoExibicao", `Nome:${nome}`);
                break;
            case 3:
                let idade = 25;
                exibirTextoNaTela("codigoExibicao", `Idade:${idade}`);
                break;
            case 4:
                let numeroDeVendas = 50;
                exibirTextoNaTela("codigoExibicao", `Numero de Vendas:${numeroDeVendas}`);
                break;
            case 5:
                let saldoDisponivel = 1000;
                exibirTextoNaTela("codigoExibicao", `Saldo disponivel:${saldoDisponivel}`);
                break;
            case 6:
                alert("Erro! Preencha todos os campos");
                break;
            case 7:
                let mensagemDeErro = "Erro! Preencha todos os campos";
                alert(mensagemDeErro);
                break;
            case 8:
                let nomeM = prompt("Digite seu Nome:");
                exibirTextoNaTela("codigoExibicao", `Seu Nome:${nomeM}`);
                break;
            case 9:
                let idadeI = prompt("Digite sua Idade:");
                exibirTextoNaTela("codigoExibicao", `Idade:${idadeI}`);
                break;
            case 10:
                let idadeC = prompt("Digite sua Idade:");
                if(idadeC > 18){
                    alert("Pode tirar a habilitação!");
                }
                break;


            default:
                console.log("Erro!! Opção valida não detectada");
        }

    }else{
        switch (num){
            case 1:
                exibirTextoNaTela("codigoExibicao", "alert('Boas vindas ao nosso site');");
                break;
            case 2:
                exibirTextoNaTela("codigoExibicao", "let nome = 'lua';");
                break;
            case 3:
                exibirTextoNaTela("codigoExibicao", "let idade = 25;");
                break;
            case 4:
                exibirTextoNaTela("codigoExibicao", "let numeroDeVendas = 50;");
                break;
            case 5:
                exibirTextoNaTela("codigoExibicao", "let saldoDisponivel = 1000;");
                break;
            case 6:
                exibirTextoNaTela("codigoExibicao", "alert('Erro! Preencha todos os campos');");
                break;
            case 7:
                exibirTextoNaTela("codigoExibicao", "let mensagemDeErro = 'Erro! Preencha todos os campos'; \nalert(mensagemDeErro);");
                break;
            case 8:
                exibirTextoNaTela("codigoExibicao", "nome = prompt('Digite seu Nome:');");
                break;
            case 9:
                exibirTextoNaTela("codigoExibicao", "idade = prompt('Digite sua Idade:');");
                break;
            case 10:
                exibirTextoNaTela("codigoExibicao", "if(idade > 18){\n   prompt('Pode tirar a habilitação!');\n}");
                break;

            default:
                console.log("Erro!! Opção valida não detectada");
        }
    }


}

