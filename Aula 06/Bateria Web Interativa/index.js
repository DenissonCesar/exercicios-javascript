// 1. Seleciona todos os botões com a classe "drum"
const drumButtons = document.querySelectorAll(".drum");

// 2. Adiciona eventos de clique a cada botão
for (let i = 0; i < drumButtons.length; i++) {
  drumButtons[i].addEventListener("click", function () {
    const buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

// 3. Captura eventos de tecla (keydown)
document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

// 4. Toca o som com base na tecla
function makeSound(key) {
  switch (key) {
    case "w":
      new Audio("sounds/tom-1.mp3").play();
      break;
    case "a":
      new Audio("sounds/tom-2.mp3").play();
      break;
    case "s":
      new Audio("sounds/tom-3.mp3").play();
      break;
    case "d":
      new Audio("sounds/tom-4.mp3").play();
      break;
    case "j":
      new Audio("sounds/snare.mp3").play();
      break;
    case "k":
      new Audio("sounds/crash.mp3").play();
      break;
    case "l":
      new Audio("sounds/kick-bass.mp3").play();
      break;
    default:
      console.log(key);
  }
}

// 5. Anima o botão pressionado
function buttonAnimation(currentKey) {
  const activeButton = document.querySelector("." + currentKey);

  if (activeButton) {
    activeButton.classList.add("pressed");
    setTimeout(function () {
      activeButton.classList.remove("pressed");
    }, 100);
  }
}
