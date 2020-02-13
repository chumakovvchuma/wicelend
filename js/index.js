// @ts-nocheck
$( document ).ready(function(){
  $( window ).height({
    "pageshow": function() {
      console.log(height)
    }
  })
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

