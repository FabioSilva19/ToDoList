const Tarefa =  [] //Setei um array para amazenar as tarefas que serão inseridas

i = 0; //Utilizei a variavel i para percorrer o array

function handle(event){ //Essa função irá rodar toda vez que apertar uma tecla no input text do HTML
    if(event.keyCode === 13){//Se o código da tecla for 13 (Enter)
        event.preventDefault(); // Irei bloquear o reload da página

        adicionarTarefa() //E chamarei essa função para adicionar uma tarefa
    }
}
function adicionarTarefa(){ // Essa é a função que irá criar uma tarefa no array
    
    novaTarefa = document.getElementById("tarefa").value; // Então eu seto essa variavel contendo o texto do input com id tarefa
 
    if(novaTarefa != "" && Tarefa[i] === undefined){  //Se quando essa função for chamada e o valor do input nao estiver vazio
        
            // E o espaço I do array (0 no caso) estiver indefinido (vazio) 
                Tarefa[i] = novaTarefa // A posição I do array (0 no caso) vai receber o texto da variavel novaTarefa
                
                escreverTarefa()// Irei chamar a funcao para escrever a tarefa na tela
                
            
            
    }else{ // Senão, irei alertar para adicionar uma tarefa válida
        alert("Adicione uma tarefa");
       
    }

    i++ // Adiciono 1 à variável i para que quando seja chamada a função
    //adicionarTarefa() de novo, ele leia a posição 1 do array e assim por diante
}

function escreverTarefa(){ //Essa função irá escrever a tarefa na tela
    var paragrafo = document.createElement("p") //Crio uma variavel paragrafo com o elemento P (Parágrafo)
    var fechar = document.createElement("span") //Crio uma variavel fechar com o elemento P (Parágrafo)

    var texto = document.createTextNode(i+1 + " - " +Tarefa[i]) //Crio uma variavel texto que vai receber
    // indice do array mais 1 (Por começar o array com indice 0, queria que a primeira tarefa começasse com 1)
    // um traço e o conteudo do indice i do array Tarefa
    
    var iconeFechar = document.createTextNode("X") // Crio a varíavel iconeFechar que recebe um X

    paragrafo.appendChild(texto) // Então coloco o conteudo da Var Texto dentro da var Paragrafo
    fechar.appendChild(iconeFechar) // E coloco a Var iconeFechar dentro da var fechar
    fechar.addEventListener("click", fecharBotao);//Quando apertarem em fechar (O botão de span que criei com um X dentro)
    // Irá chamar a função fecharBotao

    divTarefas = document.getElementById("tarefas"); //armazeno a div com ID tarefas na variavel divTarefas

    divTarefas.appendChild(paragrafo) // E insiro o parágrafo dentro
    paragrafo.appendChild(fechar)//insiro no parágrafo o botão fechar

    function fecharBotao(){
        
        paragrafo.style.display = ("none") //Irá tirar a visibilidade do elemento no DOM
    }
    
}