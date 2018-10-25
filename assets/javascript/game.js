var targetNum = 0
var score = 0
var crystal1 = 0
var crystal2 = 0
var crystal3 = 0
var crystal4 = 0
var wins = 0
var losses = 0

function resetGame(){
    targetNum = Math.floor(Math.random() * 200)
    crystal1 = Math.floor(Math.random() * targetNum)
    crystal2 = Math.floor(Math.random() * targetNum)
    crystal3 = Math.floor(Math.random() * targetNum)
    crystal4 = Math.floor(Math.random() * targetNum)
    console.log(targetNum)
    console.log("1: " + crystal1, "2: " + crystal2, "3: " + crystal3, "4: " + crystal4)
}
resetGame()