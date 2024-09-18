const adicionarTarefa = () => {

    const nomeTarefa = document.getElementById("nomeTarefa")

    const sectionTarefas = document.getElementById("sectionTarefas")

    const tarefasAdicionadas = document.createElement("div")

    const titleTarefa = document.createElement("h3")

    const sectionEtiqueta = document.createElement("div")

    const EtiquetaAndData1 = document.createElement("p")

    const EtiquetaAndData2 = document.createElement("p")

    const botaoTarefa = document.createElement("button")

    titleTarefa.textContent = nomeTarefa.value

    EtiquetaAndData1.textContent = "Frontend"

    EtiquetaAndData2.textContent = "21/08/2024"

    botaoTarefa.textContent = "Concluir"

    tarefasAdicionadas.className = "tarefasAdicionadas"

    titleTarefa.className = "titleTarefa"

    sectionEtiqueta.className = "sectionEtiqueta"

    EtiquetaAndData1.className = "EtiquetaAndData"

    EtiquetaAndData2.className = "EtiquetaAndData"

    botaoTarefa.className = "botaoTarefa"

    tarefasAdicionadas.appendChild(titleTarefa)

    sectionEtiqueta.appendChild(EtiquetaAndData1)

    sectionEtiqueta.appendChild(EtiquetaAndData2)

    tarefasAdicionadas.appendChild(sectionEtiqueta)

    sectionTarefas.appendChild(tarefasAdicionadas)
    
    sectionTarefas.appendChild(botaoTarefa)

}

window.onload = () => {

    const botaoAdicionarTarefa = document.getElementById("botaoAdicionarTarefa")

    botaoAdicionarTarefa.onclick = () => adicionarTarefa()
}