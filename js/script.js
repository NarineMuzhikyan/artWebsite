$(document).ready(function(){
    $('.biographyCarousel').owlCarousel({
        items: 5,
        margin: 50,
        nav:true,
        dots: false,
        navText: ['<img src="img/prev.png" alt="prev">', '<img src="img/next.png" alt="next">'],
        loop:true,
        responsive : {
            0 : {items : 1 },
            480 : { items : 1  }, // from zero to 480 screen width 4 items
            768 : { items : 2  }, // from 480 screen widthto 768 6 items
            1024 : { items : 3 },  // from 768 screen width to 1024 8 items
            1400 : { items : 4 },  // from 768 screen width to 1024 8 items
            1720 : { items : 5 }  // from 768 screen width to 1024 8 items
        },
    });
    $('.videoCarousel').owlCarousel({
        items: 1,
        margin: 50,
        nav:true,
        dots: false,
        stagePadding: 200,
        lazyLoad: true,
        navText: ['<img src="img/prevBig.png" alt="prev">', '<img src="img/nextBig.png" alt="next">'],
        loop:true,
        responsive: {
            0: {
                items: 1
                , stagePadding: 60
            }
            , 600: {
                items: 1
                , stagePadding: 100
            }
            , 1000: {
                items: 1
                , stagePadding: 200
            }
            , 1200: {
                items: 1
                , stagePadding: 250
            }
            , 1400: {
                items: 1
                , stagePadding: 300
            }
            , 1600: {
                items: 1
                , stagePadding: 350
            }
            , 1800: {
                items: 1
                , stagePadding: 400
            }
        }
    });
    $('#video-gallery').lightGallery();

    /*toggle menu*/
    $( ".menuIcon" ).on( "click", function() {
        var navItems = $('.navItem');
        var close =$('.menuClose');
        if($('.navigation').hasClass('w0')){
            $('.navigation').removeClass('w0');
        }
        $(navItems).addClass('animateTitle');
        close.addClass('animateItemClose');
        $(navItems).addClass('navView');

    });
    $( ".menuClose" ).on( "click", function() {
        var navItems = $('.navItem');
        if(!$('.navigation').hasClass('w0')){
            $('.navigation').addClass('w0')
        }
        if($(navItems).hasClass('navView')){
            $(navItems).removeClass('navView')
        }
        if($(navItems).hasClass('animateTitle')){
            $(navItems).removeClass('animateTitle');
        }
        if($('.menuClose').hasClass('animateItemClose')){
            $('.menuClose').removeClass('animateItemClose');
        }
    });

    /*navigation*/
    $(window).scroll(function (event) {
        var container = $('.container')
        var scroll = $(window).scrollTop();

        if(scroll>= $(container[1]).offset().top){
            $('.fixedNavigation').removeClass('h0');
            $('.menuPart').addClass('fixedTopMenu');
            $('.navigation').addClass('fixNav');

        }else {
            $('.menuPart').removeClass('fixedTopMenu');
            $('.navigation').removeClass('fixNav');
        }

      var items = $(".navItem");

      for(var i=0; i<items.length-1; i++){
        var iddCurrent = $(items[i]).data('id');
        var elementCurrent= document.getElementById(iddCurrent);
        var itemCurrent = $(elementCurrent).offset();
        var offCurrent =$(items[i]).offset();
        var iddPrev = $(items[i+1]).data('id');
        var elementPrev= document.getElementById(iddPrev);
        var prev =$(elementPrev).offset();
        if(offCurrent.top>=itemCurrent.top && offCurrent.top<prev.top){

          $(items[i]).addClass('active')
        }else{
            if($(items[i]).hasClass('active')){
              $(items[i]).removeClass('active')
            }
        }
      }
      var lastid= $(items[items.length-1]).data('id');
      var lastElement = document.getElementById(lastid);
      var menuLast = $(items[items.length-1]).offset();
      var lastBlock = $(lastElement).offset();
      if(menuLast.top>=lastBlock.top){
        $(items[items.length-1]).addClass('active')
      }else{
        if($(items[items.length-1]).hasClass('active')){
          $(items[items.length-1]).removeClass('active')
        }
      }

    });
    $( ".navItem " ).on( "click", function(e) {
      var id=$(this).data("id");
      var element= document.getElementById(id);
      var elementOffset = $(element).offset();
      $('html, body').animate({
          scrollTop:elementOffset.top+1
      }, 'slow');
    });

});