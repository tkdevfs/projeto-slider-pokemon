/*OBJETIVO 1 - Quando clicarmos na seta avançar temos que mostrar o próximo cartão.
    1° - Pegar o elemento HTML da seta avançar.
    2° - Identificar o click do usuário na seta.
    3° - Fazer aparecer o próximo cartão.
    4° - Esconder o cartão anterior.

/*OBJETIVO 2 - Quando clicarmos na seta voltar temos que mostrar o cartão anterior.
    1° - Pegar o elemento HTML da seta avançar.
    2° - Identificar o click do usuário na seta.
    3° - Fazer aparecer o próximo cartão.
    4° - Esconder o cartão anterior.
================================================================================================================================*/
//FUNÇÕES - Criamos funções para otimizar o código sempre que possível;

function esconderCartaoSelecionado(){
    const cartaoSelecionado = document.querySelector(".selecionado");
        cartaoSelecionado.classList.remove("selecionado");
}

function mostrarCartao(indiceCartao){
    cartoes[cartaoAtual].classList.add("selecionado");
}
//OBJETIVO 1
//1° - Pegar o elemento HTML da seta avançar.
    const btnAvancar = document.getElementById("btn-avancar");
    const btnVoltar = document.getElementById("btn-voltar");
/*criamos uma variavel const do botão avançar para acessarmos a documentação( (document) );
    E pegarmos o id do elemento( (.getElementById) ) que queremos trabalhar no JS;
    OBS: É necessário criar o id no index.html dentro do elemento( (<button class="btn-seta-avancar" id="btn-avancar">) ) */

//3° - Fazer aparecer o próximo cartão.
    const cartoes = document.querySelectorAll(".cartao"); // carregar todos os cartões na pagina inicial, é uma boa prática por isso o passo 3° está realocado acima do 2°

    let cartaoAtual = 0; //Usamos a variável let para reatribuirmos valores para cartaoAtual;

    //2° - Identificar o click do usuário na seta.
    btnAvancar.addEventListener("click", function avancarSlider() {
            if(cartaoAtual === cartoes.length - 1){ //condiciona a funcionalidade do click ao limite do indice do array;
                return; //atingindo o limite do indice do array encerra a funcionalidade do botão avançar;
            }
        
        esconderCartaoSelecionado();
    /*^^^^ 4° - Esconder o cartão anterior. (FUNÇÃO ACIMA CRIADA NO ÍNICIO DO CÓDIGO PARA OTIMIZAR) ^^^^
        const cartaoSelecionado = document.querySelector(".selecionado");
        cartaoSelecionado.classList.remove("selecionado"); //remove a propriedade 'selecionado' do indice atual do array;*/

        cartaoAtual++; //chamamos a variável cartaoAtual e incrementamos em +1 a cada click para percorrer o array da lista cartao
        
        mostrarCartao(cartaoAtual); //adicionamos a variável cartaoAtual como parametro para executar as funções do indice selecionado; 
        //^^^^cartoes[cartaoAtual].classList.add("selecionado"); //adiciona a propriedade 'selecionado' no próximo indice do array;

    });
/*Pegamos a const btnAvancar e acidionamos um evento de identificação do click no elemento pelo método( (.addEventListener(click)...);
Na sequência adicionamos uma função que será executada após o click no elemento ( ('click', function nomeDaFunção(){ comando de execução }) );

Na execução da função criamos uma variavet cartões que irá buscar as listas criadas no HTML através do método ( .querySelectorAll(classe comum dos elementos da lista(no caso em questão .cartao)) ) */
 
btnVoltar.addEventListener("click", function voltarSlider() {
    if(cartaoAtual === 0){ //condiciona a funcionalidade do click ao limite do indice do array;
        return; //atingindo o limite do indice do array encerra a funcionalidade do botão avançar;
    }

//4° - Esconder o cartão anterior.
esconderCartaoSelecionado();


cartaoAtual--; //chamamos a variável cartaoAtual e decrementamos em -1 a cada click para percorrer o array da lista cartao

mostrarCartao(cartaoAtual);
//^^^^cartoes[cartaoAtual].classList.add("selecionado"); //adiciona a propriedade 'selecionado' no próximo indice do array;^^^^

});