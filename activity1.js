score = 0;
function updatescore()
{
    score = score + 1;
    document.getElementById("score").innerHTML = "score: " + score;
}

function savescore()
{
    localStorage.setItem("score", score);

}

function nextPage()
{
    window.location = "activity_2.html";
}