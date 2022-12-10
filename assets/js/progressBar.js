var i = 0;
  if (i == 0) {
    i = 0;
    var elem = document.getElementById("myBar");
    var sal = document.getElementById("text");
    var width = 0;
    var id = setInterval(frame,10);
    function frame() {
      if (width >= 95) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        sal.innerHTML = width  + "%";
      }
    }
  }

//   var i = 0;
//   if (i == 0) {
//     i = 0;
//     var elem = document.getElementById("myBar2");
//     var sal = document.getElementById("text2");
//     var width = 0;
//     var id = setInterval(frame,10);
//     function frame() {
//       if (width >= 80) {
//         clearInterval(id);
//         i = 0;
//       } else {
//         width++;
//         elem.style.width = width + "%";
//         sal.innerHTML = width  + "%";
//       }
//     }
//   }


//   var i = 0;
//   if (i == 0) {
//     i = 0;
//     var elem = document.getElementById("myBar3");
//     var sal = document.getElementById("text3");
//     var width = 0;
//     var id = setInterval(frame,10);
//     function frame() {
//       if (width >= 55) {
//         clearInterval(id);
//         i = 0;
//       } else {
//         width++;
//         elem.style.width = width + "%";
//         sal.innerHTML = width  + "%";
//       }
//     }
//   }

