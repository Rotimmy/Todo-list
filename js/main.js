
$('#button').on('click', function(e){
  e.preventDefault();

  var item = $('#item').val();
  console.log(item);

  if ( item.length === 0) {
    alert('Enter a to-do item');
  } else {
    $('#list').append('<li>'+ item +'</li>');
  };

  $('#item').val('');
  $('#item').attr('placeholder','Next item');

  $('#list li').on('click', function(){
      $(this).addClass('strike');
  });

});

$('input').keypress(function(e){

  if (e.which == 13) {

    var item = $('#item').val();
    console.log(item);

    if ( item.length === 0) {
      alert('Enter a to-do item');
    } else {
      $('#list').append('<li>'+ item +'</li>');
    }

    $('#item').val('');
    $('#item').attr('placeholder','Next item');

    $('#list li').on('click', function(){
        $(this).addClass('strike');
    });

  };

});
