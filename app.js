let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let winner = document.getElementById("winner");
let turnO = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
const resetGame = () => {
  boxes.forEach(box, () => {
    // box.disable = false;
  });
};
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;
    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        winner.innerText = "The Winner is " + pos1;
        boxes.forEach((box) => {
          box.disabled = true;
        });
        resetBtn.innerText = "New Game";
      }
    }
  }
};
resetBtn.addEventListener("click", () => {
  winner.innerText = " ";
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerText = "";
    resetBtn.innerText = "Reset Game";
  });
});
