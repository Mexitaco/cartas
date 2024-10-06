function cartas() {
  var values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
  var values2 = ["11", "7", "1", "12", "5", "4", "8", "10", "3", "6", "2", "9"];
  var cards = [
    values.sort(function () {
      return Math.random() - 0.5;
    }),
    values2.sort(function () {
      return Math.random() - 0.5;
    }),
  ];

  var insert = document.getElementById("principal");
  for (let i = 0; i < values.length; i++) {
    insert.innerHTML += `
     <div class="flip-card" data-val="${cards[0][i]}">
   <div class="flip-card-inner">
     <div class="flip-card-front">
       <div class="card"></div>
     </div>
     <div class="flip-card-back">
       <img src="images/${cards[0][i]}.jpg" class="card-img" >
    </div>
   </div>
 </div>
  <div class="flip-card" data-val="${cards[1][i]}">
   <div class="flip-card-inner">
     <div class="flip-card-front">
       <div class="card"></div>
     </div>
     <div class="flip-card-back">
       <img src="images/${cards[1][i]}.jpg" class="card-img" >
    </div>
   </div>
 </div>
    `;
  }
}
//cartas();

var card = document.querySelectorAll(".flip-card");

checkCards(card, "flip-card");
var cont_click = 0;

function checkCards(cards, type) {
  cards.forEach((item, index) => {
    item.addEventListener("click", (e) => {
      if (item.className == type + " active") {
        item.className = type;
      } else {
        item.className += " active";
      }
      if (item.className == "flip-card end active") {
        item.className = "flip-card end";
      }

      let active = document.querySelectorAll("." + type + ".active");
      if (active.length > 2) {
        return (item.className = type);
      }
      if (active.length > 1) {
        item.className = type + " active";
        console.log(active);

        let result = success();
        console.log(result);

        if (result == false) {
          setTimeout(() => {
            active.forEach((element) => {
              element.className = type;
            });
          }, 700);
        } else {
          success();
        }
      }

      if (item.className == "flip-card end") {
         cont_click=cont_click;
      }else {
         cont_click++;
      }
      console.log(cont_click);
    });
  }); 
}

function success() {
  var actived = document.getElementsByClassName("active");
  console.log(actived[0].dataset["val"]);
  console.log(actived[1].dataset["val"]);

  if (
    actived.length > 1 &&
    actived[0].dataset["val"] == actived[1].dataset["val"]
  ) {
    return (
      (actived[1].className = "flip-card end"),
      (actived[0].className = "flip-card end")
    );
  }
  return false;
}


