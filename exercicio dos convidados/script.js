let convidados = [];

function addConv(){
    const nomeInput = document.getElementById('nomeConvidado');
    const nome = nomeInput.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    const nomeLower = nome.toLowerCase();
    if (!convidados.some(convidado => convidado.toLowerCase() === nomeLower)) {
        convidados.push(nome);
        nomeInput.value = ""; // Limpa o input
        alert(`${nome} adicionado à lista.`);
    } else {
        alert(`${nome} já está na lista.`);
    }
}

function exibLista(){
    const listaElement = document.getElementById('listaConvidados');
            listaElement.innerHTML = ""; // Limpa a lista antes de exibir

            if (convidados.length === 0) {
                listaElement.innerHTML = "<li>Nenhum convidado na lista.</li>";
                return;
            }

            convidados.forEach(convidado => {
                const li = document.createElement('li');
                li.textContent = convidado.toUpperCase(); // Mostra em maiúsculas
                listaElement.appendChild(li);
            });
        }

        function editConv(){
            const nomeAntigo = document.getElementById('nomeAntigo').value.trim();
            const nomeNovo = document.getElementById('nomeNovo').value.trim();

            const indice = convidados.findIndex(convidado => convidado.toLowerCase() === nomeAntigo.toLowerCase());
            if (indice !== -1 && nomeNovo) {
                convidados[indice] = nomeNovo;
                alert(`${nomeAntigo} alterado para ${nomeNovo}.`);
            } else {
                alert(`${nomeAntigo} não encontrado ou novo nome inválido.`);
            }
            document.getElementById('nomeAntigo').value = "";
            document.getElementById('nomeNovo').value = "";
        }
        function exConv(){
            const nomeExcluir = document.getElementById('nomeExcluir').value.trim();

            const indice = convidados.findIndex(convidado => convidado.toLowerCase() === nomeExcluir.toLowerCase());
            if (indice !== -1) {
                convidados.splice(indice, 1);
                alert(`${nomeExcluir} removido da lista.`);
            } else {
                alert(`${nomeExcluir} não encontrado na lista.`);
            }
            document.getElementById('nomeExcluir').value = "";
        }
        