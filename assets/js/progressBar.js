// var i = 0;
//   if (i == 0) {
//     i = 0;
//     var elem = document.getElementById("myBar");
//     var text = document.getElementById("text");
//     var width = 0;
//     var id = setInterval(frame,10);
//     function frame() {
//       if (width >= 95) {
//         clearInterval(id);
//         i = 0;
//       } else {
//         width++;
//         elem.style.width = width + "%";
//         text.innerHTML = width  + "%";
//       }
//     }
//   }



var i = 0;
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0; 
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width  + "%";
      }
    }
  }


