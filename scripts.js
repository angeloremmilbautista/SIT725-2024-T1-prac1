function changeText()
    {
    var textArray1 = ["SIT753 - Professional Practice in IT ","SIT782 - Capstone Team Project (B)", "SIT725 -  Applied Software Engineering", "SIT726 - Information Technology Innovations", "Try Again!!"];
    var randomNumber = getRandomNumberBetween(0,textArray1.length - 1);
    let textArray2 = textArray1[randomNumber];
    document.getElementById("heading").innerHTML = textArray2;
    }

    function getRandomNumberBetween(min,max)
    {
    return Math.floor(Math.random()*(max-min+1)+min);
    }