(function($){
  $(function(){
    $('.carousel').carousel({
      numVisible: 9,
      padding: 240
    });
    $.scrollify({
      section : ".scrollLink",
      sectionName : "section-name",
      interstitialSection : "",
      easing: "easeOutExpo",
      scrollSpeed: 1100,
      offset : 0,
      scrollbars: false,
      standardScrollElements: "",
      setHeights: true,
      overflowScroll: true,
      updateHash: true,
      touchScroll:true,
      before:function() {},
      after:function() {},
      afterResize:function() {},
      afterRender:function() {}
    });
    
      
    
  }); // end of document ready
})(jQuery); // end of jQuery name space
