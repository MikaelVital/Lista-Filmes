var filmes = [];

$(document).ready(function() {
  var tabela = $('#filmes-table');
  var addFilmeFormContainer = $('#add-filme-form-container');

  function carregarFilmes() {
    tabela.find('tbody').empty();

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

  function createDeleteButton(index) {
    var button = $('<button>');
    button.text('Excluir');
    button.click(function() {
      excluirFilme(index);
    });
    return button;
  }

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

  function excluirFilme(index) {
    filmes.splice(index, 1);
    carregarFilmes();
  }

  $('#add-filme-button').click(function() {
    exibirFormulario(true);
  });

  $('#add-filme-form').submit(function(event) {
    event.preventDefault();
    var titulo = $('#titulo-input').val();
    var duracao = $('#duracao-input').val();
    var genero = $('#genero-input').val();
    var lancamento = $('#lancamento-input').val();

    adicionarFilme(titulo, duracao, genero, lancamento);
  });

  function limparCampos() {
    $('#titulo-input').val('');
    $('#duracao-input').val('');
    $('#genero-input').val('');
    $('#lancamento-input').val('');
  }

  function exibirFormulario(exibir) {
    if (exibir) {
      addFilmeFormContainer.show();
    } else {
      addFilmeFormContainer.hide();
    }
  }

  carregarFilmes();

  $(document).ready(function() {
    $("#toggle-theme-button").click(function() {
      $("body").toggleClass("light-mode dark-mode");
    });
  });
});
