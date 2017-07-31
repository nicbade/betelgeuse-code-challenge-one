console.log("sourced");

$(document).ready(function() {

  //listeners

var count = 0;

  $('#generate').click(function(){
    $('#appended').append('<div id="pHere">' + '<p>Count Clicks</p>' + '</div>');

  });
  $('#pHere').append('<button>Swap</button>' + '<button>Delete</button>');
});
