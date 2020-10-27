document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".grid");
  let sqaures = Array.from(grid.querySelectorAll("div"));
  const width = 10;
  const height = 20;
  let currentPosition = 4;
  //The tetriminos

  const lTetromino = [
    [1, width + 1, width * 2 + 1, 2],
    [width, width + 1, width + 2, width * 2 + 2],
    [1, width + 1, width * 2 + 1, width * 2],
    [width, width * 2, width * 2 + 1, width * 2 + 2],
  ];

  const zTetromino = [
    [0, width, width + 1, width * 2 + 1],
    [width + 1, width + 2, width * 2, width * 2 + 1],
    [0, width, width + 1, width * 2 + 1],
    [width + 1, width + 2, width * 2, width * 2 + 1],
  ];

  const tTetromino = [
    [1, width, width + 1, width + 2],
    [1, width + 1, width + 2, width * 2 + 1],
    [width, width + 1, width + 2, width * 2 + 1],
    [1, width, width + 1, width * 2 + 1],
  ];

  const oTetromino = [
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
  ];
  const iTetromino = [
    [1, width + 1, width * 2 + 1, width * 3 + 1],
    [width, width + 1, width + 2, width + 3],
    [1, width + 1, width * 2 + 1, width * 3 + 1],
    [width, width + 1, width + 2, width + 3],
  ];

  const theTetrominoes = [
    lTetromino,
    zTetromino,
    tTetromino,
    oTetromino,
    iTetromino,
  ];

  //Randomly select Tetromino
  let random = Math.floor(Math.random() * theTetrominoes.length);
  let currentRotation = 0;
  let current = theTetrominoes[random][currentRotation];

  //draw the shape
  function draw() {
    current.forEach((index) =>
      sqaures[currentPosition + index].classList.add("block")
    );
  }

  //undraw the shape
  function undraw() {
    current.forEach((index) =>
      sqaures[currentPosition + index].classList.remove("block")
    );
  }

  //move down shape
  function moveDown() {
    undraw();
    currentPosition = currentPosition += width;
    draw();
    freeze();
  }

  //move left and prevent collisions with shapes moving left
  function moveRight() {
      undraw()
      const isAtRightEdge = current.some(index => (currnetPsition + index) % width === width - 1)
      if(!isAtRightEdge) currentPosition += 1
      if (current.some(index=> squares[currentPosition + index].classList.contains('block2'))){
          currentPsition -= 1;
      }
      draw();
  }
});
