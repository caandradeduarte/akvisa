$(document).ready(function() {

  $('#assunto').keyup(function() {
    var text_length = $('#assunto').val().length;
    var text_remaining = Number($('#assunto').attr('maxlength')) - text_length;

    $('#count_assunto').html(text_remaining + ' caracteres restantes');
  });

  $('#mensagem').keyup(function() {
    var text_length = $('#mensagem').val().length;
    var text_remaining = Number($('#mensagem').attr('maxlength')) - text_length;

    $('#count_mensagem').html(text_remaining + ' caracteres restantes');
  });

  $('#call-form').on('submit', function(event) {
    $('.modal-body p').html('Agradecemos o seu contato e retornaremos em breve.');
    $('#modal').modal('show');
  });

  $('#work-form').on('submit', function(event) {
    $('.modal-body p').html('Agradecemos o seu interesse em fazer parte de nossa equipe.');
    $('#modal').modal('show');
  });
});
