const Tarefa =  [
     
]
i = 0;

function handle(event){
    if(event.keyCode === 13){
        event.preventDefault(); // Ensure it is only this code that rusn

        adicionarTarefa()
    }
}
function adicionarTarefa(){
    
    novaTarefa = document.getElementById("tarefa").value;
 
    if(novaTarefa != ""){
        
        
            if(Tarefa[i] === undefined){
                Tarefa[i] = novaTarefa
                
                escreverTarefa()
                
            }else{
                Tarefa[i+1] = novaTarefa

                escreverTarefa()
               
            }
            
    }else{
        alert("Adicione uma tarefa");
       
    }

    

    i++
}

function escreverTarefa(){
    var paragrafo = document.createElement("p")
    var fechar = document.createElement("span")
    fechar.classList.add("btnFechar" + i)

    var texto = document.createTextNode(i+1 + " - " +Tarefa[i])
    var iconeFechar = document.createTextNode("X")

    paragrafo.appendChild(texto)
    fechar.appendChild(iconeFechar)
    fechar.addEventListener("click", fecharBotao);
    
    divTarefas = document.getElementById("tarefas");
    console.log(Tarefa[i])
    divTarefas.appendChild(paragrafo)
    paragrafo.appendChild(fechar)

    

    function fecharBotao(){
        
        paragrafo.style.display = ("none")
    }
    
}






