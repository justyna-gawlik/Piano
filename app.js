let key = document.querySelectorAll(".key").length;

for (let i = 0; i < key; i++) {
  document.querySelectorAll(".key")[i].addEventListener("click", function () {
    let buttonInnerHTML = this.innerHTML;

    switch (buttonInnerHTML) {
      case "C3":
        let audio1 = new Audio("sounds/c3.mp3");
        audio1.play();
        audio1.currentTime = 0;
        break;
      case "C#3":
        let audio2 = new Audio("sounds/c-3.mp3");
        audio2.play();
        audio2.currentTime = 0;
        break;
      case "D3":
        let audio3 = new Audio("sounds/d3.mp3");
        audio3.play();
        audio3.currentTime = 0;
        break;
      case "D#3":
        let audio4 = new Audio("sounds/d-3.mp3");
        audio4.play();
        audio4.currentTime = 0;
        break;
      case "E3":
        let audio5 = new Audio("sounds/e3.mp3");
        audio5.play();
        audio5.currentTime = 0;
        break;
      case "F3":
        let audio6 = new Audio("sounds/f3.mp3");
        audio6.play();
        audio6.currentTime = 0;
        break;
      case "F#3":
        let audio7 = new Audio("sounds/f-3.mp3");
        audio7.play();
        audio7.currentTime = 0;
        break;
      case "G3":
        let audio8 = new Audio("sounds/g3.mp3");
        audio8.play();
        audio8.currentTime = 0;
        break;
      case "G#3":
        let audio9 = new Audio("sounds/g-3.mp3");
        audio9.play();
        audio9.currentTime = 0;
        break;
      case "A3":
        let audio10 = new Audio("sounds/a3.mp3");
        audio10.play();
        audio10.currentTime = 0;
        break;
      case "A#3":
        let audio11 = new Audio("sounds/a-3.mp3");
        audio11.play();
        audio11.currentTime = 0;
        break;
      case "B3":
        let audio12 = new Audio("sounds/b3.mp3");
        audio12.play();
        audio12.currentTime = 0;
        break;
      case "C4":
        let audio13 = new Audio("sounds/c4.mp3");
        audio13.play();
        audio13.currentTime = 0;
        break;
      case "C#4":
        let audio14 = new Audio("sounds/c-4.mp3");
        audio14.play();
        audio14.currentTime = 0;
        break;
      case "D4":
        let audio15 = new Audio("sounds/d4.mp3");
        audio15.play();
        audio15.currentTime = 0;
        break;
      case "D#4":
        let audio16 = new Audio("sounds/d-4.mp3");
        audio16.play();
        audio16.currentTime = 0;
        break;
      case "E4":
        let audio17 = new Audio("sounds/e4.mp3");
        audio17.play();
        audio17.currentTime = 0;
        break;
      case "F4":
        let audio18 = new Audio("sounds/f4.mp3");
        audio18.play();
        audio18.currentTime = 0;
        break;
      case "F#4":
        let audio19 = new Audio("sounds/f-4.mp3");
        audio19.play();
        audio19.currentTime = 0;
        break;
      case "G4":
        let audio20 = new Audio("sounds/g4.mp3");
        audio20.play();
        audio20.currentTime = 0;
        break;
      case "G#4":
        let audio21 = new Audio("sounds/g-4.mp3");
        audio21.play();
        audio21.currentTime = 0;
        break;
      case "A4":
        let audio22 = new Audio("sounds/a4.mp3");
        audio22.play();
        audio22.currentTime = 0;
        break;
      case "A#4":
        let audio23 = new Audio("sounds/a-4.mp3");
        audio23.play();
        audio23.currentTime = 0;
        break;
      case "B4":
        let audio24 = new Audio("sounds/b4.mp3");
        audio24.play();
        audio24.currentTime = 0;
        break;
      case "C5":
        let audio25 = new Audio("sounds/c5.mp3");
        audio25.play();
        audio25.currentTime = 0;
        break;
      case "C#5":
        let audio26 = new Audio("sounds/c-5.mp3");
        audio26.play();
        audio26.currentTime = 0;
        break;
      case "D5":
        let audio27 = new Audio("sounds/d5.mp3");
        audio27.play();
        audio27.currentTime = 0;
        break;
      case "D#5":
        let audio28 = new Audio("sounds/d-5.mp3");
        audio28.play();
        audio28.currentTime = 0;
        break;
      case "E5":
        let audio29 = new Audio("sounds/e5.mp3");
        audio29.play();
        audio29.currentTime = 0;
        break;
      case "F5":
        let audio30 = new Audio("sounds/f5.mp3");
        audio30.play();
        audio30.currentTime = 0;
        break;
      case "F#5":
        let audio31 = new Audio("sounds/f-5.mp3");
        audio31.play();
        audio31.currentTime = 0;
        break;
      case "G5":
        let audio32 = new Audio("sounds/g5.mp3");
        audio32.play();
        audio32.currentTime = 0;
        break;
      case "G#5":
        let audio33 = new Audio("sounds/g-5.mp3");
        audio33.play();
        audio33.currentTime = 0;
        break;
      case "A5":
        let audio34 = new Audio("sounds/a5.mp3");
        audio34.play();
        audio34.currentTime = 0;
        break;
      case "A#5":
        let audio35 = new Audio("sounds/a-5.mp3");
        audio35.play();
        audio35.currentTime = 0;

        break;
      case "B5":
        let audio36 = new Audio("sounds/b5.mp3");
        audio36.play();
        audio36.currentTime = 0;
        break;
      case "C6":
        let audio37 = new Audio("sounds/c6.mp3");
        audio37.play();
        audio37.currentTime = 0;
        break;

      default:
        console.log("error");
    }
  });
}
