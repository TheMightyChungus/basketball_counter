let homeScoreOne = document.getElementById("home1")
let homeStoreEl = document.getElementById("home-score")
let homeScore = 0

function addHomeOne(){
    homeScore += 1
    homeStoreEl.textContent = homeScore
}


function addHomeTwo(){
    homeScore += 2
    homeStoreEl.textContent = homeScore

}

function addHomeThree(){
    homeScore += 3
    homeStoreEl.textContent = homeScore
}



let awayScoreOne = document.getElementById("guest1")
let awayStoreEl = document.getElementById("guest-score")
let awayScore = 0

function addAwayOne(){
    awayScore += 1
    awayStoreEl.textContent = awayScore
}

function addAwayTwo(){
    awayScore += 2
    awayStoreEl.textContent = awayScore
}

function addAwayThree(){
    awayScore += 3
    awayStoreEl.textContent = awayScore
}