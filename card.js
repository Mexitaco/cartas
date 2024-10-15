var level;
botones();
var menu = `<div id="menu" class="menu">
          <div class="logo">
            <div class="medal">
              <div class="meme">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <path
                    id="circlePath"
                    fill="none"
                    stroke-width="4"
                    stroke="hsl(0 100% 50% / 0.5)"
                    d="
                         M 10, 50
                         a 40,40 0 1,1 80,0
                         a 40,40 0 1,1 -80,0
                       "
                  />
                  <text
                    id="text"
                    font-family="monospace"
                    font-size="12"
                    font-weight="bold"
                    fill="var(--text-1)"
                  >
                    <textPath id="textPath" href="#circlePath">meme</textPath>
                  </text>
                </svg>
              </div>
              <div class="circle"></div>
              <div class="cheems">
                <img src="images/patita.png" alt="" class="patita" />
              </div>
              <div class="rama rama-color">
                <div class="hoja h-1"></div>
                <div class="hoja h-2"></div>
                <div class="hoja h-3"></div>
                <div class="hoja h-4"></div>
                <div class="hoja h-5"></div>
                <div class="hoja h-6"></div>
                <div class="hoja h-7"></div>
                <div class="hoja h-8"></div>
                <div class="hoja h-9"></div>
                <div class="hoja h-10"></div>
                <div class="hoja h-11"></div>
                <div class="hoja h-12"></div>
                <div class="hoja h-13"></div>
                <div class="hoja h-14"></div>
                <div class="hoja h-15"></div>
                <div class="hoja h-16"></div>
                <div class="hoja h-17"></div>
                <div class="hoja h-18"></div>
                <div class="hoja h-19"></div>
                <div class="hoja h-20"></div>
                <div class="hoja h-21"></div>
                <div class="hoja h-22"></div>
                <div class="hoja h-23"></div>
                <div class="hoja h-24"></div>
                <div class="hoja h-25"></div>
                <div class="hoja h-26"></div>
                <div class="hoja h-27"></div>
                <div class="hoja h-28"></div>
                <div class="hoja h-29"></div>
                <div class="hoja h-31"></div>
                <div class="hoja h-32"></div>
                <div class="hoja h-33"></div>
                <div class="hoja h-34"></div>
                <div class="hoja h-35"></div>
                <div class="hoja h-36"></div>
                <div class="hoja h-37"></div>
                <div class="hoja h-38"></div>
                <div class="hoja h-39"></div>
                <div class="hoja h-40"></div>
                <div class="hoja h-41"></div>
                <div class="hoja h-42"></div>
              </div>
            </div>
          </div>
          <div class="botones">
            <button id="go">Iniciar</button>
            <button id="rules">Reglas</button>
          </div>
        </div>`;
var grid = document.getElementById("principal");

var cont_click = 0;
function dificult(level) {
  //level = parseInt(mode.dataset["mode"]);
  console.log(level);
  var erase = document.getElementById("menu");
  if (erase != null) {
    erase.remove();
  }
  modal2.style.display = "none";
  if (level == 16) {
    var values = ["1", "2", "3", "4", "5", "6", "7", "8"];
    var values2 = ["7", "1", "5", "8", "4", "3", "6", "2"];
    grid.style.gridTemplateColumns = "repeat(4, min-content)";
    //  grid.style.gridTemplateRows = "repeat(4, 1fr)";
    cartas(values, values2);
    contador(40, level);
  }

  if (level == 32) {
    var values = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
    ];
    var values2 = [
      "9",
      "2",
      "14",
      "4",
      "7",
      "5",
      "8",
      "15",
      "6",
      "11",
      "13",
      "16",
      "3",
      "12",
      "1",
      "10",
    ];
    grid.style.gridTemplateColumns = "repeat(8, min-content)";
    //  grid.style.gridTemplateRows = "repeat(4, 1fr)";
    cartas(values, values2);
    contador(100, level);
  }

  if (level == 64) {
    var values = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
      "31",
      "32",
    ];
    var values2 = [
      "3",
      "8",
      "5",
      "9",
      "6",
      "7",
      "26",
      "4",
      "13",
      "2",
      "31",
      "29",
      "11",
      "19",
      "14",
      "10",
      "15",
      "22",
      "1",
      "12",
      "16",
      "20",
      "25",
      "23",
      "21",
      "24",
      "17",
      "27",
      "28",
      "32",
      "18",
      "30",
    ];
    grid.style.gridTemplateColumns = "repeat(13, min-content)";
    cartas(values, values2);
    contador(235, level);
  }

  var card = document.querySelectorAll(".flip-card");

  checkCards(card, "flip-card");

  if (level == 64) {
    for (let i = 0; i < card.length; i++) {
      card[i].style.width = 93 + "px";
      card[i].style.height = 93 + "px";
    }
  }
}

function cartas(values, values2) {
  var cards = [
    values.sort(function () {
      return Math.random() - 0.5;
    }),
    values2.sort(function () {
      return Math.random() - 0.5;
    }),
  ];

  console.log(cards);

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
        cont_click = cont_click;
      } else {
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

function contador(tipo, level) {
  var dance = document.createElement("div");
  dance.className = "flip-card";
  dance.id = "number";
  dance.style.display = "flex";
  dance.style.alignItems = "center";
  dance.style.justifyContent = "center";
  grid.append(dance);
  var n = 0;
  var l = document.getElementById("number");
  var cont = setInterval(function () {
    n++;
    l.innerText = n;
    if (n == tipo + 1) {
      clearInterval(cont);
      if (confirm("Reintentar?") == true) {
        grid.innerHTML = "";
        dificult(level);
      } else {
        grid.style = "";
        grid.innerHTML = menu;
        botones();
      }
    }
  }, 1000);
}

var modal = document.getElementById("myModal");
var btn = document.getElementById("rules");

var modal2 = document.getElementById("myModal2");
var btn2 = document.getElementById("go");

var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];
btn.onclick = function () {
  modal.style.display = "block";
};

btn2.onclick = function () {
  modal2.style.display = "block";
};
span.onclick = function () {
  modal.style.display = "none";
};

span2.onclick = function () {
  modal2.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
};

function botones() {
  var modal = document.getElementById("myModal");
  var btn = document.getElementById("rules");

  var modal2 = document.getElementById("myModal2");
  var btn2 = document.getElementById("go");

  var span = document.getElementsByClassName("close")[0];
  var span2 = document.getElementsByClassName("close")[1];
  btn.onclick = function () {
    modal.style.display = "block";
  };

  btn2.onclick = function () {
    modal2.style.display = "block";
  };
  span.onclick = function () {
    modal.style.display = "none";
  };

  span2.onclick = function () {
    modal2.style.display = "none";
  };
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
    if (event.target == modal2) {
      modal2.style.display = "none";
    }
  };
}
