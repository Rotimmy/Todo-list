
$('#button').on('click', function(e){
  e.preventDefault();

  var item = '<li>'+ $('#item').val() +'</li>';
  console.log(item);

  if ( item.length === 0) {
    alert('Enter a to-do item');
  } else {
    $('#list').append(item);
  };

  $('#item').val('');
  $('#item').attr('placeholder','Next item');

});

$('input').keypress(function(e){

  if (e.which == 13) {

    var item = '<li>'+ $('#item').val() +'</li>';
    console.log(item);

    if ( item.length === 0) {
      alert('Enter a to-do item');
    } else {
      $('#list').append(item);
    }

    $('#item').val('');
    $('#item').attr('placeholder','Next item');

    $('#list li').on('click', function(){
        $(this).addClass('strike');
    });
    
  };

});
