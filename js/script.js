$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        items: 5,
        margin: 50,
        nav:true,
        dots: false,
        navText: ['<img src="img/prev.png" alt="prev">', '<img src="img/next.png" alt="next">'],
        loop:true,
        responsive : {
            480 : { items : 1  }, // from zero to 480 screen width 4 items
            768 : { items : 2  }, // from 480 screen widthto 768 6 items
            1024 : { items : 3 },  // from 768 screen width to 1024 8 items
            1400 : { items : 4 },  // from 768 screen width to 1024 8 items
            1720 : { items : 5 }  // from 768 screen width to 1024 8 items
        },
    });
});