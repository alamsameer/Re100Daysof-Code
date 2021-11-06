var OrigBoard;
const huPlayer="o"
document.getElementById(2).innerText= huPlayer;
const aiplayer="x"
const wincombo=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2]
]

 const cells=document.querySelectorAll(".cell")

 startGame()
 function startGame(){
     document.querySelector(".endgame").style.display="none"
    OrigBoard=Array.from(Array(9).keys())
    for(var i=0;i<cells.length;i++){
        cells[i].innerText=" ";
        cells[i].style.removeProperty("background-color")
        cells[i].addEventListener("click",turnclick,false);
    }
 }
  function turnclick(square){
      if(typeof OrigBoard[square.target.id] == "number"){
        //   console.log("you clicked",square.target.id);
          turn(square.target.id,huPlayer)
          if(checktie){
            turn (bestspot(),aiplayer)
        }
      }

  }

 function turn (squareId,player){
  OrigBoard[squareId]=player;
//   console.log(OrigBoard);
document.getElementById(squareId).innerText= player
let gameWon=checkWin(OrigBoard,player)
if(gameWon)gameOver(gameWon)
}
  function checkWin(board,player){
    let plays = board.reduce((acc, elem, i) =>
		(elem === player) ? acc.concat(i) : acc, []);
    // console.log(plays);
    let gameWon=null;
    for (let [index,win] of wincombo.entries()){
      if(win.every(elem=>plays.indexOf(elem)>-1)){
        gameWon={index:index,player:player}
        break;
      }
    }
     return gameWon;
  }

  function gameOver(gameWon){
    for(let index of wincombo[gameWon.index])
    {
      document.getElementById(index).style.backgroundColor= gameWon.player==huPlayer?"blue" :"red";
    }
    for(var i=0;i<cells.length;i++){
      cells[i].removeEventListener("click",turnclick,false)
    }
    declareWinner(gameWon.player==huPlayer?"you win":"you lose")
  }
  function declareWinner(who){
    document.querySelector(".endgame").style.display="block"
    document.querySelector(".text").innerText=who
  }

  function emptySquare(){
    console.log("i am called");
    return OrigBoard.filter(s=>typeof s=="number")
  }

  function bestspot(){
    return emptySquare()[0];
  }

  function checktie(){
    if( emptySquare().length === 0){
      for(var i=0;i<cells.length;i++){
        cells[i].style.backgroundColor="green"
        cells[i].removeEventListener("click",turnclick)
      }
      declareWinner("Tie game!!")
      return true
    }
    return false
  }