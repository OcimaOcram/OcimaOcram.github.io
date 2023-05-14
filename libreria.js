$(document).ready(function() {
    // Selezioniamo il primo titolo all'avvio
    $('#title1').show();
    $('a[data-target="title1"]').addClass('active');
  
    // Aggiungiamo un gestore di eventi sui titoli
    $('.title-list a').click(function(e) {
      e.preventDefault();
      var target = $(this).data('target');
  
      // Nascondiamo tutti i titoli e rimuoviamo la classe active da tutti i link
      $('.title').hide();
      $('.title-list a').removeClass('active');
  
      // Mostriamo il titolo selezionato e aggiungiamo la classe active al link corrispondente
      $('#' + target).show();
      $(this).addClass('active');
    });
  });
  