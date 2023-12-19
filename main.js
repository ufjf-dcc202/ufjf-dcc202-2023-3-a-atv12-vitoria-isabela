import { getEstoque, limpaEstoque, transacaoNoEstoque } from "./estoque.js"

document.entrada.addEventListener('submit', leFormulario)

const olJoao = document.querySelector("#joao")
const olMaria = document.querySelector("#maria")

function atualizaTela() {
    const estoque = getEstoque()
    
    document.entrada.fruta.value = "maca"
    document.entrada.quantidade.value = 1
   
    preencheListaPessoa(estoque['joao'], olJoao)
    preencheListaPessoa(estoque['maria'], olMaria)
}

function preencheListaPessoa(pessoa, lista) {
    lista.innerHTML = ""

    if(Array.isArray(pessoa)) {
        for (let i = 0; i < pessoa.length; i++) {
            const monte = pessoa[i]
            const eLi = document.createElement('li')
            eLi.innerText = `${monte.tipo}: ${monte.quantidade}`
            lista.append(eLi)
        }
    }
}