var filmes = [];

$(document).ready(function() {
  var tabela = $('#filmes-table');
  var addFilmeFormContainer = $('#add-filme-form-container');

  // Função para carregar a lista de filmes na tabela
  function carregarFilmes() {
    tabela.find('tbody').empty(); // Limpa o corpo da tabela antes de preenchê-lo novamente

    $.each(filmes, function(index, filme) {
      var row = $('<tr>');
      $('<td>').text(filme.titulo).appendTo(row);
      $('<td>').text(filme.duracao).appendTo(row);
      $('<td>').text(filme.genero).appendTo(row);
      $('<td>').text(filme.lancamento).appendTo(row);
      $('<td>').append(createDeleteButton(index)).appendTo(row);
      tabela.find('tbody').append(row);
    });
  }

  // Função para criar o botão de exclusão
  function createDeleteButton(index) {
    var button = $('<button>');
    button.text('Excluir');
    button.click(function() {
      excluirFilme(index);
    });
    return button;
  }

  // Função para adicionar um filme à lista
  function adicionarFilme(titulo, duracao, genero, lancamento) {
    var filme = {
      titulo: titulo,
      duracao: duracao,
      genero: genero,
      lancamento: lancamento
    };

    filmes.push(filme);

    carregarFilmes();
    limparCampos();
    exibirFormulario(false);
  }

  // Função para excluir um filme da lista
  function excluirFilme(index) {
    filmes.splice(index, 1);
    carregarFilmes();
  }

  // Manipulador de evento para o botão "Adicionar Filme"
  $('#add-filme-button').click(function() {
    exibirFormulario(true);
  });

  // Manipulador de evento para o envio do formulário
  $('#add-filme-form').submit(function(event) {
    event.preventDefault();
    var titulo = $('#titulo-input').val();
    var duracao = $('#duracao-input').val();
    var genero = $('#genero-input').val();
    var lancamento = $('#lancamento-input').val();

    adicionarFilme(titulo, duracao, genero, lancamento);
  });

  // Função para limpar os campos do formulário
  function limparCampos() {
    $('#titulo-input').val('');
    $('#duracao-input').val('');
    $('#genero-input').val('');
    $('#lancamento-input').val('');
  }

  // Função para exibir ou ocultar o formulário
  function exibirFormulario(exibir) {
    if (exibir) {
      addFilmeFormContainer.show();
    } else {
      addFilmeFormContainer.hide();
    }
  }

  // Carrega a lista de filmes quando a página é carregada
  carregarFilmes();
});
