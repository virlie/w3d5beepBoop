var array = [];
  //debugger;
function numCheck(inputNumber){
  for (var i = 0; i <= inputNumber; i++){
    var num = i.toString().split()
    var input = parseInt(inputNumber);

    if (i == 0) {
       array.push("Beep!")
    } else if (i == 1) {
       array.push("Boop!")
    } else if ((i/3) % 1 === 0 ) {
      array.push("I'm sorry, Dave. I'm afraid I can't do that")
    } else if (isNaN(input)) {
      prompt("error message")
    } else {
      array.push(i)
    }
  }
}

 //User Interface begins here//

 $(function(){
   $("#form").submit(function(event){
     event.preventDefault();

     var poop=$("#input").val()
     numCheck(poop);
     $("#result").text(array.join());
     array = []
   })
 })















//
//     numCheck(input)
//
//
//
//   function numCheck(input) {
//     var numArray = input.split("")
//     for (var i=0; i < numArray.length; i++){
//       if(numArray[i] == 0){
//         $("#result").text("Beep!")
//         alert("Beep!")
//         break
//       }else  if (numArray[i] == 1){
//         $("#result").text("Boop!")
//         alert("Boop!")
//         break
//       }else if ((parseInt(input)/3) % 1 === 0 && parseInt(input) !== 0){
//         $("#result").text("I'm sorry, Dave. I'm afraid I can't do that.")
//         alert("I'm sorry, Dave. I'm afraid I can't do that.")
//       }if(isNaN(parseInt(input))){
//         alert("Your mother is a hamster and your father smelt of elderberries!")
//         break
//       }
//     }
//   }
// });



















//

//

//
//       } else {
//
//         v
//
//             }  break
//           }
//         }
//       }
