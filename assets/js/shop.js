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




let buttons=document.querySelectorAll(".btn");
let basketCount=document.getElementById("basketCount");
let navBascet=document.getElementById("navBascet");

localStorage.setItem("basket",JSON.stringify([]));

buttons.forEach(btn=>{
    btn.addEventListener("click",function(ev){
        ev.preventDefault();
        let id=this.parentElement.getAttribute("data-id");
        let arr=JSON.parse(localStorage.getItem("basket"));
        
        let existProduct=arr.find(product=>product.id==id);
        if(existProduct==undefined){
            arr.push({
                id:id,
                count:1,
                image:this.parentElement.previousElementSibling.getAttribute("src"),
                name:this.parentElement.firstElementChild.innerText,
                price:259
            })
        }
        else{
            existProduct.count++;
        }
        localStorage.setItem("basket",JSON.stringify(arr));
        BasketCount();
        
    })
})

function BasketCount(){
    let basket=JSON.parse(localStorage.getItem("basket"));
    basketCount.innerText=basket.length;
    

}
BasketCount()