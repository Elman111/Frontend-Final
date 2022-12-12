  let btn=document.getElementById("pills-home-tab")
btn.addEventListener("click",function(){
  this.classList.add("close")
})

let quantityLeft=document.getElementById("left")
let quantityInp=document.getElementById("quantityInput")
let quantityRight=document.getElementsByClassName("fa-caret-right")

quantityLeft.addEventListener("click",function(){
    alert("salam")
})