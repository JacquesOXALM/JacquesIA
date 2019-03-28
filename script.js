function constructBracket() {
    team = document.getElementById("team").value;
    seed = document.getElementById("seed").value;
    region =document.getElementById("region").value;

    var position = ["topLeft", "bottomLeft", "topRight","bottomRight"];
    document.getElementById( position[region - 1] + String(seed) ).innerHTML = team;
    console.log( position[region - 1] + String(seed));





}

function runBracket() {
    var placementChances = [];
    var chance1 = Math.floor((Math.random() * 10000) + 1);
    var chance2 = Math.floor((Math.random() * 10000) + 1);
    var chance3 = Math.floor((Math.random() * 10000) + 1);
    var chance4 = Math.floor((Math.random() * 10000) + 1);
    var chance5 = Math.floor((Math.random() * 10000) + 1);
    var chance6 = Math.floor((Math.random() * 10000) + 1);
    var chance7 = Math.floor((Math.random() * 10000) + 1);
    var chance8 = Math.floor((Math.random() * 10000) + 1);
    var chance9 = Math.floor((Math.random() * 10000) + 1);
    var chance10 = Math.floor((Math.random() * 10000) + 1);
    var chance11 = Math.floor((Math.random() * 10000) + 1);
    var chance12 = Math.floor((Math.random() * 10000) + 1);
    var chance13 = Math.floor((Math.random() * 10000) + 1);
    var chance14 = Math.floor((Math.random() * 10000) + 1);
    var chance15 = Math.floor((Math.random() * 10000) + 1);
    var chance16 = Math.floor((Math.random() * 10000) + 1);
    var chance17 = Math.floor((Math.random() * 10000) + 1);
    var chance18 = Math.floor((Math.random() * 10000) + 1);
    var chance19 = Math.floor((Math.random() * 10000) + 1);
    var chance20 = Math.floor((Math.random() * 10000) + 1);
    var chance21 = Math.floor((Math.random() * 10000) + 1);
    var chance22 = Math.floor((Math.random() * 10000) + 1);
    var chance23 = Math.floor((Math.random() * 10000) + 1);
    var chance24 = Math.floor((Math.random() * 10000) + 1);
    var chance25 = Math.floor((Math.random() * 10000) + 1);
    var chance26 = Math.floor((Math.random() * 10000) + 1);
    var chance27 = Math.floor((Math.random() * 10000) + 1);
    var chance28 = Math.floor((Math.random() * 10000) + 1);
    var chance29 = Math.floor((Math.random() * 10000) + 1);
    var chance30 = Math.floor((Math.random() * 10000) + 1);
    var chance31 = Math.floor((Math.random() * 10000) + 1);
    var chance32 = Math.floor((Math.random() * 10000) + 1);
    var secondChance1 = Math.floor((Math.random() * 10000) + 1);
    var secondChance2 = Math.floor((Math.random() * 10000) + 1);
    var secondChance3 = Math.floor((Math.random() * 10000) + 1);
    var secondChance4 = Math.floor((Math.random() * 10000) + 1);
    var secondChance5 = Math.floor((Math.random() * 10000) + 1);
    var secondChance6 = Math.floor((Math.random() * 10000) + 1);
    var secondChance7 = Math.floor((Math.random() * 10000) + 1);
    var secondChance8 = Math.floor((Math.random() * 10000) + 1);
    var secondChance9 = Math.floor((Math.random() * 10000) + 1);
    var secondChance10 = Math.floor((Math.random() * 10000) + 1);
    var secondChance11 = Math.floor((Math.random() * 10000) + 1);
    var secondChance12 = Math.floor((Math.random() * 10000) + 1);
    var secondChance13 = Math.floor((Math.random() * 10000) + 1);
    var secondChance14 = Math.floor((Math.random() * 10000) + 1);
    var secondChance15 = Math.floor((Math.random() * 10000) + 1);
    var secondChance16 = Math.floor((Math.random() * 10000) + 1);
    var thirdChance1 = Math.floor((Math.random() * 10000) + 1);
    var thirdChance2 = Math.floor((Math.random() * 10000) + 1);
    var thirdChance3 = Math.floor((Math.random() * 10000) + 1);
    var thirdChance4 = Math.floor((Math.random() * 10000) + 1);
    var thirdChance5 = Math.floor((Math.random() * 10000) + 1);
    var thirdChance6 = Math.floor((Math.random() * 10000) + 1);
    var thirdChance7 = Math.floor((Math.random() * 10000) + 1);
    var thirdChance8 = Math.floor((Math.random() * 10000) + 1);
    var fiftyFifty1 = Math.floor((Math.random() * 10000) + 1);
    var fiftyFifty2 = Math.floor((Math.random() * 10000) + 1);
    var fiftyFifty3 = Math.floor((Math.random() * 10000) + 1);
    var fiftyFifty4 = Math.floor((Math.random() * 10000) + 1);
    var natties1 = Math.floor((Math.random() * 10000) + 1);
    var natties2 = Math.floor((Math.random() * 10000) + 1);
    var championshipGame = Math.floor((Math.random() * 10000) + 1);


    if (chance1 <= 9846) {
        document.getElementById("topLeftWinner1").innerHTML = document.getElementById("topLeft1").innerHTML;
    } else {
        document.getElementById("topLeftWinner1").innerHTML = document.getElementById("topLeft16").innerHTML;
    }
    if (chance2 <= 5441) {
        document.getElementById("topLeftWinner2").innerHTML = document.getElementById("topLeft8").innerHTML;
    } else {
        document.getElementById("topLeftWinner2").innerHTML = document.getElementById("topLeft9").innerHTML;
    }
    if (chance3 <= 7880) {
        document.getElementById("topLeftWinner3").innerHTML = document.getElementById("topLeft5").innerHTML;
    } else {
        document.getElementById("topLeftWinner3").innerHTML = document.getElementById("topLeft12").innerHTML;
    }
    if (chance4 <= 8542) {
        document.getElementById("topLeftWinner4").innerHTML = document.getElementById("topLeft4").innerHTML;
    } else {
        document.getElementById("topLeftWinner4").innerHTML = document.getElementById("topLeft13").innerHTML;
    }
    if (chance5 <= 7128) {
        document.getElementById("topLeftWinner5").innerHTML = document.getElementById("topLeft6").innerHTML;
    } else {
        document.getElementById("topLeftWinner5").innerHTML = document.getElementById("topLeft11").innerHTML;
    }
    if (chance6 <= 9098) {
        document.getElementById("topLeftWinner6").innerHTML = document.getElementById("topLeft3").innerHTML;
    } else {
        document.getElementById("topLeftWinner6").innerHTML = document.getElementById("topLeft14").innerHTML;
    }
    if (chance7 <= 6307) {
        document.getElementById("topLeftWinner7").innerHTML = document.getElementById("topLeft7").innerHTML;
    } else {
        document.getElementById("topLeftWinner7").innerHTML = document.getElementById("topLeft10").innerHTML;
    }
    if (chance8 <= 9536) {
        document.getElementById("topLeftWinner8").innerHTML = document.getElementById("topLeft2").innerHTML;
    } else {
        document.getElementById("topLeftWinner8").innerHTML = document.getElementById("topLeft15").innerHTML;
    }
    if (chance9 <= 9846) {
        document.getElementById("bottomLeftWinner1").innerHTML = document.getElementById("bottomLeft1").innerHTML;
    } else {
        document.getElementById("bottomLeftWinner1").innerHTML = document.getElementById("bottomLeft16").innerHTML;
    }
    if (chance10 <= 5441) {
        document.getElementById("bottomLeftWinner2").innerHTML = document.getElementById("bottomLeft8").innerHTML;
    } else {
        document.getElementById("bottomLeftWinner2").innerHTML = document.getElementById("bottomLeft9").innerHTML;
    }
    if (chance11 <= 7880) {
        document.getElementById("bottomLeftWinner3").innerHTML = document.getElementById("bottomLeft5").innerHTML;
    } else {
        document.getElementById("bottomLeftWinner3").innerHTML = document.getElementById("bottomLeft12").innerHTML;
    }
    if (chance12 <= 8542) {
        document.getElementById("bottomLeftWinner4").innerHTML = document.getElementById("bottomLeft4").innerHTML;
    } else {
        document.getElementById("bottomLeftWinner4").innerHTML = document.getElementById("bottomLeft13").innerHTML;
    }
    if (chance13 <= 7128) {
        document.getElementById("bottomLeftWinner5").innerHTML = document.getElementById("bottomLeft6").innerHTML;
    } else {
        document.getElementById("bottomLeftWinner5").innerHTML = document.getElementById("bottomLeft11").innerHTML;
    }
    if (chance14 <= 9098) {
        document.getElementById("bottomLeftWinner6").innerHTML = document.getElementById("bottomLeft3").innerHTML;
    } else {
        document.getElementById("bottomLeftWinner6").innerHTML = document.getElementById("bottomLeft14").innerHTML;
    }
    if (chance15 <= 6307) {
        document.getElementById("bottomLeftWinner7").innerHTML = document.getElementById("bottomLeft7").innerHTML;
    } else {
        document.getElementById("bottomLeftWinner7").innerHTML = document.getElementById("bottomLeft10").innerHTML;
    }
    if (chance16 <= 9536) {
        document.getElementById("bottomLeftWinner8").innerHTML = document.getElementById("bottomLeft2").innerHTML;
    } else {
        document.getElementById("bottomLeftWinner8").innerHTML = document.getElementById("bottomLeft15").innerHTML;
    }
    if (chance17 <= 9846) {
        document.getElementById("topRightWinner1").innerHTML = document.getElementById("topRight1").innerHTML;
    } else {
        document.getElementById("topRightWinner1").innerHTML = document.getElementById("topRight16").innerHTML;
    }
    if (chance18 <= 5441) {
        document.getElementById("topRightWinner2").innerHTML = document.getElementById("topRight8").innerHTML;
    } else {
        document.getElementById("topRightWinner2").innerHTML = document.getElementById("topRight9").innerHTML;
    }
    if (chance19 <= 7880) {
        document.getElementById("topRightWinner3").innerHTML = document.getElementById("topRight5").innerHTML;
    } else {
        document.getElementById("topRightWinner3").innerHTML = document.getElementById("topRight12").innerHTML;
    }
    if (chance20 <= 8542) {
        document.getElementById("topRightWinner4").innerHTML = document.getElementById("topRight4").innerHTML;
    } else {
        document.getElementById("topRightWinner4").innerHTML = document.getElementById("topRight13").innerHTML;
    }
    if (chance21 <= 7128) {
        document.getElementById("topRightWinner5").innerHTML = document.getElementById("topRight6").innerHTML;
    } else {
        document.getElementById("topRightWinner5").innerHTML = document.getElementById("topRight11").innerHTML;
    }
    if (chance22 <= 9098) {
        document.getElementById("topRightWinner6").innerHTML = document.getElementById("topRight3").innerHTML;
    } else {
        document.getElementById("topRightWinner6").innerHTML = document.getElementById("topRight14").innerHTML;
    }
    if (chance23 <= 6307) {
        document.getElementById("topRightWinner7").innerHTML = document.getElementById("topRight7").innerHTML;
    } else {
        document.getElementById("topRightWinner7").innerHTML = document.getElementById("topRight10").innerHTML;
    }
    if (chance24 <= 9536) {
        document.getElementById("topRightWinner8").innerHTML = document.getElementById("topRight2").innerHTML;
    } else {
        document.getElementById("topRightWinner8").innerHTML = document.getElementById("topRight15").innerHTML;
    }
    if (chance25 <= 9846) {
        document.getElementById("bottomRightWinner1").innerHTML = document.getElementById("bottomRight1").innerHTML;
    } else {
        document.getElementById("bottomRightWinner1").innerHTML = document.getElementById("bottomRight16").innerHTML;
    }
    if (chance26 <= 5441) {
        document.getElementById("bottomRightWinner2").innerHTML = document.getElementById("bottomRight8").innerHTML;
    } else {
        document.getElementById("bottomRightWinner2").innerHTML = document.getElementById("bottomRight9").innerHTML;
    }
    if (chance27 <= 7880) {
        document.getElementById("bottomRightWinner3").innerHTML = document.getElementById("bottomRight5").innerHTML;
    } else {
        document.getElementById("bottomRightWinner3").innerHTML = document.getElementById("bottomRight12").innerHTML;
    }
    if (chance28 <= 8542) {
        document.getElementById("bottomRightWinner4").innerHTML = document.getElementById("bottomRight4").innerHTML;
    } else {
        document.getElementById("bottomRightWinner4").innerHTML = document.getElementById("bottomRight13").innerHTML;
    }
    if (chance29 <= 7128) {
        document.getElementById("bottomRightWinner5").innerHTML = document.getElementById("bottomRight6").innerHTML;
    } else {
        document.getElementById("bottomRightWinner5").innerHTML = document.getElementById("bottomRight11").innerHTML;
    }
    if (chance30 <= 9098) {
        document.getElementById("bottomRightWinner6").innerHTML = document.getElementById("bottomRight3").innerHTML;
    } else {
        document.getElementById("bottomRightWinner6").innerHTML = document.getElementById("bottomRight14").innerHTML;
    }
    if (chance31 <= 6307) {
        document.getElementById("bottomRightWinner7").innerHTML = document.getElementById("bottomRight7").innerHTML;
    } else {
        document.getElementById("bottomRightWinner7").innerHTML = document.getElementById("bottomRight10").innerHTML;
    }
    if (chance32 <= 9536) {
        document.getElementById("bottomRightWinner8").innerHTML = document.getElementById("bottomRight2").innerHTML;
    } else {
        document.getElementById("bottomRightWinner8").innerHTML = document.getElementById("bottomRight15").innerHTML;
    }
    if (document.getElementById("topLeftWinner1").innerHTML == document.getElementById("topLeft1").innerHTML && document.getElementById("topLeftWinner2").innerHTML == document.getElementById("topLeft8").innerHTML) {
        if (secondChance1 <= 7033) {
            document.getElementById("sS1").innerHTML = document.getElementById("topLeft1").innerHTML;
        } else {
            document.getElementById("sS1").innerHTML = document.getElementById("topLeft8").innerHTML;
        }
    } else if (document.getElementById("topLeftWinner1").innerHTML == document.getElementById("topLeft1").innerHTML && document.getElementById("topLeftWinner2").innerHTML == document.getElementById("topLeft9").innerHTML) {
        if (secondChance1 <= 7388) {
            document.getElementById("sS1").innerHTML = document.getElementById("topLeft1").innerHTML;
        } else {
            document.getElementById("sS1").innerHTML = document.getElementById("topLeft9").innerHTML;
        }
    } else if (document.getElementById("topLeftWinner1").innerHTML == document.getElementById("topLeft16").innerHTML && document.getElementById("topLeftWinner2").innerHTML == document.getElementById("topLeft8").innerHTML) {
        if (secondChance1 <= 357) {
            document.getElementById("sS1").innerHTML = document.getElementById("topLeft16").innerHTML;
        } else {
            document.getElementById("sS1").innerHTML = document.getElementById("topLeft8").innerHTML;
        }
    } else {
        if (secondChance1 <= 423) {
            document.getElementById("sS1").innerHTML = document.getElementById("topLeft16").innerHTML;
        } else {
            document.getElementById("sS1").innerHTML = document.getElementById("topLeft9").innerHTML;
        }
    }
    if (document.getElementById("topLeftWinner3").innerHTML == document.getElementById("topLeft5").innerHTML && document.getElementById("topLeftWinner4").innerHTML == document.getElementById("topLeft4").innerHTML) {
        if (secondChance2 <= 4700) {
            document.getElementById("sS2").innerHTML = document.getElementById("topLeft5").innerHTML;
        } else {
            document.getElementById("sS2").innerHTML = document.getElementById("topLeft4").innerHTML;
        }
    } else if (document.getElementById("topLeftWinner3").innerHTML == document.getElementById("topLeft5").innerHTML && document.getElementById("topLeftWinner4").innerHTML == document.getElementById("topLeft13").innerHTML) {
        if (secondChance2 <= 8386) {
            document.getElementById("sS2").innerHTML = document.getElementById("topLeft5").innerHTML;
        } else {
            document.getElementById("sS2").innerHTML = document.getElementById("topLeft13").innerHTML;
        }
    } else if (document.getElementById("topLeftWinner3").innerHTML == document.getElementById("topLeft12").innerHTML && document.getElementById("topLeftWinner4").innerHTML == document.getElementById("topLeft4").innerHTML) {
        if (secondChance2 <= 1926) {
            document.getElementById("sS2").innerHTML = document.getElementById("topLeft12").innerHTML;
        } else {
            document.getElementById("sS2").innerHTML = document.getElementById("topLeft4").innerHTML;
        }
    } else {
        if (secondChance2 <= 5829) {
            document.getElementById("sS2").innerHTML = document.getElementById("topLeft12").innerHTML;
        } else {
            document.getElementById("sS2").innerHTML = document.getElementById("topLeft13").innerHTML;
        }
    }
    if (document.getElementById("topLeftWinner5").innerHTML == document.getElementById("topLeft6").innerHTML && document.getElementById("topLeftWinner6").innerHTML == document.getElementById("topLeft3").innerHTML) {
        if (secondChance3 <= 4105) {
            document.getElementById("sS3").innerHTML = document.getElementById("topLeft6").innerHTML;
        } else {
            document.getElementById("sS3").innerHTML = document.getElementById("topLeft3").innerHTML;
        }
    } else if (document.getElementById("topLeftWinner5").innerHTML == document.getElementById("topLeft6").innerHTML && document.getElementById("topLeftWinner6").innerHTML == document.getElementById("topLeft14").innerHTML) {
        if (secondChance3 <= 8753) {
            document.getElementById("sS3").innerHTML = document.getElementById("topLeft6").innerHTML;
        } else {
            document.getElementById("sS3").innerHTML = document.getElementById("topLeft14").innerHTML;
        }
    } else if (document.getElementById("topLeftWinner5").innerHTML == document.getElementById("topLeft11").innerHTML && document.getElementById("topLeftWinner6").innerHTML == document.getElementById("topLeft3").innerHTML) {
        if (secondChance3 <= 2191) {
            document.getElementById("sS3").innerHTML = document.getElementById("topLeft11").innerHTML;
        } else {
            document.getElementById("sS3").innerHTML = document.getElementById("topLeft3").innerHTML;
        }
    } else {
        if (secondChance3 <= 7388) {
            document.getElementById("sS3").innerHTML = document.getElementById("topLeft11").innerHTML;
        } else {
            document.getElementById("sS3").innerHTML = document.getElementById("topLeft14").innerHTML;
        }
    }
    if (document.getElementById("topLeftWinner7").innerHTML == document.getElementById("topLeft7").innerHTML && document.getElementById("topLeftWinner8").innerHTML == document.getElementById("topLeft2").innerHTML) {
        if (secondChance4 <= 3525) {
            document.getElementById("sS4").innerHTML = document.getElementById("topLeft7").innerHTML;
        } else {
            document.getElementById("sS4").innerHTML = document.getElementById("topLeft2").innerHTML;
        }
    } else if (document.getElementById("topLeftWinner7").innerHTML == document.getElementById("topLeft7").innerHTML && document.getElementById("topLeftWinner8").innerHTML == document.getElementById("topLeft15").innerHTML) {
        if (secondChance4 <= 9197) {
            document.getElementById("sS4").innerHTML = document.getElementById("topLeft7").innerHTML;
        } else {
            document.getElementById("sS4").innerHTML = document.getElementById("topLeft15").innerHTML;
        }
    } else if (document.getElementById("topLeftWinner7").innerHTML == document.getElementById("topLeft10").innerHTML && document.getElementById("topLeftWinner8").innerHTML == document.getElementById("topLeft2").innerHTML) {
        if (secondChance4 <= 2417) {
            document.getElementById("sS4").innerHTML = document.getElementById("topLeft10").innerHTML;
        } else {
            document.getElementById("sS4").innerHTML = document.getElementById("topLeft2").innerHTML;
        }
    } else {
        if (secondChance4 <= 8675) {
            document.getElementById("sS4").innerHTML = document.getElementById("topLeft10").innerHTML;
        } else {
            document.getElementById("sS4").innerHTML = document.getElementById("topLeft15").innerHTML;
        }
    }
    if (document.getElementById("bottomLeftWinner1").innerHTML == document.getElementById("bottomLeft1").innerHTML && document.getElementById("bottomLeftWinner2").innerHTML == document.getElementById("bottomLeft8").innerHTML) {
        if (secondChance5 <= 7033) {
            document.getElementById("sS5").innerHTML = document.getElementById("bottomLeft1").innerHTML;
        } else {
            document.getElementById("sS5").innerHTML = document.getElementById("bottomLeft8").innerHTML;
        }
    } else if (document.getElementById("bottomLeftWinner1").innerHTML == document.getElementById("bottomLeft1").innerHTML && document.getElementById("bottomLeftWinner2").innerHTML == document.getElementById("bottomLeft9").innerHTML) {
        if (secondChance5 <= 7388) {
            document.getElementById("sS5").innerHTML = document.getElementById("bottomLeft1").innerHTML;
        } else {
            document.getElementById("sS5").innerHTML = document.getElementById("bottomLeft9").innerHTML;
        }
    } else if (document.getElementById("bottomLeftWinner1").innerHTML == document.getElementById("bottomLeft16").innerHTML && document.getElementById("bottomLeftWinner2").innerHTML == document.getElementById("bottomLeft8").innerHTML) {
        if (secondChance5 <= 357) {
            document.getElementById("sS5").innerHTML = document.getElementById("botttomLeft16").innerHTML;
        } else {
            document.getElementById("sS5").innerHTML = document.getElementById("bottomLeft8").innerHTML;
        }
    } else {
        if (secondChance5 <= 423) {
            document.getElementById("sS5").innerHTML = document.getElementById("bottomLeft16").innerHTML;
        } else {
            document.getElementById("sS5").innerHTML = document.getElementById("bottomLeft9").innerHTML;
        }
    }
    if (document.getElementById("bottomLeftWinner3").innerHTML == document.getElementById("bottomLeft5").innerHTML && document.getElementById("bottomLeftWinner4").innerHTML == document.getElementById("bottomLeft4").innerHTML) {
        if (secondChance6 <= 4700) {
            document.getElementById("sS6").innerHTML = document.getElementById("bottomLeft5").innerHTML;
        } else {
            document.getElementById("sS6").innerHTML = document.getElementById("bottomLeft4").innerHTML;
        }
    } else if (document.getElementById("bottomLeftWinner3").innerHTML == document.getElementById("bottomLeft5").innerHTML && document.getElementById("bottomLeftWinner4").innerHTML == document.getElementById("bottomLeft13").innerHTML) {
        if (secondChance6 <= 8386) {
            document.getElementById("sS6").innerHTML = document.getElementById("bottomLeft5").innerHTML;
        } else {
            document.getElementById("sS6").innerHTML = document.getElementById("bottomLeft13").innerHTML;
        }
    } else if (document.getElementById("bottomLeftWinner3").innerHTML == document.getElementById("bottomLeft12").innerHTML && document.getElementById("bottomLeftWinner4").innerHTML == document.getElementById("bottomLeft4").innerHTML) {
        if (secondChance6 <= 1926) {
            document.getElementById("sS6").innerHTML = document.getElementById("bottomLeft12").innerHTML;
        } else {
            document.getElementById("sS6").innerHTML = document.getElementById("bottomLeft4").innerHTML;
        }
    } else {
        if (secondChance6 <= 5829) {
            document.getElementById("sS6").innerHTML = document.getElementById("bottomLeft12").innerHTML;
        } else {
            document.getElementById("sS6").innerHTML = document.getElementById("bottomLeft13").innerHTML;
        }
    }
    if (document.getElementById("bottomLeftWinner5").innerHTML == document.getElementById("bottomLeft6").innerHTML && document.getElementById("bottomLeftWinner6").innerHTML == document.getElementById("bottomLeft3").innerHTML) {
        if (secondChance7 <= 4105) {
            document.getElementById("sS7").innerHTML = document.getElementById("bottomLeft6").innerHTML;
        } else {
            document.getElementById("sS7").innerHTML = document.getElementById("bottomLeft3").innerHTML;
        }
    } else if (document.getElementById("bottomLeftWinner5").innerHTML == document.getElementById("bottomLeft6").innerHTML && document.getElementById("bottomLeftWinner6").innerHTML == document.getElementById("bottomLeft14").innerHTML) {
        if (secondChance7 <= 8753) {
            document.getElementById("sS7").innerHTML = document.getElementById("bottomLeft6").innerHTML;
        } else {
            document.getElementById("sS7").innerHTML = document.getElementById("bottomLeft14").innerHTML;
        }
    } else if (document.getElementById("bottomLeftWinner5").innerHTML == document.getElementById("bottomLeft11").innerHTML && document.getElementById("bottomLeftWinner6").innerHTML == document.getElementById("bottomLeft3").innerHTML) {
        if (secondChance7 <= 2191) {
            document.getElementById("sS7").innerHTML = document.getElementById("bottomLeft11").innerHTML;
        } else {
            document.getElementById("sS7").innerHTML = document.getElementById("bottomLeft3").innerHTML;
        }
    } else {
        if (secondChance7 <= 7388) {
            document.getElementById("sS7").innerHTML = document.getElementById("bottomLeft11").innerHTML;
        } else {
            document.getElementById("sS7").innerHTML = document.getElementById("bottomLeft14").innerHTML;
        }
    }
    if (document.getElementById("bottomLeftWinner7").innerHTML == document.getElementById("bottomLeft7").innerHTML && document.getElementById("bottomLeftWinner8").innerHTML == document.getElementById("bottomLeft2").innerHTML) {
        if (secondChance8 <= 3525) {
            document.getElementById("sS8").innerHTML = document.getElementById("bottomLeft7").innerHTML;
        } else {
            document.getElementById("sS8").innerHTML = document.getElementById("bottomLeft2").innerHTML;
        }
    } else if (document.getElementById("bottomLeftWinner7").innerHTML == document.getElementById("bottomLeft7").innerHTML && document.getElementById("bottomLeftWinner8").innerHTML == document.getElementById("bottomLeft15").innerHTML) {
        if (secondChance8 <= 9197) {
            document.getElementById("sS8").innerHTML = document.getElementById("bottomLeft7").innerHTML;
        } else {
            document.getElementById("sS8").innerHTML = document.getElementById("bottomLeft15").innerHTML;
        }
    } else if (document.getElementById("bottomLeftWinner7").innerHTML == document.getElementById("bottomLeft10").innerHTML && document.getElementById("bottomLeftWinner8").innerHTML == document.getElementById("bottomLeft2").innerHTML) {
        if (secondChance8 <= 2417) {
            document.getElementById("sS8").innerHTML = document.getElementById("bottomLeft10").innerHTML;
        } else {
            document.getElementById("sS8").innerHTML = document.getElementById("bottomLeft2").innerHTML;
        }
    } else {
        if (secondChance8 <= 8675) {
            document.getElementById("sS8").innerHTML = document.getElementById("bottomLeft10").innerHTML;
        } else {
            document.getElementById("sS8").innerHTML = document.getElementById("bottomLeft15").innerHTML;
        }
    }
    //left-right break
    if (document.getElementById("topRightWinner1").innerHTML == document.getElementById("topRight1").innerHTML && document.getElementById("topRightWinner2").innerHTML == document.getElementById("topRight8").innerHTML) {
        if (secondChance9 <= 7033) {
            document.getElementById("sS9").innerHTML = document.getElementById("topRight1").innerHTML;
        } else {
            document.getElementById("sS9").innerHTML = document.getElementById("topRight8").innerHTML;
        }
    } else if (document.getElementById("topRightWinner1").innerHTML == document.getElementById("topRight1").innerHTML && document.getElementById("topRightWinner2").innerHTML == document.getElementById("topRight9").innerHTML) {
        if (secondChance9 <= 7388) {
            document.getElementById("sS9").innerHTML = document.getElementById("topRight1").innerHTML;
        } else {
            document.getElementById("sS9").innerHTML = document.getElementById("topRight9").innerHTML;
        }
    } else if (document.getElementById("topRightWinner1").innerHTML == document.getElementById("topRight16").innerHTML && document.getElementById("topRightWinner2").innerHTML == document.getElementById("topRight8").innerHTML) {
        if (secondChance9 <= 357) {
            document.getElementById("sS9").innerHTML = document.getElementById("topRight16").innerHTML;
        } else {
            document.getElementById("sS9").innerHTML = document.getElementById("topRight8").innerHTML;
        }
    } else {
        if (secondChance9 <= 423) {
            document.getElementById("sS9").innerHTML = document.getElementById("topRight16").innerHTML;
        } else {
            document.getElementById("sS9").innerHTML = document.getElementById("topRight9").innerHTML;
        }
    }
    if (document.getElementById("topRightWinner3").innerHTML == document.getElementById("topRight5").innerHTML && document.getElementById("topRightWinner4").innerHTML == document.getElementById("topRight4").innerHTML) {
        if (secondChance10 <= 4700) {
            document.getElementById("sS10").innerHTML = document.getElementById("topRight5").innerHTML;
        } else {
            document.getElementById("sS10").innerHTML = document.getElementById("topRight4").innerHTML;
        }
    } else if (document.getElementById("topRightWinner3").innerHTML == document.getElementById("topRight5").innerHTML && document.getElementById("topRightWinner4").innerHTML == document.getElementById("topRight13").innerHTML) {
        if (secondChance10 <= 8386) {
            document.getElementById("sS10").innerHTML = document.getElementById("topRight5").innerHTML;
        } else {
            document.getElementById("sS10").innerHTML = document.getElementById("topRight13").innerHTML;
        }
    } else if (document.getElementById("topRightWinner3").innerHTML == document.getElementById("topRight12").innerHTML && document.getElementById("topRightWinner4").innerHTML == document.getElementById("topRight4").innerHTML) {
        if (secondChance10 <= 1926) {
            document.getElementById("sS10").innerHTML = document.getElementById("topRight12").innerHTML;
        } else {
            document.getElementById("sS10").innerHTML = document.getElementById("topRight4").innerHTML;
        }
    } else {
        if (secondChance10 <= 5829) {
            document.getElementById("sS10").innerHTML = document.getElementById("topRight12").innerHTML;
        } else {
            document.getElementById("sS10").innerHTML = document.getElementById("topRight13").innerHTML;
        }
    }
    if (document.getElementById("topRightWinner5").innerHTML == document.getElementById("topRight6").innerHTML && document.getElementById("topRightWinner6").innerHTML == document.getElementById("topRight3").innerHTML) {
        if (secondChance11 <= 4105) {
            document.getElementById("sS11").innerHTML = document.getElementById("topRight6").innerHTML;
        } else {
            document.getElementById("sS11").innerHTML = document.getElementById("topRight3").innerHTML;
        }
    } else if (document.getElementById("topRightWinner5").innerHTML == document.getElementById("topRight6").innerHTML && document.getElementById("topRightWinner6").innerHTML == document.getElementById("topRight14").innerHTML) {
        if (secondChance11 <= 8753) {
            document.getElementById("sS11").innerHTML = document.getElementById("topRight6").innerHTML;
        } else {
            document.getElementById("sS11").innerHTML = document.getElementById("topRight14").innerHTML;
        }
    } else if (document.getElementById("topRightWinner5").innerHTML == document.getElementById("topRight11").innerHTML && document.getElementById("topRightWinner6").innerHTML == document.getElementById("topRight3").innerHTML) {
        if (secondChance11 <= 2191) {
            document.getElementById("sS11").innerHTML = document.getElementById("topRight11").innerHTML;
        } else {
            document.getElementById("sS11").innerHTML = document.getElementById("topRight3").innerHTML;
        }
    } else {
        if (secondChance11 <= 7388) {
            document.getElementById("sS11").innerHTML = document.getElementById("topRight11").innerHTML;
        } else {
            document.getElementById("sS11").innerHTML = document.getElementById("topRight14").innerHTML;
        }
    }
    if (document.getElementById("topRightWinner7").innerHTML == document.getElementById("topRight7").innerHTML && document.getElementById("topRightWinner8").innerHTML == document.getElementById("topRight2").innerHTML) {
        if (secondChance12 <= 3525) {
            document.getElementById("sS12").innerHTML = document.getElementById("topRight7").innerHTML;
        } else {
            document.getElementById("sS12").innerHTML = document.getElementById("topRight2").innerHTML;
        }
    } else if (document.getElementById("topRightWinner7").innerHTML == document.getElementById("topRight7").innerHTML && document.getElementById("topRightWinner8").innerHTML == document.getElementById("topRight15").innerHTML) {
        if (secondChance12 <= 9197) {
            document.getElementById("sS12").innerHTML = document.getElementById("topRight7").innerHTML;
        } else {
            document.getElementById("sS12").innerHTML = document.getElementById("topRight15").innerHTML;
        }
    } else if (document.getElementById("topRightWinner7").innerHTML == document.getElementById("topRight10").innerHTML && document.getElementById("topRightWinner8").innerHTML == document.getElementById("topRight2").innerHTML) {
        if (secondChance12 <= 2417) {
            document.getElementById("sS12").innerHTML = document.getElementById("topRight10").innerHTML;
        } else {
            document.getElementById("sS12").innerHTML = document.getElementById("topRight2").innerHTML;
        }
    } else {
        if (secondChance12 <= 8675) {
            document.getElementById("sS12").innerHTML = document.getElementById("topRight10").innerHTML;
        } else {
            document.getElementById("sS12").innerHTML = document.getElementById("topRight15").innerHTML;
        }
    }
    if (document.getElementById("bottomRightWinner1").innerHTML == document.getElementById("bottomRight1").innerHTML && document.getElementById("bottomRightWinner2").innerHTML == document.getElementById("bottomRight8").innerHTML) {
        if (secondChance13 <= 7033) {
            document.getElementById("sS13").innerHTML = document.getElementById("bottomRight1").innerHTML;
        } else {
            document.getElementById("sS13").innerHTML = document.getElementById("bottomRight8").innerHTML;
        }
    } else if (document.getElementById("bottomRightWinner1").innerHTML == document.getElementById("bottomRight1").innerHTML && document.getElementById("bottomRightWinner2").innerHTML == document.getElementById("bottomRight9").innerHTML) {
        if (secondChance13 <= 7388) {
            document.getElementById("sS13").innerHTML = document.getElementById("bottomRight1").innerHTML;
        } else {
            document.getElementById("sS13").innerHTML = document.getElementById("bottomRight9").innerHTML;
        }
    } else if (document.getElementById("bottomRightWinner1").innerHTML == document.getElementById("bottomRight16").innerHTML && document.getElementById("bottomRightWinner2").innerHTML == document.getElementById("bottomRight8").innerHTML) {
        if (secondChance13 <= 357) {
            document.getElementById("sS13").innerHTML = document.getElementById("botttomRight16").innerHTML;
        } else {
            document.getElementById("sS13").innerHTML = document.getElementById("bottomRight8").innerHTML;
        }
    } else {
        if (secondChance13 <= 423) {
            document.getElementById("sS13").innerHTML = document.getElementById("bottomRight16").innerHTML;
        } else {
            document.getElementById("sS13").innerHTML = document.getElementById("bottomRight9").innerHTML;
        }
    }
    if (document.getElementById("bottomRightWinner3").innerHTML == document.getElementById("bottomRight5").innerHTML && document.getElementById("bottomRightWinner4").innerHTML == document.getElementById("bottomRight4").innerHTML) {
        if (secondChance14 <= 4700) {
            document.getElementById("sS14").innerHTML = document.getElementById("bottomRight5").innerHTML;
        } else {
            document.getElementById("sS14").innerHTML = document.getElementById("bottomRight4").innerHTML;
        }
    } else if (document.getElementById("bottomRightWinner3").innerHTML == document.getElementById("bottomRight5").innerHTML && document.getElementById("bottomRightWinner4").innerHTML == document.getElementById("bottomRight13").innerHTML) {
        if (secondChance14 <= 8386) {
            document.getElementById("sS14").innerHTML = document.getElementById("bottomRight5").innerHTML;
        } else {
            document.getElementById("sS14").innerHTML = document.getElementById("bottomRight13").innerHTML;
        }
    } else if (document.getElementById("bottomRightWinner3").innerHTML == document.getElementById("bottomRight12").innerHTML && document.getElementById("bottomRightWinner4").innerHTML == document.getElementById("bottomRight4").innerHTML) {
        if (secondChance14 <= 1926) {
            document.getElementById("sS14").innerHTML = document.getElementById("bottomRight12").innerHTML;
        } else {
            document.getElementById("sS14").innerHTML = document.getElementById("bottomRight4").innerHTML;
        }
    } else {
        if (secondChance14 <= 5829) {
            document.getElementById("sS14").innerHTML = document.getElementById("bottomRight12").innerHTML;
        } else {
            document.getElementById("sS14").innerHTML = document.getElementById("bottomRight13").innerHTML;
        }
    }
    if (document.getElementById("bottomRightWinner5").innerHTML == document.getElementById("bottomRight6").innerHTML && document.getElementById("bottomRightWinner6").innerHTML == document.getElementById("bottomRight3").innerHTML) {
        if (secondChance15 <= 4105) {
            document.getElementById("sS15").innerHTML = document.getElementById("bottomRight6").innerHTML;
        } else {
            document.getElementById("sS15").innerHTML = document.getElementById("bottomRight3").innerHTML;
        }
    } else if (document.getElementById("bottomRightWinner5").innerHTML == document.getElementById("bottomRight6").innerHTML && document.getElementById("bottomRightWinner6").innerHTML == document.getElementById("bottomRight14").innerHTML) {
        if (secondChance15 <= 8753) {
            document.getElementById("sS15").innerHTML = document.getElementById("bottomRight6").innerHTML;
        } else {
            document.getElementById("sS15").innerHTML = document.getElementById("bottomRight14").innerHTML;
        }
    } else if (document.getElementById("bottomRightWinner5").innerHTML == document.getElementById("bottomRight11").innerHTML && document.getElementById("bottomRightWinner6").innerHTML == document.getElementById("bottomRight3").innerHTML) {
        if (secondChance15 <= 2191) {
            document.getElementById("sS15").innerHTML = document.getElementById("bottomRight11").innerHTML;
        } else {
            document.getElementById("sS15").innerHTML = document.getElementById("bottomRight3").innerHTML;
        }
    } else {
        if (secondChance15 <= 7388) {
            document.getElementById("sS15").innerHTML = document.getElementById("bottomRight11").innerHTML;
        } else {
            document.getElementById("sS15").innerHTML = document.getElementById("bottomRight14").innerHTML;
        }
    }
    if (document.getElementById("bottomRightWinner7").innerHTML == document.getElementById("bottomRight7").innerHTML && document.getElementById("bottomRightWinner8").innerHTML == document.getElementById("bottomRight2").innerHTML) {
        if (secondChance16 <= 3525) {
            document.getElementById("sS16").innerHTML = document.getElementById("bottomRight7").innerHTML;
        } else {
            document.getElementById("sS16").innerHTML = document.getElementById("bottomRight2").innerHTML;
        }
    } else if (document.getElementById("bottomRightWinner7").innerHTML == document.getElementById("bottomRight7").innerHTML && document.getElementById("bottomRightWinner8").innerHTML == document.getElementById("bottomRight15").innerHTML) {
        if (secondChance16 <= 9197) {
            document.getElementById("sS16").innerHTML = document.getElementById("bottomRight7").innerHTML;
        } else {
            document.getElementById("sS16").innerHTML = document.getElementById("bottomRight15").innerHTML;
        }
    } else if (document.getElementById("bottomRightWinner7").innerHTML == document.getElementById("bottomRight10").innerHTML && document.getElementById("bottomRightWinner8").innerHTML == document.getElementById("bottomRight2").innerHTML) {
        if (secondChance16 <= 2417) {
            document.getElementById("sS16").innerHTML = document.getElementById("bottomRight10").innerHTML;
        } else {
            document.getElementById("sS16").innerHTML = document.getElementById("bottomRight2").innerHTML;
        }
    } else {
        if (secondChance16 <= 8675) {
            document.getElementById("sS16").innerHTML = document.getElementById("bottomRight10").innerHTML;
        } else {
            document.getElementById("sS16").innerHTML = document.getElementById("bottomRight15").innerHTML;
        }
    }
    //sweet16
    if (document.getElementById("sS1").innerHTML == document.getElementById("topLeft1").innerHTML && document.getElementById("sS2").innerHTML == document.getElementById("topLeft5").innerHTML) {
        if (thirdChance1 <= 6062) {
            document.getElementById("eE1").innerHTML = document.getElementById("topLeft1").innerHTML
        } else {
            document.getElementById("eE1").innerHTML = document.getElementById("topLeft5").innerHTML
        }
    } else if (document.getElementById("sS1").innerHTML == document.getElementById("topLeft1").innerHTML && document.getElementById("sS2").innerHTML == document.getElementById("topLeft12").innerHTML) {
        if (thirdChance1 <= 8513) {
            document.getElementById("eE1").innerHTML = document.getElementById("topLeft1").innerHTML
        } else {
            document.getElementById("eE1").innerHTML = document.getElementById("topLeft12").innerHTML
        }
    } else if (document.getElementById("sS1").innerHTML == document.getElementById("topLeft1").innerHTML && document.getElementById("sS2").innerHTML == document.getElementById("topLeft4").innerHTML) {
        if (thirdChance1 <= 5772) {
            document.getElementById("eE1").innerHTML = document.getElementById("topLeft1").innerHTML
        } else {
            document.getElementById("eE1").innerHTML = document.getElementById("topLeft4").innerHTML
        }
    } else if (document.getElementById("sS1").innerHTML == document.getElementById("topLeft1").innerHTML && document.getElementById("sS2").innerHTML == document.getElementById("topLeft13").innerHTML) {
        if (thirdChance1 <= 8889) {
            document.getElementById("eE1").innerHTML = document.getElementById("topLeft1").innerHTML
        } else {
            document.getElementById("eE1").innerHTML = document.getElementById("topLeft13").innerHTML
        }
    } else if (document.getElementById("sS1").innerHTML == document.getElementById("topLeft16").innerHTML && document.getElementById("sS2").innerHTML == document.getElementById("topLeft5").innerHTML) {
        if (thirdChance1 <= 235) {
            document.getElementById("eE1").innerHTML = document.getElementById("topLeft16").innerHTML
        } else {
            document.getElementById("eE1").innerHTML = document.getElementById("topLeft5").innerHTML
        }
    } else if (document.getElementById("sS1").innerHTML == document.getElementById("topLeft16").innerHTML && document.getElementById("sS2").innerHTML == document.getElementById("topLeft12").innerHTML) {
        if (thirdChance1 <= 821) {
            document.getElementById("eE1").innerHTML = document.getElementById("topLeft16").innerHTML
        } else {
            document.getElementById("eE1").innerHTML = document.getElementById("topLeft12").innerHTML
        }
    } else if (document.getElementById("sS1").innerHTML == document.getElementById("topLeft16").innerHTML && document.getElementById("sS2").innerHTML == document.getElementById("topLeft4").innerHTML) {
        if (thirdChance1 <= 209) {
            document.getElementById("eE1").innerHTML = document.getElementById("topLeft16").innerHTML
        } else {
            document.getElementById("eE1").innerHTML = dcument.getElementById("topLeft4").innerHTML
        }
    } else if (document.getElementById("sS1").innerHTML == document.getElementById("topLeft16").innerHTML && document.getElementById("sS2").innerHTML == document.getElementById("topLeft13").innerHTML) {
        if (thirdChance1 <= 1111) {
            document.getElementById("eE1").innerHTML = document.getElementById("topLeft16").innerHTML
        } else {
            document.getElementById("eE1").innerHTML = document.getElementById("topLeft13").innerHTML
        }
    } else if (document.getElementById("sS1").innerHTML == document.getElementById("topLeft8").innerHTML && document.getElementById("sS2").innerHTML == document.getElementById("topLeft5").innerHTML) {
        if (thirdChance1 <= 3938) {
            document.getElementById("eE1").innerHTML = document.getElementById("topLeft8").innerHTML
        } else {
            document.getElementById("eE1").innerHTML = document.getElementById("topLeft5").innerHTML
        }
    } else if (document.getElementById("sS1").innerHTML == document.getElementById("topLeft8").innerHTML && document.getElementById("sS2").innerHTML == document.getElementById("topLeft12").innerHTML) {
        if (thirdChance1 <= 7072) {
            document.getElementById("eE1").innerHTML = document.getElementById("topLeft8").innerHTML
        } else {
            document.getElementById("eE1").innerHTML = document.getElementById("topLeft12").innerHTML
        }
    } else if (document.getElementById("sS1").innerHTML == document.getElementById("topLeft8").innerHTML && document.getElementById("sS2").innerHTML == document.getElementById("topLeft4").innerHTML) {
        if (thirdChance1 <= 3655) {
            document.getElementById("eE1").innerHTML = document.getElementById("topLeft8").innerHTML
        } else {
            document.getElementById("eE1").innerHTML = document.getElementById("topLeft4").innerHTML
        }
    } else if (document.getElementById("sS1").innerHTML == document.getElementById("topLeft8").innerHTML && document.getElementById("sS2").innerHTML == document.getElementById("topLeft13").innerHTML) {
        if (thirdChance1 <= 7714) {
            document.getElementById("eE1").innerHTML = document.getElementById("topLeft8").innerHTML
        } else {
            document.getElementById("eE1").innerHTML = document.getElementById("topLeft13").innerHTML
        }
    } else if (document.getElementById("sS1").innerHTML == document.getElementById("topLeft9").innerHTML && document.getElementById("sS2").innerHTML == document.getElementById("topLeft5").innerHTML) {
        if (thirdChance1 <= 3525) {
            document.getElementById("eE1").innerHTML = document.getElementById("topLeft9").innerHTML
        } else {
            document.getElementById("eE1").innerHTML = document.getElementById("topLeft5").innerHTML
        }
    } else if (document.getElementById("sS1").innerHTML == document.getElementById("topLeft9").innerHTML && document.getElementById("sS2").innerHTML == document.getElementById("topLeft12").innerHTML) {
        if (thirdChance1 <= 6693) {
            document.getElementById("eE1").innerHTML = document.getElementById("topLeft9").innerHTML
        } else {
            document.getElementById("eE1").innerHTML = document.getElementById("topLeft12").innerHTML
        }
    } else if (document.getElementById("sS1").innerHTML == document.getElementById("topLeft9").innerHTML && document.getElementById("sS2").innerHTML == document.getElementById("topLeft4").innerHTML) {
        if (thirdChance1 <= 3256) {
            document.getElementById("eE1").innerHTML = document.getElementById("topLeft9").innerHTML
        } else {
            document.getElementById("eE1").innerHTML = document.getElementById("topLeft4").innerHTML
        }
    } else {
        if (thirdChance1 <= 7388) {
            document.getElementById("eE1").innerHTML = document.getElementById("topLeft9").innerHTML
        } else {
            document.getElementById("eE1").innerHTML = document.getElementById("topLeft13").innerHTML
        }
    }
    //second segement of sweet 16
    if (document.getElementById("sS3").innerHTML == document.getElementById("topLeft6").innerHTML && document.getElementById("sS4").innerHTML == document.getElementById("topLeft7").innerHTML) {
        if (thirdChance2 <= 5357) {
            document.getElementById("eE2").innerHTML = document.getElementById("topLeft6").innerHTML
        } else {
            document.getElementById("eE2").innerHTML = document.getElementById("topLeft7").innerHTML
        }
    } else if (document.getElementById("sS3").innerHTML == document.getElementById("topLeft6").innerHTML && document.getElementById("sS4").innerHTML == document.getElementById("topLeft10").innerHTML) {
        if (thirdChance2 <= 6633) {
            document.getElementById("eE2").innerHTML = document.getElementById("topLeft6").innerHTML
        } else {
            document.getElementById("eE2").innerHTML = document.getElementById("topLeft10").innerHTML
        }
    } else if (document.getElementById("sS3").innerHTML == document.getElementById("topLeft6").innerHTML && document.getElementById("sS4").innerHTML == document.getElementById("topLeft2").innerHTML) {
        if (thirdChance2 <= 3857) {
            document.getElementById("eE2").innerHTML = document.getElementById("topLeft6").innerHTML
        } else {
            document.getElementById("eE2").innerHTML = document.getElementById("topLeft2").innerHTML
        }
    } else if (document.getElementById("sS3").innerHTML == document.getElementById("topLeft6").innerHTML && document.getElementById("sS4").innerHTML == document.getElementById("topLeft15").innerHTML) {
        if (thirdChance2 <= 9281) {
            document.getElementById("eE2").innerHTML = document.getElementById("topLeft6").innerHTML
        } else {
            document.getElementById("eE2").innerHTML = document.getElementById("topLeft15").innerHTML
        }
    } else if (document.getElementById("sS3").innerHTML == document.getElementById("topLeft11").innerHTML && document.getElementById("sS4").innerHTML == document.getElementById("topLeft7").innerHTML) {
        if (thirdChance2 <= 3173) {
            document.getElementById("eE2").innerHTML = document.getElementById("topLeft11").innerHTML
        } else {
            document.getElementById("eE2").innerHTML = document.getElementById("topLeft7").innerHTML
        }
    } else if (document.getElementById("sS3").innerHTML == document.getElementById("topLeft11").innerHTML && document.getElementById("sS4").innerHTML == document.getElementById("topLeft10").innerHTML) {
        if (thirdChance2 <= 4424) {
            document.getElementById("eE2").innerHTML = document.getElementById("topLeft11").innerHTML
        } else {
            document.getElementById("eE2").innerHTML = document.getElementById("topLeft10").innerHTML
        }
    } else if (document.getElementById("sS3").innerHTML == document.getElementById("topLeft11").innerHTML && document.getElementById("sS4").innerHTML == document.getElementById("topLeft2").innerHTML) {
        if (thirdChance2 <= 2019) {
            document.getElementById("eE2").innerHTML = document.getElementById("topLeft11").innerHTML
        } else {
            document.getElementById("eE2").innerHTML = document.getElementById("topLeft2").innerHTML
        }
    } else if (document.getElementById("sS3").innerHTML == document.getElementById("topLeft11").innerHTML && document.getElementById("sS4").innerHTML == document.getElementById("topLeft15").innerHTML) {
        if (thirdChance2 <= 8386) {
            document.getElementById("eE2").innerHTML = document.getElementById("topLeft11").innerHTML
        } else {
            document.getElementById("eE2").innerHTML = document.getElementById("topLeft15").innerHTML
        }
    } else if (document.getElementById("sS3").innerHTML == document.getElementById("topLeft3").innerHTML && document.getElementById("sS4").innerHTML == document.getElementById("topLeft7").innerHTML) {
        if (thirdChance2 <= 6236) {
            document.getElementById("eE2").innerHTML = document.getElementById("topLeft3").innerHTML
        } else {
            document.getElementById("eE2").innerHTML = document.getElementById("topLeft7").innerHTML
        }
    } else if (document.getElementById("sS3").innerHTML == document.getElementById("topLeft3").innerHTML && document.getElementById("sS4").innerHTML == document.getElementById("topLeft10").innerHTML) {
        if (thirdChance2 <= 7388) {
            document.getElementById("eE2").innerHTML = document.getElementById("topLeft3").innerHTML
        } else {
            document.getElementById("eE2").innerHTML = document.getElementById("topLeft10").innerHTML
        }
    } else if (document.getElementById("sS3").innerHTML == document.getElementById("topLeft3").innerHTML && document.getElementById("sS4").innerHTML == document.getElementById("topLeft2").innerHTML) {
        if (thirdChance2 <= 4742) {
            document.getElementById("eE2").innerHTML = document.getElementById("topLeft3").innerHTML
        } else {
            document.getElementById("eE2").innerHTML = document.getElementById("topLeft2").innerHTML
        }
    } else if (document.getElementById("sS3").innerHTML == document.getElementById("topLeft3").innerHTML && document.getElementById("sS4").innerHTML == document.getElementById("topLeft15").innerHTML) {
        if (thirdChance2 <= 9488) {
            document.getElementById("eE2").innerHTML = document.getElementById("topLeft3").innerHTML
        } else {
            document.getElementById("eE2").innerHTML = document.getElementById("topLeft15").innerHTML
        }
    } else if (document.getElementById("sS3").innerHTML == document.getElementById("topLeft14").innerHTML && document.getElementById("sS4").innerHTML == document.getElementById("topLeft7").innerHTML) {
        if (thirdChance2 <= 1411) {
            document.getElementById("eE2").innerHTML = document.getElementById("topLeft14").innerHTML
        } else {
            document.getElementById("eE2").innerHTML = document.getElementById("topLeft7").innerHTML
        }
    } else if (document.getElementById("sS3").innerHTML == document.getElementById("topLeft14").innerHTML && document.getElementById("sS4").innerHTML == document.getElementById("topLeft10").innerHTML) {
        if (thirdChance2 <= 2191) {
            document.getElementById("eE2").innerHTML = document.getElementById("topLeft14").innerHTML
        } else {
            document.getElementById("eE2").innerHTML = document.getElementById("topLeft10").innerHTML
        }
    } else if (document.getElementById("sS3").innerHTML == document.getElementById("topLeft14").innerHTML && document.getElementById("sS4").innerHTML == document.getElementById("topLeft2").innerHTML) {
        if (thirdChance2 <= 821) {
            document.getElementById("eE2").innerHTML = document.getElementById("topLeft14").innerHTML
        } else {
            document.getElementById("eE2").innerHTML = document.getElementById("topLeft2").innerHTML
        }
    } else {
        if (thirdChance2 <= 6475) {
            document.getElementById("eE2").innerHTML = document.getElementById("topLeft14").innerHTML
        } else {
            document.getElementById("eE2").innerHTML = document.getElementById("topLeft15").innerHTML
        }
    }
    //break between top and bottom left
    if (document.getElementById("sS5").innerHTML == document.getElementById("bottomLeft1").innerHTML && document.getElementById("sS6").innerHTML == document.getElementById("bottomLeft5").innerHTML) {
        if (thirdChance3 <= 6062) {
            document.getElementById("eE3").innerHTML = document.getElementById("bottomLeft1").innerHTML
        } else {
            document.getElementById("eE3").innerHTML = document.getElementById("bottomLeft5").innerHTML
        }
    } else if (document.getElementById("sS5").innerHTML == document.getElementById("bottomLeft1").innerHTML && document.getElementById("sS6").innerHTML == document.getElementById("bottomLeft12").innerHTML) {
        if (thirdChance3 <= 8513) {
            document.getElementById("eE3").innerHTML = document.getElementById("bottomLeft1").innerHTML
        } else {
            document.getElementById("eE3").innerHTML = document.getElementById("bottomLeft12").innerHTML
        }
    } else if (document.getElementById("sS5").innerHTML == document.getElementById("bottomLeft1").innerHTML && document.getElementById("sS6").innerHTML == document.getElementById("bottomLeft4").innerHTML) {
        if (thirdChance3 <= 5772) {
            document.getElementById("eE3").innerHTML = document.getElementById("bottomLeft1").innerHTML
        } else {
            document.getElementById("eE3").innerHTML = document.getElementById("bottomLeft4").innerHTML
        }
    } else if (document.getElementById("sS5").innerHTML == document.getElementById("bottomLeft1").innerHTML && document.getElementById("sS6").innerHTML == document.getElementById("bottomLeft13").innerHTML) {
        if (thirdChance3 <= 8889) {
            document.getElementById("eE3").innerHTML = document.getElementById("bottomLeft1").innerHTML
        } else {
            document.getElementById("eE3").innerHTML = document.getElementById("bottomLeft13").innerHTML
        }
    } else if (document.getElementById("sS5").innerHTML == document.getElementById("bottomLeft16").innerHTML && document.getElementById("sS6").innerHTML == document.getElementById("bottomLeft5").innerHTML) {
        if (thirdChance3 <= 235) {
            document.getElementById("eE3").innerHTML = document.getElementById("bottomLeft16").innerHTML
        } else {
            document.getElementById("eE3").innerHTML = document.getElementById("bottomLeft5").innerHTML
        }
    } else if (document.getElementById("sS5").innerHTML == document.getElementById("bottomLeft16").innerHTML && document.getElementById("sS6").innerHTML == document.getElementById("bottomLeft12").innerHTML) {
        if (thirdChance3 <= 821) {
            document.getElementById("eE3").innerHTML = document.getElementById("bottomLeft16").innerHTML
        } else {
            document.getElementById("eE3").innerHTML = document.getElementById("bottomLeft12").innerHTML
        }
    } else if (document.getElementById("sS5").innerHTML == document.getElementById("bottomLeft16").innerHTML && document.getElementById("sS6").innerHTML == document.getElementById("bottomLeft4").innerHTML) {
        if (thirdChance3 <= 209) {
            document.getElementById("eE3").innerHTML = document.getElementById("bottomLeft16").innerHTML
        } else {
            document.getElementById("eE3").innerHTML = dcument.getElementById("bottomLeft4").innerHTML
        }
    } else if (document.getElementById("sS5").innerHTML == document.getElementById("bottomLeft16").innerHTML && document.getElementById("sS6").innerHTML == document.getElementById("bottomLeft13").innerHTML) {
        if (thirdChance3 <= 1111) {
            document.getElementById("eE3").innerHTML = document.getElementById("bottomLeft16").innerHTML
        } else {
            document.getElementById("eE3").innerHTML = document.getElementById("bottomLeft13").innerHTML
        }
    } else if (document.getElementById("sS5").innerHTML == document.getElementById("bottomLeft8").innerHTML && document.getElementById("sS6").innerHTML == document.getElementById("bottomLeft5").innerHTML) {
        if (thirdChance3 <= 3938) {
            document.getElementById("eE3").innerHTML = document.getElementById("bottomLeft8").innerHTML
        } else {
            document.getElementById("eE3").innerHTML = document.getElementById("bottomLeft5").innerHTML
        }
    } else if (document.getElementById("sS5").innerHTML == document.getElementById("bottomLeft8").innerHTML && document.getElementById("sS6").innerHTML == document.getElementById("bottomLeft12").innerHTML) {
        if (thirdChance3 <= 7072) {
            document.getElementById("eE3").innerHTML = document.getElementById("bottomLeft8").innerHTML
        } else {
            document.getElementById("eE3").innerHTML = document.getElementById("bottomLeft12").innerHTML
        }
    } else if (document.getElementById("sS5").innerHTML == document.getElementById("bottomLeft8").innerHTML && document.getElementById("sS6").innerHTML == document.getElementById("bottomLeft4").innerHTML) {
        if (thirdChance3 <= 3655) {
            document.getElementById("eE3").innerHTML = document.getElementById("bottomLeft8").innerHTML
        } else {
            document.getElementById("eE3").innerHTML = document.getElementById("bottomLeft4").innerHTML
        }
    } else if (document.getElementById("sS5").innerHTML == document.getElementById("bottomLeft8").innerHTML && document.getElementById("sS6").innerHTML == document.getElementById("bottomLeft13").innerHTML) {
        if (thirdChance3 <= 7714) {
            document.getElementById("eE3").innerHTML = document.getElementById("bottomLeft8").innerHTML
        } else {
            document.getElementById("eE3").innerHTML = document.getElementById("bottomLeft13").innerHTML
        }
    } else if (document.getElementById("sS5").innerHTML == document.getElementById("bottomLeft9").innerHTML && document.getElementById("sS6").innerHTML == document.getElementById("bottomLeft5").innerHTML) {
        if (thirdChance3 <= 3525) {
            document.getElementById("eE3").innerHTML = document.getElementById("bottomLeft9").innerHTML
        } else {
            document.getElementById("eE3").innerHTML = document.getElementById("bottomLeft5").innerHTML
        }
    } else if (document.getElementById("sS5").innerHTML == document.getElementById("bottomLeft9").innerHTML && document.getElementById("sS6").innerHTML == document.getElementById("bottomLeft12").innerHTML) {
        if (thirdChance3 <= 6693) {
            document.getElementById("eE3").innerHTML = document.getElementById("bottomLeft9").innerHTML
        } else {
            document.getElementById("eE3").innerHTML = document.getElementById("bottomLeft12").innerHTML
        }
    } else if (document.getElementById("sS5").innerHTML == document.getElementById("bottomLeft9").innerHTML && document.getElementById("sS6").innerHTML == document.getElementById("bottomLeft4").innerHTML) {
        if (thirdChance3 <= 3256) {
            document.getElementById("eE3").innerHTML = document.getElementById("bottomLeft9").innerHTML
        } else {
            document.getElementById("eE3").innerHTML = document.getElementById("bottomLeft4").innerHTML
        }
    } else {
        if (thirdChance3 <= 7388) {
            document.getElementById("eE3").innerHTML = document.getElementById("bottomLeft9").innerHTML
        } else {
            document.getElementById("eE3").innerHTML = document.getElementById("bottomLeft13").innerHTML
        }
    }
    //fourth segement of sweet 16
    if (document.getElementById("sS7").innerHTML == document.getElementById("bottomLeft6").innerHTML && document.getElementById("sS8").innerHTML == document.getElementById("bottomLeft7").innerHTML) {
        if (thirdChance4 <= 5357) {
            document.getElementById("eE4").innerHTML = document.getElementById("bottomLeft6").innerHTML
        } else {
            document.getElementById("eE4").innerHTML = document.getElementById("bottomLeft7").innerHTML
        }
    } else if (document.getElementById("sS7").innerHTML == document.getElementById("bottomLeft6").innerHTML && document.getElementById("sS8").innerHTML == document.getElementById("bottomLeft10").innerHTML) {
        if (thirdChance4 <= 6633) {
            document.getElementById("eE4").innerHTML = document.getElementById("bottomLeft6").innerHTML
        } else {
            document.getElementById("eE4").innerHTML = document.getElementById("bottomLeft10").innerHTML
        }
    } else if (document.getElementById("sS7").innerHTML == document.getElementById("bottomLeft6").innerHTML && document.getElementById("sS8").innerHTML == document.getElementById("bottomLeft2").innerHTML) {
        if (thirdChance4 <= 3857) {
            document.getElementById("eE4").innerHTML = document.getElementById("bottomLeft6").innerHTML
        } else {
            document.getElementById("eE4").innerHTML = document.getElementById("bottomLeft2").innerHTML
        }
    } else if (document.getElementById("sS7").innerHTML == document.getElementById("bottomLeft6").innerHTML && document.getElementById("sS8").innerHTML == document.getElementById("bottomLeft15").innerHTML) {
        if (thirdChance4 <= 9281) {
            document.getElementById("eE4").innerHTML = document.getElementById("bottomLeft6").innerHTML
        } else {
            document.getElementById("eE4").innerHTML = document.getElementById("bottomLeft15").innerHTML
        }
    } else if (document.getElementById("sS7").innerHTML == document.getElementById("bottomLeft11").innerHTML && document.getElementById("sS8").innerHTML == document.getElementById("bottomLeft7").innerHTML) {
        if (thirdChance4 <= 3173) {
            document.getElementById("eE4").innerHTML = document.getElementById("bottomLeft11").innerHTML
        } else {
            document.getElementById("eE4").innerHTML = document.getElementById("bottomLeft7").innerHTML
        }
    } else if (document.getElementById("sS7").innerHTML == document.getElementById("bottomLeft11").innerHTML && document.getElementById("sS8").innerHTML == document.getElementById("bottomLeft10").innerHTML) {
        if (thirdChance4 <= 4424) {
            document.getElementById("eE4").innerHTML = document.getElementById("bottomLeft11").innerHTML
        } else {
            document.getElementById("eE4").innerHTML = document.getElementById("bottomLeft10").innerHTML
        }
    } else if (document.getElementById("sS7").innerHTML == document.getElementById("bottomLeft11").innerHTML && document.getElementById("sS8").innerHTML == document.getElementById("bottomLeft2").innerHTML) {
        if (thirdChance4 <= 2019) {
            document.getElementById("eE4").innerHTML = document.getElementById("bottomLeft11").innerHTML
        } else {
            document.getElementById("eE4").innerHTML = document.getElementById("bottomLeft2").innerHTML
        }
    } else if (document.getElementById("sS7").innerHTML == document.getElementById("bottomLeft11").innerHTML && document.getElementById("sS8").innerHTML == document.getElementById("bottomLeft15").innerHTML) {
        if (thirdChance4 <= 8386) {
            document.getElementById("eE4").innerHTML = document.getElementById("bottomLeft11").innerHTML
        } else {
            document.getElementById("eE4").innerHTML = document.getElementById("bottomLeft15").innerHTML
        }
    } else if (document.getElementById("sS7").innerHTML == document.getElementById("bottomLeft3").innerHTML && document.getElementById("sS8").innerHTML == document.getElementById("bottomLeft7").innerHTML) {
        if (thirdChance4 <= 6236) {
            document.getElementById("eE4").innerHTML = document.getElementById("bottomLeft3").innerHTML
        } else {
            document.getElementById("eE4").innerHTML = document.getElementById("bottomLeft7").innerHTML
        }
    } else if (document.getElementById("sS7").innerHTML == document.getElementById("bottomLeft3").innerHTML && document.getElementById("sS8").innerHTML == document.getElementById("bottomLeft10").innerHTML) {
        if (thirdChance4 <= 7388) {
            document.getElementById("eE4").innerHTML = document.getElementById("bottomLeft3").innerHTML
        } else {
            document.getElementById("eE4").innerHTML = document.getElementById("bottomLeft10").innerHTML
        }
    } else if (document.getElementById("sS7").innerHTML == document.getElementById("bottomLeft3").innerHTML && document.getElementById("sS8").innerHTML == document.getElementById("bottomLeft2").innerHTML) {
        if (thirdChance4 <= 4742) {
            document.getElementById("eE4").innerHTML = document.getElementById("bottomLeft3").innerHTML
        } else {
            document.getElementById("eE4").innerHTML = document.getElementById("bottomLeft2").innerHTML
        }
    } else if (document.getElementById("sS7").innerHTML == document.getElementById("bottomLeft3").innerHTML && document.getElementById("sS8").innerHTML == document.getElementById("bottomLeft15").innerHTML) {
        if (thirdChance4 <= 9488) {
            document.getElementById("eE4").innerHTML = document.getElementById("bottomLeft3").innerHTML
        } else {
            document.getElementById("eE4").innerHTML = document.getElementById("bottomLeft15").innerHTML
        }
    } else if (document.getElementById("sS7").innerHTML == document.getElementById("bottomLeft14").innerHTML && document.getElementById("sS8").innerHTML == document.getElementById("bottomLeft7").innerHTML) {
        if (thirdChance4 <= 1411) {
            document.getElementById("eE4").innerHTML = document.getElementById("bottomLeft14").innerHTML
        } else {
            document.getElementById("eE4").innerHTML = document.getElementById("bottomLeft7").innerHTML
        }
    } else if (document.getElementById("sS7").innerHTML == document.getElementById("bottomLeft14").innerHTML && document.getElementById("sS8").innerHTML == document.getElementById("bottomLeft10").innerHTML) {
        if (thirdChance4 <= 2191) {
            document.getElementById("eE4").innerHTML = document.getElementById("bottomLeft14").innerHTML
        } else {
            document.getElementById("eE4").innerHTML = document.getElementById("bottomLeft10").innerHTML
        }
    } else if (document.getElementById("sS7").innerHTML == document.getElementById("bottomLeft14").innerHTML && document.getElementById("sS8").innerHTML == document.getElementById("bottomLeft2").innerHTML) {
        if (thirdChance4 <= 821) {
            document.getElementById("eE4").innerHTML = document.getElementById("bottomLeft14").innerHTML
        } else {
            document.getElementById("eE4").innerHTML = document.getElementById("bottomLeft2").innerHTML
        }
    } else {
        if (thirdChance4 <= 6475) {
            document.getElementById("eE4").innerHTML = document.getElementById("bottomLeft14").innerHTML
        } else {
            document.getElementById("eE4").innerHTML = document.getElementById("bottomLeft15").innerHTML
        }
    }
    //left-right divide
    if (document.getElementById("sS9").innerHTML == document.getElementById("topRight1").innerHTML && document.getElementById("sS10").innerHTML == document.getElementById("topRight5").innerHTML) {
        if (thirdChance5 <= 6062) {
            document.getElementById("eE5").innerHTML = document.getElementById("topRight1").innerHTML
        } else {
            document.getElementById("eE5").innerHTML = document.getElementById("topRight5").innerHTML
        }
    } else if (document.getElementById("sS9").innerHTML == document.getElementById("topRight1").innerHTML && document.getElementById("sS10").innerHTML == document.getElementById("topRight12").innerHTML) {
        if (thirdChance5 <= 8513) {
            document.getElementById("eE5").innerHTML = document.getElementById("topRight1").innerHTML
        } else {
            document.getElementById("eE5").innerHTML = document.getElementById("topRight12").innerHTML
        }
    } else if (document.getElementById("sS9").innerHTML == document.getElementById("topRight1").innerHTML && document.getElementById("sS10").innerHTML == document.getElementById("topRight4").innerHTML) {
        if (thirdChance5 <= 5772) {
            document.getElementById("eE5").innerHTML = document.getElementById("topRight1").innerHTML
        } else {
            document.getElementById("eE5").innerHTML = document.getElementById("topRight4").innerHTML
        }
    } else if (document.getElementById("sS9").innerHTML == document.getElementById("topRight1").innerHTML && document.getElementById("sS10").innerHTML == document.getElementById("topRight13").innerHTML) {
        if (thirdChance5 <= 8889) {
            document.getElementById("eE5").innerHTML = document.getElementById("topRight1").innerHTML
        } else {
            document.getElementById("eE5").innerHTML = document.getElementById("topRight13").innerHTML
        }
    } else if (document.getElementById("sS9").innerHTML == document.getElementById("topRight16").innerHTML && document.getElementById("sS10").innerHTML == document.getElementById("topRight5").innerHTML) {
        if (thirdChance5 <= 235) {
            document.getElementById("eE5").innerHTML = document.getElementById("topRight16").innerHTML
        } else {
            document.getElementById("eE5").innerHTML = document.getElementById("topRight5").innerHTML
        }
    } else if (document.getElementById("sS9").innerHTML == document.getElementById("topRight16").innerHTML && document.getElementById("sS10").innerHTML == document.getElementById("topRight12").innerHTML) {
        if (thirdChance5 <= 821) {
            document.getElementById("eE5").innerHTML = document.getElementById("topRight16").innerHTML
        } else {
            document.getElementById("eE5").innerHTML = document.getElementById("topRight12").innerHTML
        }
    } else if (document.getElementById("sS9").innerHTML == document.getElementById("topRight16").innerHTML && document.getElementById("sS10").innerHTML == document.getElementById("topRight4").innerHTML) {
        if (thirdChance5 <= 209) {
            document.getElementById("eE5").innerHTML = document.getElementById("topRight16").innerHTML
        } else {
            document.getElementById("eE5").innerHTML = dcument.getElementById("topRight4").innerHTML
        }
    } else if (document.getElementById("sS9").innerHTML == document.getElementById("topRight16").innerHTML && document.getElementById("sS10").innerHTML == document.getElementById("topRight13").innerHTML) {
        if (thirdChance5 <= 1111) {
            document.getElementById("eE5").innerHTML = document.getElementById("topRight16").innerHTML
        } else {
            document.getElementById("eE5").innerHTML = document.getElementById("topRight13").innerHTML
        }
    } else if (document.getElementById("sS9").innerHTML == document.getElementById("topRight8").innerHTML && document.getElementById("sS10").innerHTML == document.getElementById("topRight5").innerHTML) {
        if (thirdChance5 <= 3938) {
            document.getElementById("eE5").innerHTML = document.getElementById("topRight8").innerHTML
        } else {
            document.getElementById("eE5").innerHTML = document.getElementById("topRight5").innerHTML
        }
    } else if (document.getElementById("sS9").innerHTML == document.getElementById("topRight8").innerHTML && document.getElementById("sS10").innerHTML == document.getElementById("topRight12").innerHTML) {
        if (thirdChance5 <= 7072) {
            document.getElementById("eE5").innerHTML = document.getElementById("topRight8").innerHTML
        } else {
            document.getElementById("eE5").innerHTML = document.getElementById("topRight12").innerHTML
        }
    } else if (document.getElementById("sS9").innerHTML == document.getElementById("topRight8").innerHTML && document.getElementById("sS10").innerHTML == document.getElementById("topRight4").innerHTML) {
        if (thirdChance5 <= 3655) {
            document.getElementById("eE5").innerHTML = document.getElementById("topRight8").innerHTML
        } else {
            document.getElementById("eE5").innerHTML = document.getElementById("topRight4").innerHTML
        }
    } else if (document.getElementById("sS9").innerHTML == document.getElementById("topRight8").innerHTML && document.getElementById("sS10").innerHTML == document.getElementById("topRight13").innerHTML) {
        if (thirdChance5 <= 7714) {
            document.getElementById("eE5").innerHTML = document.getElementById("topRight8").innerHTML
        } else {
            document.getElementById("eE5").innerHTML = document.getElementById("topRight13").innerHTML
        }
    } else if (document.getElementById("sS9").innerHTML == document.getElementById("topRight9").innerHTML && document.getElementById("sS10").innerHTML == document.getElementById("topRight5").innerHTML) {
        if (thirdChance5 <= 3525) {
            document.getElementById("eE5").innerHTML = document.getElementById("topRight9").innerHTML
        } else {
            document.getElementById("eE5").innerHTML = document.getElementById("topRight5").innerHTML
        }
    } else if (document.getElementById("sS9").innerHTML == document.getElementById("topRight9").innerHTML && document.getElementById("sS10").innerHTML == document.getElementById("topRight12").innerHTML) {
        if (thirdChance5 <= 6693) {
            document.getElementById("eE5").innerHTML = document.getElementById("topRight9").innerHTML
        } else {
            document.getElementById("eE5").innerHTML = document.getElementById("topRight12").innerHTML
        }
    } else if (document.getElementById("sS9").innerHTML == document.getElementById("topRight9").innerHTML && document.getElementById("sS10").innerHTML == document.getElementById("topRight4").innerHTML) {
        if (thirdChance5 <= 3256) {
            document.getElementById("eE5").innerHTML = document.getElementById("topRight9").innerHTML
        } else {
            document.getElementById("eE5").innerHTML = document.getElementById("topRight4").innerHTML
        }
    } else {
        if (thirdChance5 <= 7388) {
            document.getElementById("eE5").innerHTML = document.getElementById("topRight9").innerHTML
        } else {
            document.getElementById("eE5").innerHTML = document.getElementById("topRight13").innerHTML
        }
    }
    //second segement of sweet 16
    if (document.getElementById("sS11").innerHTML == document.getElementById("topRight6").innerHTML && document.getElementById("sS12").innerHTML == document.getElementById("topRight7").innerHTML) {
        if (thirdChance6 <= 5357) {
            document.getElementById("eE6").innerHTML = document.getElementById("topRight6").innerHTML
        } else {
            document.getElementById("eE6").innerHTML = document.getElementById("topRight7").innerHTML
        }
    } else if (document.getElementById("sS11").innerHTML == document.getElementById("topRight6").innerHTML && document.getElementById("sS12").innerHTML == document.getElementById("topRight10").innerHTML) {
        if (thirdChance6 <= 6633) {
            document.getElementById("eE6").innerHTML = document.getElementById("topRight6").innerHTML
        } else {
            document.getElementById("eE6").innerHTML = document.getElementById("topRight10").innerHTML
        }
    } else if (document.getElementById("sS11").innerHTML == document.getElementById("topRight6").innerHTML && document.getElementById("sS12").innerHTML == document.getElementById("topRight2").innerHTML) {
        if (thirdChance6 <= 3857) {
            document.getElementById("eE6").innerHTML = document.getElementById("topRight6").innerHTML
        } else {
            document.getElementById("eE6").innerHTML = document.getElementById("topRight2").innerHTML
        }
    } else if (document.getElementById("sS11").innerHTML == document.getElementById("topRight6").innerHTML && document.getElementById("sS12").innerHTML == document.getElementById("topRight15").innerHTML) {
        if (thirdChance6 <= 9281) {
            document.getElementById("eE6").innerHTML = document.getElementById("topRight6").innerHTML
        } else {
            document.getElementById("eE6").innerHTML = document.getElementById("topRight15").innerHTML
        }
    } else if (document.getElementById("sS11").innerHTML == document.getElementById("topRight11").innerHTML && document.getElementById("sS12").innerHTML == document.getElementById("topRight7").innerHTML) {
        if (thirdChance6 <= 3173) {
            document.getElementById("eE6").innerHTML = document.getElementById("topRight11").innerHTML
        } else {
            document.getElementById("eE6").innerHTML = document.getElementById("topRight7").innerHTML
        }
    } else if (document.getElementById("sS11").innerHTML == document.getElementById("topRight11").innerHTML && document.getElementById("sS12").innerHTML == document.getElementById("topRight10").innerHTML) {
        if (thirdChance6 <= 4424) {
            document.getElementById("eE6").innerHTML = document.getElementById("topRight11").innerHTML
        } else {
            document.getElementById("eE6").innerHTML = document.getElementById("topRight10").innerHTML
        }
    } else if (document.getElementById("sS11").innerHTML == document.getElementById("topRight11").innerHTML && document.getElementById("sS12").innerHTML == document.getElementById("topRight2").innerHTML) {
        if (thirdChance6 <= 2019) {
            document.getElementById("eE6").innerHTML = document.getElementById("topRight11").innerHTML
        } else {
            document.getElementById("eE6").innerHTML = document.getElementById("topRight2").innerHTML
        }
    } else if (document.getElementById("sS11").innerHTML == document.getElementById("topRight11").innerHTML && document.getElementById("sS12").innerHTML == document.getElementById("topRight15").innerHTML) {
        if (thirdChance6 <= 8386) {
            document.getElementById("eE6").innerHTML = document.getElementById("topRight11").innerHTML
        } else {
            document.getElementById("eE6").innerHTML = document.getElementById("topRight15").innerHTML
        }
    } else if (document.getElementById("sS11").innerHTML == document.getElementById("topRight3").innerHTML && document.getElementById("sS12").innerHTML == document.getElementById("topRight7").innerHTML) {
        if (thirdChance6 <= 6236) {
            document.getElementById("eE6").innerHTML = document.getElementById("topRight3").innerHTML
        } else {
            document.getElementById("eE6").innerHTML = document.getElementById("topRight7").innerHTML
        }
    } else if (document.getElementById("sS11").innerHTML == document.getElementById("topRight3").innerHTML && document.getElementById("sS12").innerHTML == document.getElementById("topRight10").innerHTML) {
        if (thirdChance6 <= 7388) {
            document.getElementById("eE6").innerHTML = document.getElementById("topRight3").innerHTML
        } else {
            document.getElementById("eE6").innerHTML = document.getElementById("topRight10").innerHTML
        }
    } else if (document.getElementById("sS11").innerHTML == document.getElementById("topRight3").innerHTML && document.getElementById("sS12").innerHTML == document.getElementById("topRight2").innerHTML) {
        if (thirdChance6 <= 4742) {
            document.getElementById("eE6").innerHTML = document.getElementById("topRight3").innerHTML
        } else {
            document.getElementById("eE6").innerHTML = document.getElementById("topRight2").innerHTML
        }
    } else if (document.getElementById("sS11").innerHTML == document.getElementById("topRight3").innerHTML && document.getElementById("sS12").innerHTML == document.getElementById("topRight15").innerHTML) {
        if (thirdChance6 <= 9488) {
            document.getElementById("eE6").innerHTML = document.getElementById("topRight3").innerHTML
        } else {
            document.getElementById("eE6").innerHTML = document.getElementById("topRight15").innerHTML
        }
    } else if (document.getElementById("sS11").innerHTML == document.getElementById("topRight14").innerHTML && document.getElementById("sS12").innerHTML == document.getElementById("topRight7").innerHTML) {
        if (thirdChance6 <= 1411) {
            document.getElementById("eE6").innerHTML = document.getElementById("topRight14").innerHTML
        } else {
            document.getElementById("eE6").innerHTML = document.getElementById("topRight7").innerHTML
        }
    } else if (document.getElementById("sS11").innerHTML == document.getElementById("topRight14").innerHTML && document.getElementById("sS12").innerHTML == document.getElementById("topRight10").innerHTML) {
        if (thirdChance6 <= 2191) {
            document.getElementById("eE6").innerHTML = document.getElementById("topRight14").innerHTML
        } else {
            document.getElementById("eE6").innerHTML = document.getElementById("topRight10").innerHTML
        }
    } else if (document.getElementById("sS11").innerHTML == document.getElementById("topRight14").innerHTML && document.getElementById("sS12").innerHTML == document.getElementById("topRight2").innerHTML) {
        if (thirdChance6 <= 821) {
            document.getElementById("eE6").innerHTML = document.getElementById("topRight14").innerHTML
        } else {
            document.getElementById("eE6").innerHTML = document.getElementById("topRight2").innerHTML
        }
    } else {
        if (thirdChance6 <= 6475) {
            document.getElementById("eE6").innerHTML = document.getElementById("topRight4").innerHTML
        } else {
            document.getElementById("eE6").innerHTML = document.getElementById("topRight15").innerHTML
        }
    }
    //top-bottom divide on right side
    if(document.getElementById("sS13").innerHTML == document.getElementById("bottomRight1").innerHTML && document.getElementById("sS14").innerHTML == document.getElementById("bottomRight5").innerHTML){
        if(thirdChance7<=6062){
            document.getElementById("eE7").innerHTML = document.getElementById("bottomRight1").innerHTML
        }else{
            document.getElementById("eE7").innerHTML = document.getElementById("bottomRight5").innerHTML
        }
    }else if(document.getElementById("sS13").innerHTML == document.getElementById("bottomRight1").innerHTML && document.getElementById("sS14").innerHTML == document.getElementById("bottomRight12").innerHTML){
        if(thirdChance7<=8513){
            document.getElementById("eE7").innerHTML = document.getElementById("bottomRight1").innerHTML
        }else{
            document.getElementById("eE7").innerHTML = document.getElementById("bottomRight12").innerHTML
        }
    }else if(document.getElementById("sS13").innerHTML == document.getElementById("bottomRight1").innerHTML && document.getElementById("sS14").innerHTML == document.getElementById("bottomRight4").innerHTML){
        if(thirdChance7<=5772){
            document.getElementById("eE7").innerHTML = document.getElementById("bottomRight1").innerHTML
        }else{
            document.getElementById("eE7").innerHTML = document.getElementById("bottomRight4").innerHTML
        }
    }else if(document.getElementById("sS13").innerHTML == document.getElementById("bottomRight1").innerHTML && document.getElementById("sS14").innerHTML == document.getElementById("bottomRight13").innerHTML){
        if(thirdChance7<=8889){
            document.getElementById("eE7").innerHTML = document.getElementById("bottomRight1").innerHTML
        }else{
            document.getElementById("eE7").innerHTML = document.getElementById("bottomRight13").innerHTML
        }
    }else if(document.getElementById("sS13").innerHTML == document.getElementById("bottomRight16").innerHTML && document.getElementById("sS14").innerHTML == document.getElementById("bottomRight5").innerHTML){
        if(thirdChance7<=235){
            document.getElementById("eE7").innerHTML = document.getElementById("bottomRight16").innerHTML
        }else{
            document.getElementById("eE7").innerHTML = document.getElementById("bottomRight5").innerHTML
        }
    }else if(document.getElementById("sS13").innerHTML == document.getElementById("bottomRight16").innerHTML && document.getElementById("sS14").innerHTML == document.getElementById("bottomRight12").innerHTML){
        if(thirdChance7<=821){
            document.getElementById("eE7").innerHTML = document.getElementById("bottomRight16").innerHTML
        }else{
            document.getElementById("eE7").innerHTML = document.getElementById("bottomRight12").innerHTML
        }
    }else if(document.getElementById("sS13").innerHTML == document.getElementById("bottomRight16").innerHTML && document.getElementById("sS14").innerHTML == document.getElementById("bottoRight4").innerHTML){
        if(thirdChance7<=209){
            document.getElementById("eE7").innerHTML = document.getElementById("bottomRight16").innerHTML
        }else{
            document.getElementById("eE7").innerHTML = document.getElementById("bottomRight4").innerHTML
        }
    }else if(document.getElementById("sS13").innerHTML == document.getElementById("bottomRight16").innerHTML && document.getElementById("sS14").innerHTML == document.getElementById("bottomRight13").innerHTML){
        if(thirdChance7<=1111){
            document.getElementById("eE7").innerHTML = document.getElementById("bottomRight16").innerHTML
        }else{
            document.getElementById("eE7").innerHTML = document.getElementById("bottomRight13").innerHTML
        }
    }else if(document.getElementById("sS13").innerHTML == document.getElementById("bottomRight8").innerHTML && document.getElementById("sS14").innerHTML == document.getElementById("bottomRight5").innerHTML){
        if(thirdChance7<=3938){
            document.getElementById("eE7").innerHTML = document.getElementById("bottomRight8").innerHTML
        }else{
            document.getElementById("eE7").innerHTML = document.getElementById("bottomRight5").innerHTML
        }
    }else if(document.getElementById("sS13").innerHTML == document.getElementById("bottomRight8").innerHTML && document.getElementById("sS14").innerHTML == document.getElementById("bottomRight12").innerHTML){
        if(thirdChance7<=7072){
            document.getElementById("eE7").innerHTML = document.getElementById("bottomRight8").innerHTML
        }else{
            document.getElementById("eE7").innerHTML = document.getElementById("bottomRight12").innerHTML
        }
    }else if(document.getElementById("sS13").innerHTML == document.getElementById("bottomRight8").innerHTML && document.getElementById("sS14").innerHTML == document.getElementById("bottomRight4").innerHTML){
        if(thirdChance7<=3655){
            document.getElementById("eE7").innerHTML = document.getElementById("bottomRight8").innerHTML
        }else{
            document.getElementById("eE7").innerHTML = document.getElementById("bottomRight4").innerHTML
        }
    }else if(document.getElementById("sS13").innerHTML == document.getElementById("bottomRight8").innerHTML && document.getElementById("sS14").innerHTML == document.getElementById("bottomRight13").innerHTML){
        if(thirdChance7<=7714){
            document.getElementById("eE7").innerHTML = document.getElementById("bottomRight8").innerHTML
        }else{
            document.getElementById("eE7").innerHTML = document.getElementById("bottomRight13").innerHTML
        }
    }else if(document.getElementById("sS13").innerHTML == document.getElementById("bottomRight9").innerHTML && document.getElementById("sS14").innerHTML == document.getElementById("bottomRight5").innerHTML){
        if(thirdChance7<=3525){
            document.getElementById("eE7").innerHTML = document.getElementById("bottomRight9").innerHTML
        }else{
            document.getElementById("eE7").innerHTML = document.getElementById("bottomRight5").innerHTML
        }
    }else if(document.getElementById("sS13").innerHTML == document.getElementById("bottomRight9").innerHTML && document.getElementById("sS14").innerHTML == document.getElementById("bottomRight12").innerHTML){
        if(thirdChance7<=6693){
            document.getElementById("eE7").innerHTML = document.getElementById("bottomRight9").innerHTML
        }else{
            document.getElementById("eE7").innerHTML = document.getElementById("bottomRight12").innerHTML
        }
    }else if(document.getElementById("sS13").innerHTML == document.getElementById("bottomRight9").innerHTML && document.getElementById("sS14").innerHTML == document.getElementById("bottomRight4").innerHTML){
        if(thirdChance7<=3256){
            document.getElementById("eE7").innerHTML = document.getElementById("bottomRight9").innerHTML
        }else{
            document.getElementById("eE7").innerHTML = document.getElementById("bottomRight4").innerHTML
        }
    }else{
        if(thirdChance7<=7388){
            document.getElementById("eE7").innerHTML = document.getElementById("bottomRight9").innerHTML
        }else{
            document.getElementById("eE7").innerHTML = document.getElementById("bottomRight13").innerHTML
        }
    }
    //fourth segement of sweet 16
    if(document.getElementById("sS15").innerHTML == document.getElementById("bottomRight6").innerHTML && document.getElementById("sS16").innerHTML == document.getElementById("bottomRight7").innerHTML){
        if(thirdChance8<=5357){
            document.getElementById("eE8").innerHTML = document.getElementById("bottomRight6").innerHTML
        }else{
            document.getElementById("eE8").innerHTML = document.getElementById("bottomRight7").innerHTML
        }
    }else if(document.getElementById("sS15").innerHTML == document.getElementById("bottomRight6").innerHTML && document.getElementById("sS16").innerHTML == document.getElementById("bottomRight10").innerHTML){
        if(thirdChance8<=6633){
            document.getElementById("eE8").innerHTML = document.getElementById("bottomRight6").innerHTML
        }else{
            document.getElementById("eE8").innerHTML = document.getElementById("bottomRight10").innerHTML
        }
    }else if(document.getElementById("sS15").innerHTML == document.getElementById("bottomRight6").innerHTML && document.getElementById("sS16").innerHTML == document.getElementById("bottomRight2").innerHTML){
        if(thirdChance8<=3857){
            document.getElementById("eE8").innerHTML = document.getElementById("bottomRight6").innerHTML
        }else{
            document.getElementById("eE8").innerHTML = document.getElementById("bottomRight2").innerHTML
        }
    }else if(document.getElementById("sS15").innerHTML == document.getElementById("bottomRight6").innerHTML && document.getElementById("sS16").innerHTML == document.getElementById("bottomRight15").innerHTML){
        if(thirdChance8<=9281){
            document.getElementById("eE8").innerHTML = document.getElementById("bottomRight6").innerHTML
        }else{
            document.getElementById("eE8").innerHTML = document.getElementById("bottomRight15").innerHTML
        }
    }else if(document.getElementById("sS15").innerHTML == document.getElementById("bottomRight11").innerHTML && document.getElementById("sS16").innerHTML == document.getElementById("bottomRight7").innerHTML){
        if(thirdChance8<=3173){
            document.getElementById("eE8").innerHTML = document.getElementById("bottomRight11").innerHTML
        }else{
            document.getElementById("eE8").innerHTML = document.getElementById("bottomRight7").innerHTML
        }
    }else if(document.getElementById("sS15").innerHTML == document.getElementById("bottomRight11").innerHTML && document.getElementById("sS16").innerHTML == document.getElementById("bottomRight10").innerHTML){
        if(thirdChance8<=4424){
            document.getElementById("eE8").innerHTML = document.getElementById("bottomRight11").innerHTML
        }else{
            document.getElementById("eE8").innerHTML = document.getElementById("bottomRight10").innerHTML
        }
    }else if(document.getElementById("sS15").innerHTML == document.getElementById("bottomRight11").innerHTML && document.getElementById("sS16").innerHTML == document.getElementById("bottomRight2").innerHTML){
        if(thirdChance8<=2019){
            document.getElementById("eE8").innerHTML = document.getElementById("bottomRight11").innerHTML
        }else{
            document.getElementById("eE8").innerHTML = document.getElementById("bottomRight2").innerHTML
        }
    }else if(document.getElementById("sS15").innerHTML == document.getElementById("bottomRight11").innerHTML && document.getElementById("sS16").innerHTML == document.getElementById("bottomRight15").innerHTML){
        if(thirdChance8<=8386){
            document.getElementById("eE8").innerHTML = document.getElementById("bottomRight11").innerHTML
        }else{
            document.getElementById("eE8").innerHTML = document.getElementById("bottomRight15").innerHTML
        }
    }else if(document.getElementById("sS15").innerHTML == document.getElementById("bottomRight3").innerHTML && document.getElementById("sS16").innerHTML == document.getElementById("bottomRight7").innerHTML){
        if(thirdChance8<=6236){
            document.getElementById("eE8").innerHTML = document.getElementById("bottomRight3").innerHTML
        }else{
            document.getElementById("eE8").innerHTML = document.getElementById("bottomRight7").innerHTML
        }
    }else if(document.getElementById("sS15").innerHTML == document.getElementById("bottomRight3").innerHTML && document.getElementById("sS16").innerHTML == document.getElementById("bottomRight10").innerHTML){
        if(thirdChance8<=7388){
            document.getElementById("eE8").innerHTML = document.getElementById("bottomRight3").innerHTML
        }else{
            document.getElementById("eE8").innerHTML = document.getElementById("bottomRight10").innerHTML
        }
    }else if(document.getElementById("sS15").innerHTML == document.getElementById("bottomRight3").innerHTML && document.getElementById("sS16").innerHTML == document.getElementById("bottomRight2").innerHTML){
        if(thirdChance8<=4742){
            document.getElementById("eE8").innerHTML = document.getElementById("bottomRight3").innerHTML
        }else{
            document.getElementById("eE8").innerHTML = document.getElementById("bottomRight2").innerHTML
        }
    }else if(document.getElementById("sS15").innerHTML == document.getElementById("bottomRight3").innerHTML && document.getElementById("sS16").innerHTML == document.getElementById("bottomRight15").innerHTML){
        if(thirdChance8<=9488){
            document.getElementById("eE8").innerHTML = document.getElementById("bottomRight3").innerHTML
        }else{
            document.getElementById("eE8").innerHTML = document.getElementById("bottomRight15").innerHTML
        }
    }else if(document.getElementById("sS15").innerHTML == document.getElementById("bottomRight14").innerHTML && document.getElementById("sS16").innerHTML == document.getElementById("bottomRight7").innerHTML){
        if(thirdChance8<=1411){
            document.getElementById("eE8").innerHTML = document.getElementById("bottomRight14").innerHTML
        }else{
            document.getElementById("eE8").innerHTML = document.getElementById("bottomRight7").innerHTML
        }
    }else if(document.getElementById("sS15").innerHTML == document.getElementById("bottomRight14").innerHTML && document.getElementById("sS16").innerHTML == document.getElementById("bottomRight10").innerHTML){
        if(thirdChance8<=2191){
            document.getElementById("eE8").innerHTML = document.getElementById("bottomRight14").innerHTML
        }else{
            document.getElementById("eE8").innerHTML = document.getElementById("bottomRight10").innerHTML
        }
    }else if(document.getElementById("sS15").innerHTML == document.getElementById("bottomRight14").innerHTML && document.getElementById("sS16").innerHTML == document.getElementById("bottomRight2").innerHTML){
        if(thirdChance8<=821){
            document.getElementById("eE8").innerHTML = document.getElementById("bottomRight14").innerHTML
        }else{
            document.getElementById("eE8").innerHTML = document.getElementById("bottomRight2").innerHTML
        }
    }else{
        if(thirdChance8<=6475){
            document.getElementById("eE8").innerHTML = document.getElementById("bottomRight14").innerHTML
        }else{
            document.getElementById("eE8").innerHTML = document.getElementById("bottomRight15").innerHTML
        }
    }
    //final four
    if(fiftyFifty1<=5000){
        document.getElementById("fF1").innerHTML = document.getElementById("eE1").innerHTML;
    }else{
        document.getElementById("fF1").innerHTML = document.getElementById("eE2").innerHTML;
    }
    if(fiftyFifty2<=5000){
        document.getElementById("fF2").innerHTML = document.getElementById("eE3").innerHTML;
    }else{
        document.getElementById("fF2").innerHTML = document.getElementById("eE4").innerHTML;
    }
    if(fiftyFifty3<=5000){
        document.getElementById("fF3").innerHTML = document.getElementById("eE5").innerHTML;
    }else{
        document.getElementById("fF3").innerHTML = document.getElementById("eE6").innerHTML;
    }
    if(fiftyFifty4<=5000){
        document.getElementById("fF4").innerHTML = document.getElementById("eE7").innerHTML;
    }else{
        document.getElementById("fF4").innerHTML = document.getElementById("eE8").innerHTML;
    }
    //natties baby
    if(natties1<=5000){
        document.getElementById("nC1").innerHTML = document.getElementById("fF1").innerHTML;
    }else{
        document.getElementById("nC1").innerHTML = document.getElementById("fF2").innerHTML;
    }
    if(natties2<=5000){
        document.getElementById("nC2").innerHTML = document.getElementById("fF3").innerHTML;
    }else{
        document.getElementById("nC2").innerHTML = document.getElementById("fF4").innerHTML;
    }
    //Championship Game
    if(championshipGame<=5000){
        document.getElementById("champion").innerHTML = document.getElementById("nC1").innerHTML;
        document.getElementById("blocker2").innerHTML = document.getElementById("champion").innerHTML + " Wins!!";
    }else{
        document.getElementById("champion").innerHTML = document.getElementById("nC2").innerHTML;
        document.getElementById("blocker2").innerHTML = document.getElementById("champion").innerHTML + " Wins!!";
    }
}

