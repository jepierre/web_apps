jQuery(document).ready(function ($) {

  // solves equation
  $("#equals").click( function(){
    try {
      var input = eval( $("#result").val() );
      $("#result").val(input);
    } catch(err){
      $("#result").val("Error");
    }
  });

  // input numbers 
  $(".btn-info").click( function (){
    $("#result").val( $("#result").val() + this.id);
  });

  // clear input 
  $("#clear").click( function() {
    $("#result").val("");
  });

  //backspace
  $("#bsp").click( function() {
    var result = $("#result").val();
    var len = result.length;
    if (len >= 1) {
      len -= 1;
      result = result.substring(0, len);
      $("#result").val(result);
    }
  });

  $("#neg").click( function() {
    var result = $("#result").val();
    if (result.length > 0){
      $("#result").val("-" + result);
    }
  });

});
