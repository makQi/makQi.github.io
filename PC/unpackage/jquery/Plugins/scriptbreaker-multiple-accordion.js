/*
 * jQuery UI Multilevel Accordion v.1
 * 
 * Copyright (c) 2011 Pieter Pareit
 *
 * http://www.scriptbreaker.com
 * http://www.jq22.com/jquery-info9138
 */

//plugin definition
(function($){
  $.fn.extend({

    //pass the options variable to the function
    accordion: function(options) {

      var defaults = {
        accordion: 'true',
        speed: 300,
        closedSign: '+',
        openedSign: '-'
      };

    // Extend our default options with those provided.
    var opts = $.extend(defaults, options);
    //Assign current element to variable, in this case is UL element
    var $this = $(this);
    
    //add a mark [+] to a multilevel menu
    $this.find("li").each(function() {
      if($(this).find("ul").size() != 0){
        //add the multilevel sign next to the link
        $(this).find("a:first").prepend("<span class='closed'>"+"</span>");
        
        //avoid jumping to the top of the page when the href is an #
        if($(this).find("a:first").attr('href') == "#"){
          $(this).find("a:first").click(function(){return false;});
        }
      }
    });

    //open active level
    $this.find("li.active").each(function() {
      $(this).parents("ul").slideDown(opts.speed);
      $(this).parents("ul").parent("li").find("span:first").removeClass('closed').addClass('opened');
      $(this).children('i').addClass('checked');
    });

    $this.find("li a").click(function() {
      if($(this).parent().find("ul").size() != 0){
        if(opts.accordion){
            //Do nothing when the list is open
            if(!$(this).parent().find("ul").is(':visible')){
              parents = $(this).parent().parents("ul");
              visible = $this.find("ul:visible");
              visible.each(function(visibleIndex){
                var close = true;
                parents.each(function(parentIndex){
                  if(parents[parentIndex] == visible[visibleIndex]){
                    close = false;
                    return false;
                  }
                });
                if(close){
                  if($(this).parent().find("ul") != visible[visibleIndex]){
                    $(visible[visibleIndex]).slideUp(opts.speed, function(){
                      $(this).parent("li").find("span:first").removeClass('opened').addClass('closed');
                    });
                    
                  }
                }
              });
            }
          }
          if($(this).parent().find("ul:first").is(":visible")){
            $(this).parent().find("ul:first").slideUp(opts.speed, function(){
              $(this).parent("li").find("span:first").delay(opts.speed).removeClass('opened').addClass('closed');
            });
          }else{
            $(this).parent().find("ul:first").slideDown(opts.speed, function(){
              $(this).parent("li").find("span:first").delay(opts.speed).removeClass('closed').addClass('opened');
            });
          }
        }
      });
  }
});
})(jQuery);