function resetBracket(){
    document.getElementById("topLeftWinner1").innerHTML = "i";
    document.getElementById("topLeftWinner2").innerHTML = "i";
    document.getElementById("topLeftWinner3").innerHTML = "i";
    document.getElementById("topLeftWinner4").innerHTML = "i";
    document.getElementById("topLeftWinner5").innerHTML = "i";
    document.getElementById("topLeftWinner6").innerHTML = "i";
    document.getElementById("topLeftWinner7").innerHTML = "i";
    document.getElementById("topLeftWinner8").innerHTML = "i";
    document.getElementById("bottomLeftWinner1").innerHTML = "i";
    document.getElementById("bottomLeftWinner2").innerHTML = "i";
    document.getElementById("bottomLeftWinner3").innerHTML = "i";
    document.getElementById("bottomLeftWinner4").innerHTML = "i";
    document.getElementById("bottomLeftWinner5").innerHTML = "i";
    document.getElementById("bottomLeftWinner6").innerHTML = "i";
    document.getElementById("bottomLeftWinner7").innerHTML = "i";
    document.getElementById("bottomLeftWinner8").innerHTML = "i";
    document.getElementById("topRightWinner1").innerHTML = "i";
    document.getElementById("topRightWinner2").innerHTML = "i";
    document.getElementById("topRightWinner3").innerHTML = "i";
    document.getElementById("topRightWinner4").innerHTML = "i";
    document.getElementById("topRightWinner5").innerHTML = "i";
    document.getElementById("topRightWinner6").innerHTML = "i";
    document.getElementById("topRightWinner7").innerHTML = "i";
    document.getElementById("topRightWinner8").innerHTML = "i";
    document.getElementById("bottomRightWinner1").innerHTML = "i";
    document.getElementById("bottomRightWinner2").innerHTML = "i";
    document.getElementById("bottomRightWinner3").innerHTML = "i";
    document.getElementById("bottomRightWinner4").innerHTML = "i";
    document.getElementById("bottomRightWinner5").innerHTML = "i";
    document.getElementById("bottomRightWinner6").innerHTML = "i";
    document.getElementById("bottomRightWinner7").innerHTML = "i";
    document.getElementById("bottomRightWinner8").innerHTML = "i";
    document.getElementById("sS1").innerHTML = "i";
    document.getElementById("sS2").innerHTML = "i";
    document.getElementById("sS3").innerHTML = "i";
    document.getElementById("sS4").innerHTML = "i";
    document.getElementById("sS5").innerHTML = "i";
    document.getElementById("sS6").innerHTML = "i";
    document.getElementById("sS7").innerHTML = "i";
    document.getElementById("sS8").innerHTML = "i";
    document.getElementById("sS9").innerHTML = "i";
    document.getElementById("sS10").innerHTML = "i";
    document.getElementById("sS11").innerHTML = "i";
    document.getElementById("sS12").innerHTML = "i";
    document.getElementById("sS13").innerHTML = "i";
    document.getElementById("sS14").innerHTML = "i";
    document.getElementById("sS15").innerHTML = "i";
    document.getElementById("sS16").innerHTML = "i";
    document.getElementById("eE1").innerHTML = "i";
    document.getElementById("eE2").innerHTML = "i";
    document.getElementById("eE3").innerHTML = "i";
    document.getElementById("eE4").innerHTML = "i";
    document.getElementById("eE5").innerHTML = "i";
    document.getElementById("eE6").innerHTML = "i";
    document.getElementById("eE7").innerHTML = "i";
    document.getElementById("eE8").innerHTML = "i";
    document.getElementById("fF1").innerHTML = "i";
    document.getElementById("fF2").innerHTML = "i";
    document.getElementById("fF3").innerHTML = "i";
    document.getElementById("fF4").innerHTML = "i";
    document.getElementById("nC1").innerHTML = "i";
    document.getElementById("nC2").innerHTML = "i";
    document.getElementById("champion").innerHTML = "";
    document.getElementById("blocker2").innerHTML = "";

}
