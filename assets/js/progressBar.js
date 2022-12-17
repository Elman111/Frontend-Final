let growing=document.querySelector("#growing")
let counter=0;
setInterval(() => {
    if(counter==95){
        clearInterval();
    }else{
        counter+=1;
        growing.innerHTML=counter+"%"
    }
}, 20);

let watering=document.querySelector("#watering")
let countera=0;

setInterval(() => {
    if(countera==80){
        clearInterval();
    }else{
        countera+=1;
        watering.innerHTML=countera+"%";
        
    }
}, 20);



let furtiziling=document.querySelector("#furtiziling")
let counterb=0;

setInterval(() => {
    if(counterb==55){
        clearInterval();
    }else{
        counterb+=1;
        furtiziling.innerHTML=counterb+"%";
        
    }
}, 20);


let growing1=document.querySelector("#growing1")
let counterc=0;
setInterval(() => {
    if(counterc==95){
        clearInterval();
    }else{
        counterc+=1;
        growing1.innerHTML=counterc+"%"
    }
}, 20);



let watering1=document.querySelector("#watering1")
let counterd=0;

setInterval(() => {
    if(counterd==80){
        clearInterval();
    }else{
        counterd+=1;
        watering1.innerHTML=counterd+"%";
        
    }
}, 20);


let furtiziling1=document.querySelector("#furtiziling1")
let countere=0;

setInterval(() => {
    if(countere==55){
        clearInterval();
    }else{
        countere+=1;
        furtiziling1.innerHTML=countere+"%";
        
    }
}, 20);


let growing2=document.querySelector("#growing2")
let value=0;
setInterval(() => {
    if(value==95){
        clearInterval();
    }else{
        value+=1;
        growing2.innerHTML=value+"%"
    }
}, 20);



let watering2=document.querySelector("#watering2")
let num=0;

setInterval(() => {
    if(num==80){
        clearInterval();
    }else{
        num+=1;
        watering2.innerHTML=num+"%";
        
    }
}, 20);


let furtiziling2=document.querySelector("#furtiziling2")
let number=0;

setInterval(() => {
    if(number==55){
        clearInterval();
    }else{
        number+=1;
        furtiziling2.innerHTML=number+"%";
        
    }
}, 20);