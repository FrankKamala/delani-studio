$(document).ready(function() {
  $(".design").click(function(event) {
    $(".hide").slideToggle();
    $(".show").slideToggle();


  });
  /*display and hive development content*/
  $(".development").click(function(event) {
    $(".show1").slideToggle();
    $(".hide1").slideToggle();
  });

  $(".product").click(function(event) {
    $(".show2").slideToggle();
    $(".hide2").slideToggle();
  });
  $("button").click(function(event) {
    alert("Message Sent");
    event.preventDefault();

  });


});
