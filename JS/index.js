const adicionarTarefa = () => {

    const time = Date.now();
    const today = new Date(time);

    const listaTarefas = document.getElementById("listaTarefas")

    const topico = document.createElement("li")

    const nomeTarefa = document.getElementById("nomeTarefa")

    const inputEtiqueta = document.getElementById("inputEtiqueta")

    const sectionTarefasAdicionadas = document.getElementById("sectionTarefasAdicionadas")

    const tarefasAdicionadas = document.createElement("div")

    const tarefa = document.createElement("div")

    const tituloTarefa = document.createElement("h3")

    const sectionEtiqueta = document.createElement("div")

    const etiquetaData1 = document.createElement("p")

    const etiquetaData2 = document.createElement("p")

    const botaoTarefaConcluida = document.createElement("button")

    const itemConcluido = document.createElement("h2")

    tarefasAdicionadas.className = "tarefasAdicionadas"

    tarefa.className = "tarefa"

    tituloTarefa.className = "tituloTarefa"

    sectionEtiqueta.className = "sectionEtiqueta"

    etiquetaData1.className = "etiquetaData"

    etiquetaData2.className = "etiquetaData"

    botaoTarefaConcluida.className = "botaoTarefaConcluida"

    itemConcluido.className = "itemConcluido"

    tituloTarefa.textContent = nomeTarefa.value

    etiquetaData1.textContent = inputEtiqueta.value

    etiquetaData2.textContent = "Criado em: " + today.toLocaleDateString()

    botaoTarefaConcluida.textContent = "Concluir"

    itemConcluido.textContent = "Foi"

    sectionTarefasAdicionadas.appendChild(listaTarefas)

    listaTarefas.appendChild(topico)

    sectionTarefasAdicionadas.appendChild(tarefasAdicionadas)

    tarefasAdicionadas.appendChild(tarefa)

    tarefa.appendChild(tituloTarefa)

    tarefa.appendChild(sectionEtiqueta)

    sectionEtiqueta.appendChild(etiquetaData1)

    sectionEtiqueta.appendChild(etiquetaData2)

    tarefasAdicionadas.appendChild(itemConcluido)

    tarefasAdicionadas.appendChild(botaoTarefaConcluida)

    topico.appendChild(tarefasAdicionadas)

    botaoTarefaConcluida.onclick = () => {

        botaoTarefaConcluida.style = "display:none"

        tituloTarefa.style = "text-decoration: line-through"

        itemConcluido.style = "display:flex"

    }

}

window.onload = () => {

    const botaoAdicionarTarefa = document.getElementById("botaoAdicionarTarefa")

    botaoAdicionarTarefa.onclick = () => adicionarTarefa()

}
