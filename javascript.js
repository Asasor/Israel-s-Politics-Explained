var canvas = document.getElementById('mainCanvas'),
context = canvas.getContext('2d');
canvas.width *= 4; // increase the horizontal resolution canvas 
canvas.height *= 7; // increase the horizontal resolution canvas 

var sNum = 0;

var transitionRect = getElementById("transitionRect");

function showSlide(slideNum, canvas, ctx) {
    ctx.fillStyle = "#2f364a";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    //transitionRect.style.backgroundImage = 'linear-gradient(#2f364a, #333)';

    // set up the text specifications
    ctx.font = "40px Lucida Grande";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";

    switch (slideNum) {

        case 0:  // home page
            break;
            
        case 1:  // introduction
            multiLineText(
                "This website is meant to help you understand\n" +
                "the political state of Israel. In recent years\n" +
                "Israel went through many major changes.\n" +
                "This project sets out to explain these changes\n" +
                "and why they threaten the democracy of Israel\n"
                , context, (canvas.width / 2), 120, 40);
            break;
            
        case 2:  // Table Of Contents
            break;
            
        case 3:  // Units
            break;
            
        case 4:  // The 4 Basic Variables
            break;
                        
        case 5:  // How The 4 Basic Variables Are Related
            break;
                        
        case 6:  // 2d Kinematics
            break;
                        
        case 7:  // Constants
            break;
                        
        case 8:  // Forces
            break;
                        
        case 9:  // Newton's 3 Laws
            break;
                        
        case 10:  // Summary
            break;
                        
        case 11:  // Glossary
            break;
        }
}


// miscellaneous functions
function setSlide(slideNum) {
    sNum = slideNum;
    showSlide(sNum, canvas, context);
}

function multiLineText(rawText, ctx,  startX, startY, increment) {   
    var lineArr = rawText.split('\n'); 
    for (i = 0; i < lineArr.length; i++) {
        ctx.fillText(lineArr[i], startX, (startY + increment * (i + 1)));
    }
}