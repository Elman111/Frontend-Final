let main1=document.getElementById("first-main");
let main2=document.getElementById("second-main");
let icn=document.getElementById("simpcar-icon");
icn.addEventListener("click",function () {
    main1.classList.add("close")
})

// icn.addEventListener("click",function(){
//     main2.classList.remove("close")
// })

let cactus=document.getElementById("2")
let allPro=document.querySelectorAll(".all-products")
cactus.addEventListener("click",function () {
    this.parentElement.onclick(alert("salam"))
})

$(function(){
    $('.carusel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
})


// AOS.init();
//  $(".slide-right").vegas({
//     delay:4000,
//     slides: [
//         { src: "https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/h3-slider-background.jpg" },
//         { src: "https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/h3-slider-background-3.jpg" },
//         { src: "https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/h3-slider-background-2.jpg" }
//     ],
//     animation:"kenburns"
// });


$(function() {
    let right = '<i class="fa-solid fa-arrow-right-long"></i>'
    let left = '<i class="fa-solid fa-arrow-left-long"></i>'
    $('.homeSlider').owlCarousel({
    
        
        loop:true,
        margin:10,
        nav:true,
        navText:[left,right],
        // autoWidth:false,
        dots:false,
        
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
})





