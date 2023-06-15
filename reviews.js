$(document).ready(function() {
  var filmes = [];

  function carregarFilmes() {
    var tabela = $('#filmes-table');
    tabela.find('tbody').empty(); 

    $.each(filmes, function(index, filme) {
      var row = $('<tr>');
      $('<td>').text(filme.titulo).appendTo(row);
      $('<td>').text(filme.duracao).appendTo(row);
      $('<td>').text(filme.genero).appendTo(row);
      $('<td>').text(filme.lancamento).appendTo(row);
      $('<td>').text(filme.review).appendTo(row);
      $('<td>').append(createReviewButton(index)).appendTo(row);
      tabela.find('tbody').append(row);
    });
  }

  function createReviewButton(index) {
    var button = $('<button>');
    button.text('Adicionar Review');
    button.click(function() {
      abrirFormularioReview(index);
    });
    return button;
  }

  function abrirFormularioReview(index) {
    var filme = filmes[index];
    $('#filme-titulo').val(filme.titulo);
    $('#filme-review').val('');

    $('#review-form-container').show();
    $('#review-form').off('submit').submit(function(event) {
      event.preventDefault();
      var review = $('#filme-review').val();
      adicionarReview(index, review);
    });

    $('#cancelar-review').off('click').click(function() {
      fecharFormularioReview();
    });
  }

  function fecharFormularioReview() {
    $('#review-form-container').hide();
    $('#review-form').off('submit');
    $('#cancelar-review').off('click');
  }

  function adicionarReview(index, review) {
    filmes[index].review = review;
    fecharFormularioReview();
    carregarFilmes();
  }

  filmes.push({
    titulo: 'Filme 1',
    duracao: '120 min',
    genero: 'Ação',
    lancamento: 2022,
    review: ''
  });
  filmes.push({
    titulo: 'Filme 2',
    duracao: '90 min',
    genero: 'Comédia',
    lancamento: 2021,
    review: ''
  });
  filmes.push({
    titulo: 'Filme 3',
    duracao: '150 min',
    genero: 'Drama',
    lancamento: 2023,
    review: ''
  });

  carregarFilmes();

  $('#theme-toggle').click(function() {
    $('body').toggleClass('dark');
    $('h1').toggleClass('dark');
    $('table').toggleClass('dark');
    $('th, td').toggleClass('dark');
  });
});
