function adicionar_mensagem(autor, mensagem) {
    if (autor == '')
        alert("Erro: Nome vazio")
    else if (mensagem == '')
        alert("Erro: Mensagem vazia")
    else {
        var novo_item = { mensagem: mensagem, author: autor };
        adicionar_na_lista(novo_item);
        var array = abrir_dados();
        if (array == null) {
            array = [novo_item];
        } else {
            array.push(novo_item);
        }
        salvar_dados(array);
        alert("Mensagem adicionada");
    }
}

function adicionar_na_lista(item) {
    var lista = document.getElementById('lista_de_mensagens')

    const msg = document.createElement('p');
    msg.innerText = "Mensagem: " + item.mensagem;

    const author = document.createElement('p');
    author.innerText = "De: " + item.author;

    const botao = document.createElement('button');
    botao.textContent = "Excluir";
    botao.setAttribute('class', 'botao_excluir')
    botao.onclick = function() { deletar_mensagem(item) }

    const container = document.createElement('div');
    container.appendChild(msg);
    container.appendChild(author);
    container.appendChild(botao);

    const list_item = document.createElement('li');
    list_item.appendChild(container);
    list_item.setAttribute('class', 'item_lista')

    lista.appendChild(list_item)
}

function deletar_mensagem(item) {
    var mensagens = abrir_dados();
    if (mensagens != null) {
        for (index = 0; index < mensagens.length; index++) {
            var mensagem = mensagens[index];
            if (mensagem.mensagem == item.mensagem && mensagem.author == item.author)
                break;
        }
        if (index > -1) {
            mensagens.splice(index, 1);
        }
        salvar_dados(mensagens)
        resetar_lista();
    }
}

function resetar_lista() {
    var lista = document.getElementById('lista_de_mensagens')
    lista.innerText = "";
    var mensagens = abrir_dados();
    if (mensagens != null && mensagens.length > 0) {
        mensagens.forEach(element => {
            adicionar_na_lista(element);
        });
    } else {
        salvar_dados(null);
    }
}

function salvar_dados(mensagens) {
    localStorage.setItem("mensagens", JSON.stringify(mensagens));
}

function abrir_dados() {
    return JSON.parse(localStorage.getItem("mensagens"));
}

resetar_lista();