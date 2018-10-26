$(document).ready(function(){


var targetNum = 0
var score = 0
var crystal1 = 0
var crystal2 = 0
var crystal3 = 0
var crystal4 = 0
var wins = 0
var losses = 0

function resetGame(){
    targetNum = Math.floor(Math.random() * 50)+10
    crystal1 = Math.floor(Math.random() * 10)+1
    crystal2 = Math.floor(Math.random() * 10)+1
    crystal3 = Math.floor(Math.random() * 10)+1
    crystal4 = Math.floor(Math.random() * 10)+1
    score = 0
    $("#desired-number").text("Target Score: " + targetNum)
    $(".total-score").text(score)
    $(".crystal-1").val(crystal1)
    $(".crystal-2").val(crystal2)
    $(".crystal-3").val(crystal3)
    $(".crystal-4").val(crystal4)
}
function checkScore(){
    if(score > targetNum){
        losses += 1
        $("#losses").text("Losses: " + losses)
        alert("You went over!\nYour score: " + score + "\nTarget Score: " + targetNum + "\n Try again.")
        resetGame()
    } else if(score === targetNum){
        wins += 1
        $("#wins").text("Wins: " + wins)
        alert("You got it!\nYour score: " + score + "\nTarget Score: " + targetNum + "\n See if you can do it again!")
        resetGame()
    }
}
resetGame()
$("button").on("click", function(){
    parseInt(score)
    score += parseInt(this.value)
    $(".total-score").text(score)
    checkScore()
})
})
