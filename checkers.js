  var checkerboard = [
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null]
  ];
  /* setSquare, which places a player 
  (either 'R' or 'B') at a particular row and column on the board.
getPieceAt, which returns the piece at a particular row and column;
 if there's no piece at that position, it should return null.*/
function setSquare(player, row, col) {
    // Your Code Here
    checkerboard[row][col]=player;
  }
function getPieceAt(row, col) {
    // Your Code Here
    return checkerboard[row][col];
  }
