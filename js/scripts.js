$(document).ready(function() {

  $("form#input").submit(function(event) {
    event.preventDefault();
    var name = $("#name").val();
    var app = $("#app").val();
    var date = $("#date").val();
    var timeS = $("#timeS").val();
    var timeE = $("#timeE").val();
    $(".name").text(name);
  });
});
