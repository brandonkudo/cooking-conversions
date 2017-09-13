var pounds = function(number1, sixteen) {
  var sixteen = 16;
  return number1 * sixteen;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

$(document).ready(function() {

  $("form#pounds").submit(function(event) {
    event.preventDefault();

    var number1 = parseInt($("#pounds1").val());
    var sixteen = parseInt($("#pounds2").val());
    var result = pounds(number1, sixteen);
    $("#output-pounds").text(result);
  });

  $("form#subtract").submit(function(event) {
    event.preventDefault();

    var number1 = parseInt($("#subtract1").val());
    var number2 = parseInt($("#subtract2").val());
    var result = subtract(number1, number2);
    $("#output-subtract").text(result);
  });

  $("form#multiply").submit(function(event) {
    event.preventDefault();

    var number1 = parseInt($("#multiply1").val());
    var number2 = parseInt($("#multiply2").val());
    var result = multiply(number1, number2);
    $("#output-multiply").text(result);
  });

  $("form#divide").submit(function(event) {
    event.preventDefault();

    var number1 = parseInt($("#divide1").val());
    var number2 = parseInt($("#divide2").val());
    var result = divide(number1, number2);
    $("#output-divide").text(result);
  });

});
