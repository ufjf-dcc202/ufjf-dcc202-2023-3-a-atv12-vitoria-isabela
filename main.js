import { getEstoque, limpaEstoque, transacaoNoEstoque } from "./estoque.js"

document.entrada.addEventListener('submit', leFormulario)

const olJoao = document.querySelector("#joao")
const olMaria = document.querySelector("#maria")

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