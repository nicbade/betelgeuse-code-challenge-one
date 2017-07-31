console.log("sourced");

$(document).ready(function() {

var count = 0;
//

$('#delete').click(function(){
  $(this).remove();
});

  $('#generate').click(function(){
    count = count + 1;
    $('#appended').append('<div id="pHere"></div>');
    $('#pHere').append('<p id="paragraph">' + count + '</p>');
    $('#pHere').append('<button id="swap">Swap</button>' + '<button id="delete">Delete</button>');

  });



});
