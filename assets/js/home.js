let main1=document.getElementById("first-main");
let main2=document.getElementById("second-main");
let icn=document.getElementById("simpcar-icon");

icn.addEventListener("click",function(){
    main2.classList.remove("close")
})





AOS.init();
 $(".slide-right").vegas({
    delay:4000,
    slides: [
        { src: "https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/h3-slider-background.jpg" },
        { src: "https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/h3-slider-background-3.jpg" },
        { src: "https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/h3-slider-background-2.jpg" }
    ],
    animation:"kenburns"
});