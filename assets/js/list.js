//   let btn=document.getElementById("pills-home-tab")
// btn.addEventListener("click",function(){
//   this.classList.add("close")
// })

// let quantityLeft=document.getElementById("left")
// let quantityInp=document.getElementById("quantityInput")
// let quantityRight=document.getElementsByClassName("fa-caret-right")

// quantityLeft.addEventListener("click",function(){
//     alert("salam")
// })
document.getElementsByClassName("tab-pane3").onclick.function()
  alert("sas")


const plus=document.querySelectorAll(".plus");
const minus=document.getElementsByClassName("minus");
const num=document.getElementsByClassName("num");

let a=0;

plus.addEventListener("click", ()=> {
  alert("salam")
  a++;
  a=(a<10)?"0"+a:a;
  num.value=a;
  console.log(a);
  
});
minus.addEventListener("click", ()=> {
  if (a>=1) {
    a--;
    a=(a<10)?"0"+a:a;
    num.innerText=a;
  }
});