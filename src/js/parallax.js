//////CONTACT FORM VALIDATION
$(document).ready(function ($) {
  if($(window).scrollTop() >= ($("$photos").height)){
    $(document).css('background-image', 'https://scontent-yyz1-1.xx.fbcdn.net/v/t1.0-0/c12.0.200.200/p200x200/23380171_1665435770184783_6636907424078507810_n.jpg?oh=94db142ffece7a21f8e45539b046c059&oe=5A9BEBB4')
  }
});
$(document).ready(function() {
  var passed_service = false;
  var passed_clients = false;
  $('body,html').bind('scroll mousedown wheel DOMMouseScroll mousewheel keyup', function(event){
    if($(window).scrollTop() >= ($("#service").height())){
      if(!passed_service){
        alert("To #service");
        passed_service = true;
      }
    }

    //console.log($(window).scrollTop());
    if($(window).scrollTop() >= (parseInt($("#service").height()) + parseInt($("#clients").height()))){
      if(!passed_clients){
        alert("To #clients");
        passed_clients = true;
      }
    }
  });
});
