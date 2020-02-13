// @ts-nocheck
$( document ).ready(function(){

  $( ".link-to-two" ).on({ 
    "click": function() { 
        $.scrollify.next();
  }})
  $( ".link-to-three" ).on({ 
    "click": function() { 
        $.scrollify.next();
        $.scrollify.next();
  }}) 
  $( ".link-to-four" ).on({ 
    "click": function() { 
        $.scrollify.next();
        $.scrollify.next();
        $.scrollify.next();
  }})
  $( ".link-to-two-m" ).on({ 
    "click": function() { 
        $.scrollify.next();
  }})
})

