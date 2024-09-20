//Lista para contagem de tarefas concluidas
let tarefasTitulo = []

//Pegando dia atual
const getDay = () => {

    const time = Date.now();
    const today = new Date(time);

    return today

}

//Pegando a ul de dentro da section sectionTarefasAdicionadas
const getList = () => {

    const listaTarefas = document.getElementById("listaTarefas")

    return listaTarefas

}

//criando <li></li>
const createLi = () => {

    const li = document.createElement("li")

    return li

}

//Pegando Input nomeTarefa de dentro da section sectionInputButton
const getInputNomeTarefa = () => {

    const nomeTarefa = document.getElementById("nomeTarefa")

    return nomeTarefa

}

//Pegar input inputEtiqueta de dentro da section sectionInputButton
const getInputEtiqueta = () => {

    const inputEtiqueta = document.getElementById("inputEtiqueta")

    return inputEtiqueta
    
}

//Pegando section sectionTarefasAdicionadas
const getsectionTarefasAdicionadas = () => {

    const sectionTarefasAdicionadas = document.getElementById("sectionTarefasAdicionadas")

    return sectionTarefasAdicionadas

}

//Criando <div></div>
const createDiv = (nomeDiv) => {

    const div = document.createElement("div")

    div.className = nomeDiv

    return div

}

//criando <h3></h3>
const createH3 = (classH3, tituloDaTarefa) => {

    const h3 = document.createElement("h3")

    h3.className = classH3

    h3.textContent = tituloDaTarefa

    return h3

}


//criando <p></p>
const createP = (nomeClass, valorP) => {

    const p = document.createElement("p")

    p.className = nomeClass

    p.textContent = valorP 

    return p

}

//Criando <button></button>
const createButton = (nomeClass, textContent) => {

    const button = document.createElement("button")

    button.className = nomeClass

    button.textContent = textContent

    return button

}

//Criando <img></img>
const createImg = (nomeClass, src) => {

    const img = document.createElement("img")

    img.className = nomeClass

    img.src = src

    return img

}

//Função click botão adicionar
const adicionarTarefa = () => {
    
    //variavel criando um <li>
    const topico = createLi()
    
    //Variavel criando uma <div> já com nome atribuido na função
    const tarefasAdicionadas = createDiv("tarefasAdicionadas")
    
    //Variavel criando uma <div> já com nome atribuido na função
    const tarefa = createDiv("tarefa")
    
    //Variavel criando um <h3> já com nome e valor text atribuidos na função
    const tituloTarefa = createH3("tituloTarefa", getInputNomeTarefa().value)
    
    //Variavel criando uma <div> já com nome atribuido na função
    const sectionEtiqueta = createDiv("sectionEtiqueta")

    //Variavel criando um <button> já com nome da classe e valor text atribuidos na função
    const botaoTarefaConcluida = createButton("botaoTarefaConcluida", "Concluir")

    //Variavel criando um <img> já com nome e imagem atribuidos na função
    const itemConcluido = createImg("itemConcluido", "itens/itemConcluido.svg")


    //desabilitar textoListaVazia
    document.getElementById("textoListaVazia").style = "display:none"


    //Adições de elementos a section "sectionTarefasAdicionadas" com manipulação do DOM
    getList().appendChild(topico)

        getsectionTarefasAdicionadas().appendChild(tarefasAdicionadas)

            tarefasAdicionadas.appendChild(tarefa)

                tarefa.appendChild(tituloTarefa)

                tarefa.appendChild(sectionEtiqueta)

                    sectionEtiqueta.appendChild(createP("etiquetaData", getInputEtiqueta().value))
    
                    sectionEtiqueta.appendChild(createP("etiquetaData", "Criado em: " + getDay().toLocaleDateString()))


            tarefasAdicionadas.appendChild(itemConcluido)
    
            tarefasAdicionadas.appendChild(botaoTarefaConcluida)
    
    topico.appendChild(tarefasAdicionadas)


    //Limpando caixa de texto input depois de adicionar tarefa
    document.getElementById("nomeTarefa").value = ""
    
    document.getElementById("inputEtiqueta").value = ""


    //Aplicação de função para evento de Onclick do botaoTarefaConcluida
    botaoTarefaConcluida.onclick = () => {
        
        tarefasTitulo.push(1)
        
        //contador das tarefas marcadas como conluídas
        document.getElementById("contadorTarefasConcluidas").textContent = tarefasTitulo.length == 1 ? `${tarefasTitulo.length} Tarefa Concluída` : `${tarefasTitulo.length} Tarefas Concluídas`
    

        //desabilita o botão "Concluido" das tarefas
        botaoTarefaConcluida.style = "display:none"
    
        //risca o texto da tarefa concluída
        tituloTarefa.style = "text-decoration: line-through #001747 .2rem"
    
        //habilita o item de marcação que sinaliza que a tarefa foi Concluida
        itemConcluido.style = "display:flex"

    }

}

window.onload = () => {

    const botaoAdicionarTarefa = document.getElementById("botaoAdicionarTarefa")

    botaoAdicionarTarefa.onclick = () => adicionarTarefa()

}
