console.log('Javascript sourced');

$(document).ready(function(){

var count = 0;
  $('#generate').on('click' , function(){
    count++;
    $('#container').append('<div class="red">'+
    '<p>' + count +'</p>'+
    '<button class="swap">Swap</button>'+'<button class="delete">Delete</button>'+'</div>');
  });

  $('#container').on('click' , '.delete', function(){
    $(this).parent().remove();
  });

  $('#container').on('click', '.swap', function(){
    $(this).parent().css('background-color', 'yellow');
    $(this).parent().css('background-color', 'red');

  });
});
