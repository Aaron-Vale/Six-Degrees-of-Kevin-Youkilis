$(document).ready(function() {
  $('#search').submit(function(e) {
    e.preventDefault();
    const data = {};
    data.player1 = $('.player1').val();
    data.player2 = $('.player2').val();
    $.ajax({
      type: "POST",
      url: 'localhost:3000',
      data: JSON.stringify(data),
      success: function() {
        console.log('done')
      }
    });
  })
})
