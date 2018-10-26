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
    targetNum = Math.floor(Math.random() * 120)+19
    crystal1 = Math.floor(Math.random() * 12)+1
    crystal2 = Math.floor(Math.random() * 12)+1
    crystal3 = Math.floor(Math.random() * 12)+1
    crystal4 = Math.floor(Math.random() * 12)+1
    score = 0
    $("#desired-number").text("Target Score: " + targetNum)
    $(".total-score").text(score)
    $(".total-score").css("color", "black")
    $("#wins").css("color", "black")
    $("#losses").css("color", "black")
    $(".crystal-1").val(crystal1)
    $(".crystal-2").val(crystal2)
    $(".crystal-3").val(crystal3)
    $(".crystal-4").val(crystal4)
}
function checkScore(){
    if(score > targetNum){
        losses += 1
        $("#losses").text("Losses: " + losses)
        // alert("You went over!\nYour score: " + score + "\nTarget Score: " + targetNum + "\n Try again.")
        $("#losses").css("color", "red")
        $(".total-score").css("color", "red")
        setTimeout(resetGame, 1000 * 2)
    } else if(score === targetNum){
        wins += 1
        $("#wins").text("Wins: " + wins)
        // alert("You got it!\nYour score: " + score + "\nTarget Score: " + targetNum + "\n See if you can do it again!")
        $("#wins").css("color", "green")
        $(".total-score").css("color", "green")
        setTimeout(resetGame, 1000 * 2)
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
