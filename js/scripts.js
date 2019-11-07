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
  //



$("#work1").hover(function(){
   $("#1").removeClass("box1")
     $("#1").addClass("box10")
 },function(){
   $("#1").removeClass("box10")
   $("#1").addClass("box1")

 })

 $("#work2").hover(function(){
   $("#2").removeClass("box1")
     $("#2").addClass("box10")
 },function(){
   $("#2").removeClass("box10")
   $("#2").addClass("box1")

 })

 $("#work3").hover(function(){
   $("#3").removeClass("box1")
     $("#3").addClass("box10")
 },function(){
   $("#3").removeClass("box10")
   $("#3").addClass("box1")

 })

 $("#work4").hover(function(){
   $("#4").removeClass("box1")
     $("#4").addClass("box10")
 },function(){
   $("#4").removeClass("box10")
   $("#4").addClass("box1")

 })

 $("#work5").hover(function(){
   $("#5").removeClass("box1")
     $("#5").addClass("box10")
 },function(){
   $("#5").removeClass("box10")
   $("#5").addClass("box1")

 })

 $("#work6").hover(function(){
   $("#6").removeClass("box1")
     $("#6").addClass("box10")
 },function(){
   $("#6").removeClass("box10")
   $("#6").addClass("box1")

 })

 $("#work7").hover(function(){
   $("#7").removeClass("box1")
     $("#7").addClass("box10")
 },function(){
   $("#7").removeClass("box10")
   $("#7").addClass("box1")

 })

 $("#work8").hover(function(){
   $("#8").removeClass("box1")
     $("#8").addClass("box10")
 },function(){
   $("#8").removeClass("box10")
   $("#8").addClass("box1")

 })


});
