var array = [];
var num;
function numCheck(inputNumber){
  for (var i = 0; i <= inputNumber; i++){
    num = i.toString().split("");
    if( num.includes("0") ){
      array.push("Beep!");
    }else{
      array.push(i);
    }
  }
}


//   function checkTen(input) {
//     debugger;
//     for (var i = 1; i <= checkTen; i++){
//       inputNumber = i.toString().split("")
//
//     if (i == 1 || i == 0) {
//     var checkTen = numCheck(inputNumber);
//     ("Boop!") == checkTen;
//     array.push("Boop!");
//     }else {
//       array.push(i);
//     }
//   } return ("#result");
// }
//
//
//
// // for (var i = 0; i < input.length; i ++) {
// //   if (input[i] == 1; ){
// //     array.push("Boop!");
// // } else  (input[i] === true) {
// //   }
// // }

 //User Interface begins here//

 $(function(){
   $("#form").submit(function(event){
     event.preventDefault();

     var poop=$("#input").val()
     numCheck(poop);
     $("#result").text(array.join());
     array = []
   })
   $("#reset").click(function() {
     $("#result").text("")
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
