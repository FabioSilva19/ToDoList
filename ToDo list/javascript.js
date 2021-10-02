const Tarefa =  [
     
]
i = 0;
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
    var texto = document.createTextNode(i+1 + " - " +Tarefa[i])
    paragrafo.appendChild(texto)
    
    divTarefas = document.getElementById("tarefas");
    console.log(Tarefa[i])
    divTarefas.appendChild(paragrafo)
}


