function BasketCount() {
    let basket = JSON.parse(localStorage.getItem("basket"));
    basketCount.innerText = basket.length;
}
BasketCount()

if (JSON.parse(localStorage.getItem("basket")) != null) {
    let arr = JSON.parse(localStorage.getItem("basket"));

    arr.forEach(element => {
        let tr = document.createElement("tr")
        let td = `
            <td>
            <img width="100px" src="${element.image}" alt="">${element.name}
            </td>
            <td>${element.price}</td>
         
        `



        let tdx = document.createElement("td");
        let img = document.createElement("i")
        img.setAttribute("class", "fa-solid fa-xmark")
        tdx.append(img)

        let elem = document.createElement("td");
        let img1 = document.createElement("i");
        img1.setAttribute("class", "fa-solid fa-plus");
        let img2 = document.createElement("i");
        img2.setAttribute("class", "fa-solid fa-minus");
        elem.append(img2, img1);
        let count = document.createElement("td");
        count.innerText = element.count
        let subTotal=document.createElement("td");
        subTotal.innerText=element.count*259;


        tr.innerHTML += td
        tr.append(count,subTotal, elem, tdx,)
        tbody.append(tr);
        let total=document.getElementById("cartTotal")
        let update = document.getElementById("update")
        update.addEventListener("click", function () {
            window.location.reload()
            
        })


        img.onclick = function () {
            tr.remove();
            let arr;
            arr = JSON.parse(localStorage.getItem("basket")).filter(x => x.id != element.id);
            localStorage.setItem("basket", JSON.stringify(arr))
        }

        img1.onclick = function () {
            let arr = JSON.parse(localStorage.getItem("basket"));
            let er = arr.find(x => x.id == element.id)
            er.count++;

            localStorage.setItem("basket", JSON.stringify(arr))
            count.innerText = er.count;
        }

        img2.onclick = function () {
            let arr = JSON.parse(localStorage.getItem("basket"));
            let er = arr.find(x => x.id == element.id)
            er.count--;
            if (er.count >= 0) {
                localStorage.setItem("basket", JSON.stringify(arr));

                count.innerText = er.count;


            }
            if (er.count == 0) {

                update.addEventListener("click", function () {
                    img.click();
                    BasketCount()

                })
            }

        }


    });




}