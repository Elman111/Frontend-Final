$(function () {
    $('.homeSlider').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:4
            }
        }
    })
})