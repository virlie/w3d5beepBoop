$(function(){
  $("#form").submit(function(event){
    event.preventDefault();

    var input=$("#input").val()
    $("#result").text(input)

    var numArray = input.split("")
    for (var i=0; i < numArray.length; i++){
      if(numArray[i] == 0){
        $("#result").text("Beep!")
        alert("Beep!")
        break
      }
    }
  });
});












//
//     if(isNaN(parseInt(input))){
//       alert("Your mother is a hamster and your father smelt of elderberries!")
//
//     } else {
//       if ((parseInt(input)/3) % 1 === 0 && parseInt(input) !== 1) {
//         $("#result").text("I'm sorry, Dave. I'm afraid I can't do that.")
//
//       } else {
//
//         v
//             }else if (numArray[i] == 1){
//               $("#result").text("Boop!")
//             }
//           }
//         }
//       }
