var pounds = function(number1, sixteen) {
  var sixteen = 16;
  return number1 * sixteen;
};

var gallons = function(number1, four) {
  var four = 4;
  return number1 * four;
};

var quarts = function(number1, two) {
  var two = 2;
  return number1 * two;
};



$(document).ready(function() {

  $("form#pounds").submit(function(event) {
    event.preventDefault();

    var number1 = parseInt($("#pounds1").val());
    var sixteen = parseInt($("#pounds2").val());
    var result = pounds(number1, sixteen);
    $("#output-pounds").text(result);
  });

  $("form#gallons").submit(function(event) {
    event.preventDefault();

    var number1 = parseInt($("#gallons1").val());
    var four = parseInt($("#gallons2").val());
    var result = gallons(number1, four);
    $("#output-gallons").text(result);
  });

  $("form#quarts").submit(function(event) {
    event.preventDefault();

    var number1 = parseInt($("#quarts1").val());
    var number2 = parseInt($("#quarts2").val());
    var result = quarts(number1, number2);
    $("#output-quarts").text(result);
  });



});
