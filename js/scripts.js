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
      }else  if (numArray[i] == 1){
      $("#result").text("Boop!")
      alert("Boop!")
      break
    }else if ((parseInt(input)/3) % 1 === 0 && parseInt(input) !== 0){
      $("#result").text("I'm sorry, Dave. I'm afraid I can't do that.")
      alert("I'm sorry, Dave. I'm afraid I can't do that.")
    }if(isNaN(parseInt(input))){
        alert("Your mother is a hamster and your father smelt of elderberries!")
        break
      }
    }
  });
});













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
