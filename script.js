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
    if(chance1<=9846){
        document.getElementById("topLeftWinner1").innerHTML=document.getElementById("topLeft1").innerHTML;
    }else{
        document.getElementById("topLeftWinner1").innerHTML=document.getElementById("topLeft16").innerHTML;
    }
    if(chance2<=5441){
        document.getElementById("topLeftWinner2").innerHTML=document.getElementById("topLeft8").innerHTML;
    }else{
        document.getElementById("topLeftWinner2").innerHTML=document.getElementById("topLeft9").innerHTML;
    }
    if(chance3<=7880){
        document.getElementById("topLeftWinner3").innerHTML=document.getElementById("topLeft5").innerHTML;
    }else{
        document.getElementById("topLeftWinner3").innerHTML=document.getElementById("topLeft12").innerHTML;
    }
    if(chance4<=8542){
        document.getElementById("topLeftWinner4").innerHTML=document.getElementById("topLeft4").innerHTML;
    }else{
        document.getElementById("topLeftWinner4").innerHTML=document.getElementById("topLeft13").innerHTML;
    }
    if(chance5<=7128){
        document.getElementById("topLeftWinner5").innerHTML=document.getElementById("topLeft6").innerHTML;
    }else{
        document.getElementById("topLeftWinner5").innerHTML=document.getElementById("topLeft11").innerHTML;
    }
    if(chance6<=9098){
        document.getElementById("topLeftWinner6").innerHTML=document.getElementById("topLeft3").innerHTML;
    }else{
        document.getElementById("topLeftWinner6").innerHTML=document.getElementById("topLeft14").innerHTML;
    }
    if(chance7<=6307){
        document.getElementById("topLeftWinner7").innerHTML=document.getElementById("topLeft7").innerHTML;
    }else{
        document.getElementById("topLeftWinner7").innerHTML=document.getElementById("topLeft10").innerHTML;
    }
    if(chance8<=9536){
        document.getElementById("topLeftWinner8").innerHTML=document.getElementById("topLeft2").innerHTML;
    }else{
        document.getElementById("topLeftWinner8").innerHTML=document.getElementById("topLeft15").innerHTML;
    }
    if(chance9<=9846){
        document.getElementById("bottomLeftWinner1").innerHTML=document.getElementById("bottomLeft1").innerHTML;
    }else{
        document.getElementById("bottomLeftWinner1").innerHTML=document.getElementById("bottomLeft16").innerHTML;
    }
    if(chance10<=5441){
        document.getElementById("bottomLeftWinner2").innerHTML=document.getElementById("bottomLeft8").innerHTML;
    }else{
        document.getElementById("bottomLeftWinner2").innerHTML=document.getElementById("bottomLeft9").innerHTML;
    }
    if(chance11<=7880){
        document.getElementById("bottomLeftWinner3").innerHTML=document.getElementById("bottomLeft5").innerHTML;
    }else{
        document.getElementById("bottomLeftWinner3").innerHTML=document.getElementById("bottomLeft12").innerHTML;
    }
    if(chance12<=8542){
        document.getElementById("bottomLeftWinner4").innerHTML=document.getElementById("bottomLeft4").innerHTML;
    }else{
        document.getElementById("bottomLeftWinner4").innerHTML=document.getElementById("bottomLeft13").innerHTML;
    }
    if(chance13<=7128){
        document.getElementById("bottomLeftWinner5").innerHTML=document.getElementById("bottomLeft6").innerHTML;
    }else{
        document.getElementById("bottomLeftWinner5").innerHTML=document.getElementById("bottomLeft11").innerHTML;
    }
    if(chance14<=9098){
        document.getElementById("bottomLeftWinner6").innerHTML=document.getElementById("bottomLeft3").innerHTML;
    }else{
        document.getElementById("bottomLeftWinner6").innerHTML=document.getElementById("bottomLeft14").innerHTML;
    }
    if(chance15<=6307){
        document.getElementById("bottomLeftWinner7").innerHTML=document.getElementById("bottomLeft7").innerHTML;
    }else{
        document.getElementById("bottomLeftWinner7").innerHTML=document.getElementById("bottomLeft10").innerHTML;
    }
    if(chance16<=9536){
        document.getElementById("bottomLeftWinner8").innerHTML=document.getElementById("bottomLeft2").innerHTML;
    }else{
        document.getElementById("bottomLeftWinner8").innerHTML=document.getElementById("bottomLeft15").innerHTML;
    }
    if(chance17<=9846){
        document.getElementById("topRightWinner1").innerHTML=document.getElementById("topRight1").innerHTML;
    }else{
        document.getElementById("topRightWinner1").innerHTML=document.getElementById("topRight16").innerHTML;
    }
    if(chance18<=5441){
        document.getElementById("topRightWinner2").innerHTML=document.getElementById("topRight8").innerHTML;
    }else{
        document.getElementById("topRightWinner2").innerHTML=document.getElementById("topRight9").innerHTML;
    }
    if(chance19<=7880){
        document.getElementById("topRightWinner3").innerHTML=document.getElementById("topRight5").innerHTML;
    }else{
        document.getElementById("topRightWinner3").innerHTML=document.getElementById("topRight12").innerHTML;
    }
    if(chance20<=8542){
        document.getElementById("topRightWinner4").innerHTML=document.getElementById("topRight4").innerHTML;
    }else{
        document.getElementById("topRightWinner4").innerHTML=document.getElementById("topRight13").innerHTML;
    }
    if(chance21<=7128){
        document.getElementById("topRightWinner5").innerHTML=document.getElementById("topRight6").innerHTML;
    }else{
        document.getElementById("topRightWinner5").innerHTML=document.getElementById("topRight11").innerHTML;
    }
    if(chance22<=9098){
        document.getElementById("topRightWinner6").innerHTML=document.getElementById("topRight3").innerHTML;
    }else{
        document.getElementById("topRightWinner6").innerHTML=document.getElementById("topRight14").innerHTML;
    }
    if(chance23<=6307){
        document.getElementById("topRightWinner7").innerHTML=document.getElementById("topRight7").innerHTML;
    }else{
        document.getElementById("bottomRightWinner7").innerHTML=document.getElementById("topRight10").innerHTML;
    }
    if(chance24<=9536){
        document.getElementById("topRightWinner8").innerHTML=document.getElementById("topRight2").innerHTML;
    }else{
        document.getElementById("topRightWinner8").innerHTML=document.getElementById("topRight15").innerHTML;
    }
    if(chance25<=9846){
        document.getElementById("bottomRightWinner1").innerHTML=document.getElementById("bottomRight1").innerHTML;
    }else{
        document.getElementById("bottomRightWinner1").innerHTML=document.getElementById("bottomRight16").innerHTML;
    }
    if(chance26<=5441){
        document.getElementById("bottomRightWinner2").innerHTML=document.getElementById("bottomRight8").innerHTML;
    }else{
        document.getElementById("bottomRightWinner2").innerHTML=document.getElementById("bottomRight9").innerHTML;
    }
    if(chance27<=7880){
        document.getElementById("bottomRightWinner3").innerHTML=document.getElementById("bottomRight5").innerHTML;
    }else{
        document.getElementById("bottomRightWinner3").innerHTML=document.getElementById("bottomRight12").innerHTML;
    }
    if(chance28<=8542){
        document.getElementById("bottomRightWinner4").innerHTML=document.getElementById("bottomRight4").innerHTML;
    }else{
        document.getElementById("bottomRightWinner4").innerHTML=document.getElementById("bottomRight13").innerHTML;
    }
    if(chance29<=7128){
        document.getElementById("bottomRightWinner5").innerHTML=document.getElementById("bottomRight6").innerHTML;
    }else{
        document.getElementById("bottomRightWinner5").innerHTML=document.getElementById("bottomRight11").innerHTML;
    }
    if(chance30<=9098){
        document.getElementById("bottomRightWinner6").innerHTML=document.getElementById("bottomRight3").innerHTML;
    }else{
        document.getElementById("bottomRightWinner6").innerHTML=document.getElementById("bottomRight14").innerHTML;
    }
    if(chance31<=6307){
        document.getElementById("bottomRightWinner7").innerHTML=document.getElementById("bottomRight7").innerHTML;
    }else{
        document.getElementById("bottomRightWinner7").innerHTML=document.getElementById("bottomRight10").innerHTML;
    }
    if(chance32<=9536){
        document.getElementById("bottomRightWinner8").innerHTML=document.getElementById("bottomRight2").innerHTML;
    }else{
        document.getElementById("bottomRightWinner8").innerHTML=document.getElementById("bottomRight15").innerHTML;
    }
    if(document.getElementById("topLeftWinner1").innerHTML==document.getElementById("topLeft1").innerHTML && document.getElementById("topLeftWinner2").innerHTML==document.getElementById("topLeft8").innerHTML){
        if(secondChance1<=7033){
            document.getElementById("sS1").innerHTML = document.getElementById("topLeft1").innerHTML;
        }else{
            document.getElementById("sS1").innerHTML = document.getElementById("topLeft8").innerHTML;
        }
    }else if(document.getElementById("topLeftWinner1").innerHTML==document.getElementById("topLeft1").innerHTML && document.getElementById("topLeftWinner2").innerHTML==document.getElementById("topLeft9").innerHTML){
        if(secondChance1<=7388){
            document.getElementById("sS1").innerHTML = document.getElementById("topLeft1").innerHTML;
        }else{
            document.getElementById("sS1").innerHTML = document.getElementById("topLeft9").innerHTML;
        }
    }else if(document.getElementById("topLeftWinner1").innerHTML==document.getElementById("topLeft16").innerHTML && document.getElementById("topLeftWinner2").innerHTML==document.getElementById("topLeft8").innerHTML){
        if(secondChance1<=357){
            document.getElementById("sS1").innerHTML = document.getElementById("topLeft16").innerHTML;
        }else{
            document.getElementById("sS1").innerHTML = document.getElementById("topLeft8").innerHTML;
        }
    }else{
        if(secondChance1<=423){
            document.getElementById("sS1").innerHTML = document.getElementById("topLeft16").innerHTML;
        }else{
            document.getElementById("sS1").innerHTML = document.getElementById("topLeft9").innerHTML;
        }
    }
    if(document.getElementById("topLeftWinner3").innerHTML==document.getElementById("topLeft5").innerHTML && document.getElementById("topLeftWinner4").innerHTML==document.getElementById("topLeft4").innerHTML){
        if(secondChance2<=4700){
            document.getElementById("sS2").innerHTML = document.getElementById("topLeft5").innerHTML;
        }else{
            document.getElementById("sS2").innerHTML = document.getElementById("topLeft4").innerHTML;
        }
    }else if(document.getElementById("topLeftWinner3").innerHTML==document.getElementById("topLeft5").innerHTML && document.getElementById("topLeftWinner4").innerHTML==document.getElementById("topLeft13").innerHTML){
        if(secondChance2<=8386){
            document.getElementById("sS2").innerHTML = document.getElementById("topLeft5").innerHTML;
        }else{
            document.getElementById("sS2").innerHTML = document.getElementById("topLeft13").innerHTML;
        }
    }else if(document.getElementById("topLeftWinner3").innerHTML==document.getElementById("topLeft12").innerHTML && document.getElementById("topLeftWinner4").innerHTML==document.getElementById("topLeft4").innerHTML){
        if(secondChance2<=1926){
            document.getElementById("sS2").innerHTML = document.getElementById("topLeft12").innerHTML;
        }else{
            document.getElementById("sS2").innerHTML = document.getElementById("topLeft4").innerHTML;
        }
    }else{
        if(secondChance2<=5829){
            document.getElementById("sS2").innerHTML = document.getElementById("topLeft12").innerHTML;
        }else{
            document.getElementById("sS2").innerHTML = document.getElementById("topLeft13").innerHTML;
        }
    }
    if(document.getElementById("topLeftWinner5").innerHTML==document.getElementById("topLeft6").innerHTML && document.getElementById("topLeftWinner6").innerHTML==document.getElementById("topLeft3").innerHTML){
        if(secondChance3<=4105){
            document.getElementById("sS3").innerHTML = document.getElementById("topLeft6").innerHTML;
        }else{
            document.getElementById("sS3").innerHTML = document.getElementById("topLeft3").innerHTML;
        }
    }else if(document.getElementById("topLeftWinner5").innerHTML==document.getElementById("topLeft6").innerHTML && document.getElementById("topLeftWinner6").innerHTML==document.getElementById("topLeft14").innerHTML){
        if(secondChance3<=8753){
            document.getElementById("sS3").innerHTML = document.getElementById("topLeft6").innerHTML;
        }else{
            document.getElementById("sS3").innerHTML = document.getElementById("topLeft14").innerHTML;
        }
    }else if(document.getElementById("topLeftWinner5").innerHTML==document.getElementById("topLeft11").innerHTML && document.getElementById("topLeftWinner6").innerHTML==document.getElementById("topLeft3").innerHTML){
        if(secondChance3<=2191){
            document.getElementById("sS3").innerHTML = document.getElementById("topLeft11").innerHTML;
        }else{
            document.getElementById("sS3").innerHTML = document.getElementById("topLeft3").innerHTML;
        }
    }else{
        if(secondChance3<=7388){
            document.getElementById("sS3").innerHTML = document.getElementById("topLeft11").innerHTML;
        }else{
            document.getElementById("sS3").innerHTML = document.getElementById("topLeft14").innerHTML;
        }
    }
    if(document.getElementById("topLeftWinner7").innerHTML==document.getElementById("topLeft7").innerHTML && document.getElementById("topLeftWinner8").innerHTML==document.getElementById("topLeft2").innerHTML){
        if(secondChance4<=3525){
            document.getElementById("sS4").innerHTML = document.getElementById("topLeft7").innerHTML;
        }else{
            document.getElementById("sS4").innerHTML = document.getElementById("topLeft2").innerHTML;
        }
    }else if(document.getElementById("topLeftWinner7").innerHTML==document.getElementById("topLeft7").innerHTML && document.getElementById("topLeftWinner8").innerHTML==document.getElementById("topLeft15").innerHTML){
        if(secondChance4<=9197){
            document.getElementById("sS4").innerHTML = document.getElementById("topLeft7").innerHTML;
        }else{
            document.getElementById("sS4").innerHTML = document.getElementById("topLeft15").innerHTML;
        }
    }else if(document.getElementById("topLeftWinner7").innerHTML==document.getElementById("topLeft10").innerHTML && document.getElementById("topLeftWinner8").innerHTML==document.getElementById("topLeft2").innerHTML){
        if(secondChance4<=2417){
            document.getElementById("sS4").innerHTML = document.getElementById("topLeft10").innerHTML;
        }else{
            document.getElementById("sS4").innerHTML = document.getElementById("topLeft2").innerHTML;
        }
    }else{
        if(secondChance4<=8675){
            document.getElementById("sS4").innerHTML = document.getElementById("topLeft10").innerHTML;
        }else{
            document.getElementById("sS4").innerHTML = document.getElementById("topLeft15").innerHTML;
        }
    }
    if(document.getElementById("bottomLeftWinner1").innerHTML==document.getElementById("bottomLeft1").innerHTML && document.getElementById("bottomLeftWinner2").innerHTML==document.getElementById("bottomLeft8").innerHTML){
        if(secondChance5<=7033){
            document.getElementById("sS5").innerHTML = document.getElementById("bottomLeft1").innerHTML;
        }else{
            document.getElementById("sS5").innerHTML = document.getElementById("bottomLeft8").innerHTML;
        }
    }else if(document.getElementById("bottomLeftWinner1").innerHTML==document.getElementById("bottomLeft1").innerHTML && document.getElementById("bottomLeftWinner2").innerHTML==document.getElementById("bottomLeft9").innerHTML){
        if(secondChance5<=7388){
            document.getElementById("sS5").innerHTML = document.getElementById("bottomLeft1").innerHTML;
        }else{
            document.getElementById("sS5").innerHTML = document.getElementById("bottomLeft9").innerHTML;
        }
    }else if(document.getElementById("bottomLeftWinner1").innerHTML==document.getElementById("bottomLeft16").innerHTML && document.getElementById("bottomLeftWinner2").innerHTML==document.getElementById("bottomLeft8").innerHTML){
        if(secondChance5<=357){
            document.getElementById("sS5").innerHTML = document.getElementById("botttomLeft16").innerHTML;
        }else{
            document.getElementById("sS5").innerHTML = document.getElementById("bottomLeft8").innerHTML;
        }
    }else{
        if(secondChance5<=423){
            document.getElementById("sS5").innerHTML = document.getElementById("bottomLeft16").innerHTML;
        }else{
            document.getElementById("sS5").innerHTML = document.getElementById("bottomLeft9").innerHTML;
        }
    }
    if(document.getElementById("bottomLeftWinner3").innerHTML==document.getElementById("bottomLeft5").innerHTML && document.getElementById("bottomLeftWinner4").innerHTML==document.getElementById("bottomLeft4").innerHTML){
        if(secondChance6<=4700){
            document.getElementById("sS6").innerHTML = document.getElementById("bottomLeft5").innerHTML;
        }else{
            document.getElementById("sS6").innerHTML = document.getElementById("bottomLeft4").innerHTML;
        }
    }else if(document.getElementById("bottomLeftWinner3").innerHTML==document.getElementById("bottomLeft5").innerHTML && document.getElementById("bottomLeftWinner4").innerHTML==document.getElementById("bottomLeft13").innerHTML){
        if(secondChance6<=8386){
            document.getElementById("sS6").innerHTML = document.getElementById("bottomLeft5").innerHTML;
        }else{
            document.getElementById("sS6").innerHTML = document.getElementById("bottomLeft13").innerHTML;
        }
    }else if(document.getElementById("bottomLeftWinner3").innerHTML==document.getElementById("bottomLeft12").innerHTML && document.getElementById("bottomLeftWinner4").innerHTML==document.getElementById("bottomLeft4").innerHTML){
        if(secondChance6<=1926){
            document.getElementById("sS6").innerHTML = document.getElementById("bottomLeft12").innerHTML;
        }else{
            document.getElementById("sS6").innerHTML = document.getElementById("bottomLeft4").innerHTML;
        }
    }else{
        if(secondChance6<=5829){
            document.getElementById("sS6").innerHTML = document.getElementById("bottomLeft12").innerHTML;
        }else{
            document.getElementById("sS6").innerHTML = document.getElementById("bottomLeft13").innerHTML;
        }
    }
    if(document.getElementById("bottomLeftWinner5").innerHTML==document.getElementById("bottomLeft6").innerHTML && document.getElementById("bottomLeftWinner6").innerHTML==document.getElementById("bottomLeft3").innerHTML){
        if(secondChance7<=4105){
            document.getElementById("sS7").innerHTML = document.getElementById("bottomLeft6").innerHTML;
        }else{
            document.getElementById("sS7").innerHTML = document.getElementById("bottomLeft3").innerHTML;
        }
    }else if(document.getElementById("bottomLeftWinner5").innerHTML==document.getElementById("bottomLeft6").innerHTML && document.getElementById("bottomLeftWinner6").innerHTML==document.getElementById("bottomLeft14").innerHTML){
        if(secondChance7<=8753){
            document.getElementById("sS7").innerHTML = document.getElementById("bottomLeft6").innerHTML;
        }else{
            document.getElementById("sS7").innerHTML = document.getElementById("bottomLeft14").innerHTML;
        }
    }else if(document.getElementById("bottomLeftWinner5").innerHTML==document.getElementById("bottomLeft11").innerHTML && document.getElementById("bottomLeftWinner6").innerHTML==document.getElementById("bottomLeft3").innerHTML){
        if(secondChance7<=2191){
            document.getElementById("sS7").innerHTML = document.getElementById("bottomLeft11").innerHTML;
        }else{
            document.getElementById("sS7").innerHTML = document.getElementById("bottomLeft3").innerHTML;
        }
    }else{
        if(secondChance7<=7388){
            document.getElementById("sS7").innerHTML = document.getElementById("bottomLeft11").innerHTML;
        }else{
            document.getElementById("sS7").innerHTML = document.getElementById("bottomLeft14").innerHTML;
        }
    }
    if(document.getElementById("bottomLeftWinner7").innerHTML==document.getElementById("bottomLeft7").innerHTML && document.getElementById("bottomLeftWinner8").innerHTML==document.getElementById("bottomLeft2").innerHTML){
        if(secondChance8<=3525){
            document.getElementById("sS8").innerHTML = document.getElementById("bottomLeft7").innerHTML;
        }else{
            document.getElementById("sS8").innerHTML = document.getElementById("bottomLeft2").innerHTML;
        }
    }else if(document.getElementById("bottomLeftWinner7").innerHTML==document.getElementById("bottomLeft7").innerHTML && document.getElementById("bottomLeftWinner8").innerHTML==document.getElementById("bottomLeft15").innerHTML){
        if(secondChance8<=9197){
            document.getElementById("sS8").innerHTML = document.getElementById("bottomLeft7").innerHTML;
        }else{
            document.getElementById("sS8").innerHTML = document.getElementById("bottomLeft15").innerHTML;
        }
    }else if(document.getElementById("bottomLeftWinner7").innerHTML==document.getElementById("bottomLeft10").innerHTML && document.getElementById("bottomLeftWinner8").innerHTML==document.getElementById("bottomLeft2").innerHTML){
        if(secondChance8<=2417){
            document.getElementById("sS8").innerHTML = document.getElementById("bottomLeft10").innerHTML;
        }else{
            document.getElementById("sS8").innerHTML = document.getElementById("bottomLeft2").innerHTML;
        }
    }else{
        if(secondChance8<=8675){
            document.getElementById("sS8").innerHTML = document.getElementById("bottomLeft10").innerHTML;
        }else{
            document.getElementById("sS8").innerHTML = document.getElementById("bottomLeft15").innerHTML;
        }
    }
    //left-right break
    if(document.getElementById("topLeftWinner1").innerHTML==document.getElementById("topLeft1").innerHTML && document.getElementById("topLeftWinner2").innerHTML==document.getElementById("topLeft8").innerHTML){
        if(secondChance9<=7033){
            document.getElementById("sS9").innerHTML = document.getElementById("topLeft1").innerHTML;
        }else{
            document.getElementById("sS9").innerHTML = document.getElementById("topLeft8").innerHTML;
        }
    }else if(document.getElementById("topLeftWinner1").innerHTML==document.getElementById("topLeft1").innerHTML && document.getElementById("topLeftWinner2").innerHTML==document.getElementById("topLeft9").innerHTML){
        if(secondChance9<=7388){
            document.getElementById("sS9").innerHTML = document.getElementById("topLeft1").innerHTML;
        }else{
            document.getElementById("sS9").innerHTML = document.getElementById("topLeft9").innerHTML;
        }
    }else if(document.getElementById("topLeftWinner1").innerHTML==document.getElementById("topLeft16").innerHTML && document.getElementById("topLeftWinner2").innerHTML==document.getElementById("topLeft8").innerHTML){
        if(secondChance9<=357){
            document.getElementById("sS9").innerHTML = document.getElementById("topLeft16").innerHTML;
        }else{
            document.getElementById("sS9").innerHTML = document.getElementById("topLeft8").innerHTML;
        }
    }else{
        if(secondChance9<=423){
            document.getElementById("sS9").innerHTML = document.getElementById("topLeft16").innerHTML;
        }else{
            document.getElementById("sS9").innerHTML = document.getElementById("topLeft9").innerHTML;
        }
    }
    if(document.getElementById("topLeftWinner3").innerHTML==document.getElementById("topLeft5").innerHTML && document.getElementById("topLeftWinner4").innerHTML==document.getElementById("topLeft4").innerHTML){
        if(secondChance10<=4700){
            document.getElementById("sS10").innerHTML = document.getElementById("topLeft5").innerHTML;
        }else{
            document.getElementById("sS10").innerHTML = document.getElementById("topLeft4").innerHTML;
        }
    }else if(document.getElementById("topLeftWinner3").innerHTML==document.getElementById("topLeft5").innerHTML && document.getElementById("topLeftWinner4").innerHTML==document.getElementById("topLeft13").innerHTML){
        if(secondChance10<=8386){
            document.getElementById("sS10").innerHTML = document.getElementById("topLeft5").innerHTML;
        }else{
            document.getElementById("sS10").innerHTML = document.getElementById("topLeft13").innerHTML;
        }
    }else if(document.getElementById("topLeftWinner3").innerHTML==document.getElementById("topLeft12").innerHTML && document.getElementById("topLeftWinner4").innerHTML==document.getElementById("topLeft4").innerHTML){
        if(secondChance10<=1926){
            document.getElementById("s10").innerHTML = document.getElementById("topLeft12").innerHTML;
        }else{
            document.getElementById("sS10").innerHTML = document.getElementById("topLeft4").innerHTML;
        }
    }else{
        if(secondChance10<=5829){
            document.getElementById("sS10").innerHTML = document.getElementById("topLeft12").innerHTML;
        }else{
            document.getElementById("sS10").innerHTML = document.getElementById("topLeft13").innerHTML;
        }
    }
    if(document.getElementById("topLeftWinner5").innerHTML==document.getElementById("topLeft6").innerHTML && document.getElementById("topLeftWinner6").innerHTML==document.getElementById("topLeft3").innerHTML){
        if(secondChance11<=4105){
            document.getElementById("sS11").innerHTML = document.getElementById("topLeft6").innerHTML;
        }else{
            document.getElementById("sS11").innerHTML = document.getElementById("topLeft3").innerHTML;
        }
    }else if(document.getElementById("topLeftWinner5").innerHTML==document.getElementById("topLeft6").innerHTML && document.getElementById("topLeftWinner6").innerHTML==document.getElementById("topLeft14").innerHTML){
        if(secondChance11<=8753){
            document.getElementById("sS11").innerHTML = document.getElementById("topLeft6").innerHTML;
        }else{
            document.getElementById("sS11").innerHTML = document.getElementById("topLeft14").innerHTML;
        }
    }else if(document.getElementById("topLeftWinner5").innerHTML==document.getElementById("topLeft11").innerHTML && document.getElementById("topLeftWinner6").innerHTML==document.getElementById("topLeft3").innerHTML){
        if(secondChance11<=2191){
            document.getElementById("sS11").innerHTML = document.getElementById("topLeft11").innerHTML;
        }else{
            document.getElementById("sS11").innerHTML = document.getElementById("topLeft3").innerHTML;
        }
    }else{
        if(secondChance11<=7388){
            document.getElementById("sS11").innerHTML = document.getElementById("topLeft11").innerHTML;
        }else{
            document.getElementById("sS11").innerHTML = document.getElementById("topLeft14").innerHTML;
        }
    }
    if(document.getElementById("topLeftWinner7").innerHTML==document.getElementById("topLeft7").innerHTML && document.getElementById("topLeftWinner8").innerHTML==document.getElementById("topLeft2").innerHTML){
        if(secondChance12<=3525){
            document.getElementById("sS12").innerHTML = document.getElementById("topLeft7").innerHTML;
        }else{
            document.getElementById("sS12").innerHTML = document.getElementById("topLeft2").innerHTML;
        }
    }else if(document.getElementById("topLeftWinner7").innerHTML==document.getElementById("topLeft7").innerHTML && document.getElementById("topLeftWinner8").innerHTML==document.getElementById("topLeft15").innerHTML){
        if(secondChance12<=9197){
            document.getElementById("sS12").innerHTML = document.getElementById("topLeft7").innerHTML;
        }else{
            document.getElementById("sS12").innerHTML = document.getElementById("topLeft15").innerHTML;
        }
    }else if(document.getElementById("topLeftWinner7").innerHTML==document.getElementById("topLeft10").innerHTML && document.getElementById("topLeftWinner8").innerHTML==document.getElementById("topLeft2").innerHTML){
        if(secondChance12<=2417){
            document.getElementById("sS12").innerHTML = document.getElementById("topLeft10").innerHTML;
        }else{
            document.getElementById("sS12").innerHTML = document.getElementById("topLeft2").innerHTML;
        }
    }else{
        if(secondChance12<=8675){
            document.getElementById("sS12").innerHTML = document.getElementById("topLeft10").innerHTML;
        }else{
            document.getElementById("sS12").innerHTML = document.getElementById("topLeft15").innerHTML;
        }
    }
    if(document.getElementById("bottomLeftWinner1").innerHTML==document.getElementById("bottomLeft1").innerHTML && document.getElementById("bottomLeftWinner2").innerHTML==document.getElementById("bottomLeft8").innerHTML){
        if(secondChance13<=7033){
            document.getElementById("sS13").innerHTML = document.getElementById("bottomLeft1").innerHTML;
        }else{
            document.getElementById("sS13").innerHTML = document.getElementById("bottomLeft8").innerHTML;
        }
    }else if(document.getElementById("bottomLeftWinner1").innerHTML==document.getElementById("bottomLeft1").innerHTML && document.getElementById("bottomLeftWinner2").innerHTML==document.getElementById("bottomLeft9").innerHTML){
        if(secondChance13<=7388){
            document.getElementById("sS13").innerHTML = document.getElementById("bottomLeft1").innerHTML;
        }else{
            document.getElementById("sS13").innerHTML = document.getElementById("bottomLeft9").innerHTML;
        }
    }else if(document.getElementById("bottomLeftWinner1").innerHTML==document.getElementById("bottomLeft16").innerHTML && document.getElementById("bottomLeftWinner2").innerHTML==document.getElementById("bottomLeft8").innerHTML){
        if(secondChance13<=357){
            document.getElementById("sS13").innerHTML = document.getElementById("botttomLeft16").innerHTML;
        }else{
            document.getElementById("sS13").innerHTML = document.getElementById("bottomLeft8").innerHTML;
        }
    }else{
        if(secondChance13<=423){
            document.getElementById("sS13").innerHTML = document.getElementById("bottomLeft16").innerHTML;
        }else{
            document.getElementById("sS13").innerHTML = document.getElementById("bottomLeft9").innerHTML;
        }
    }
    if(document.getElementById("bottomLeftWinner3").innerHTML==document.getElementById("bottomLeft5").innerHTML && document.getElementById("bottomLeftWinner4").innerHTML==document.getElementById("bottomLeft4").innerHTML){
        if(secondChance14<=4700){
            document.getElementById("sS14").innerHTML = document.getElementById("bottomLeft5").innerHTML;
        }else{
            document.getElementById("sS14").innerHTML = document.getElementById("bottomLeft4").innerHTML;
        }
    }else if(document.getElementById("bottomLeftWinner3").innerHTML==document.getElementById("bottomLeft5").innerHTML && document.getElementById("bottomLeftWinner4").innerHTML==document.getElementById("bottomLeft13").innerHTML){
        if(secondChance14<=8386){
            document.getElementById("sS14").innerHTML = document.getElementById("bottomLeft5").innerHTML;
        }else{
            document.getElementById("sS14").innerHTML = document.getElementById("bottomLeft13").innerHTML;
        }
    }else if(document.getElementById("bottomLeftWinner3").innerHTML==document.getElementById("bottomLeft12").innerHTML && document.getElementById("bottomLeftWinner4").innerHTML==document.getElementById("bottomLeft4").innerHTML){
        if(secondChance15<=1926){
            document.getElementById("sS14").innerHTML = document.getElementById("bottomLeft12").innerHTML;
        }else{
            document.getElementById("sS14").innerHTML = document.getElementById("bottomLeft4").innerHTML;
        }
    }else{
        if(secondChance16<=5829){
            document.getElementById("sS14").innerHTML = document.getElementById("bottomLeft12").innerHTML;
        }else{
            document.getElementById("sS14").innerHTML = document.getElementById("bottomLeft13").innerHTML;
        }
    }
    if(document.getElementById("bottomLeftWinner5").innerHTML==document.getElementById("bottomLeft6").innerHTML && document.getElementById("bottomLeftWinner6").innerHTML==document.getElementById("bottomLeft3").innerHTML){
        if(secondChance7<=4105){
            document.getElementById("sS15").innerHTML = document.getElementById("bottomLeft6").innerHTML;
        }else{
            document.getElementById("sS15").innerHTML = document.getElementById("bottomLeft3").innerHTML;
        }
    }else if(document.getElementById("bottomLeftWinner5").innerHTML==document.getElementById("bottomLeft6").innerHTML && document.getElementById("bottomLeftWinner6").innerHTML==document.getElementById("bottomLeft14").innerHTML){
        if(secondChance7<=8753){
            document.getElementById("sS15").innerHTML = document.getElementById("bottomLeft6").innerHTML;
        }else{
            document.getElementById("sS15").innerHTML = document.getElementById("bottomLeft14").innerHTML;
        }
    }else if(document.getElementById("bottomLeftWinner5").innerHTML==document.getElementById("bottomLeft11").innerHTML && document.getElementById("bottomLeftWinner6").innerHTML==document.getElementById("bottomLeft3").innerHTML){
        if(secondChance7<=2191){
            document.getElementById("sS15").innerHTML = document.getElementById("bottomLeft11").innerHTML;
        }else{
            document.getElementById("sS15").innerHTML = document.getElementById("bottomLeft3").innerHTML;
        }
    }else{
        if(secondChance7<=7388){
            document.getElementById("sS15").innerHTML = document.getElementById("bottomLeft11").innerHTML;
        }else{
            document.getElementById("sS15").innerHTML = document.getElementById("bottomLeft14").innerHTML;
        }
    }
    if(document.getElementById("bottomLeftWinner7").innerHTML==document.getElementById("bottomLeft7").innerHTML && document.getElementById("bottomLeftWinner8").innerHTML==document.getElementById("bottomLeft2").innerHTML){
        if(secondChance8<=3525){
            document.getElementById("sS16").innerHTML = document.getElementById("bottomLeft7").innerHTML;
        }else{
            document.getElementById("sS16").innerHTML = document.getElementById("bottomLeft2").innerHTML;
        }
    }else if(document.getElementById("bottomLeftWinner7").innerHTML==document.getElementById("bottomLeft7").innerHTML && document.getElementById("bottomLeftWinner8").innerHTML==document.getElementById("bottomLeft15").innerHTML){
        if(secondChance8<=9197){
            document.getElementById("sS16").innerHTML = document.getElementById("bottomLeft7").innerHTML;
        }else{
            document.getElementById("sS16").innerHTML = document.getElementById("bottomLeft15").innerHTML;
        }
    }else if(document.getElementById("bottomLeftWinner7").innerHTML==document.getElementById("bottomLeft10").innerHTML && document.getElementById("bottomLeftWinner8").innerHTML==document.getElementById("bottomLeft2").innerHTML){
        if(secondChance8<=2417){
            document.getElementById("sS16").innerHTML = document.getElementById("bottomLeft10").innerHTML;
        }else{
            document.getElementById("sS16").innerHTML = document.getElementById("bottomLeft2").innerHTML;
        }
    }else{
        if(secondChance8<=8675){
            document.getElementById("sS16").innerHTML = document.getElementById("bottomLeft10").innerHTML;
        }else{
            document.getElementById("sS16").innerHTML = document.getElementById("bottomLeft15").innerHTML;
        }
    }
}