var initialPrice = document.querySelector("#initial-price")
var numberOfStock = document.querySelector("#number-of-stock")
var currentPrice = document.querySelector("#current-price")
var userOutput = document.querySelector("#output-user")
var checkBtn = document.querySelector("#check-button")
var sunProfit = document.querySelector(".nav-sun")
var rainLoss= document.querySelector(".nav-rain")





function showOutput(){

var price = initialPrice.value
var stock = numberOfStock.value
var current = currentPrice.value

var output = calculateProfitOrLoss(price,stock,current)
return output
}

function showMessage(message){

userOutput.innerText=message
}




function calculateProfitOrLoss(initial,stock,current){

rainLoss.style.display="none"
sunProfit.style.display="none"

    if(initial > current){

        var loss = (initial*stock)-(current*stock);
        var lossPercentage = ((loss/initial).toFixed(1))*100
        rainLoss.style.display="flex"
        userOutput.style.color="red"

        showMessage("whoopsiee its a loss of " + loss + " and " +lossPercentage + "%")
        
    } 
    else if(current > initial){

            var profit =(current - initial)*stock
            var profitPercentage = ((profit/initial).toFixed(1))*100
            sunProfit.style.display="flex"
            userOutput.style.color="green"

            showMessage("yayyy! its a profit of " + profit + " and " + profitPercentage + "%")
            
        
    }
    else{
        if(initial === current ){
            showMessage("No Profit-No Loss")

        }
     
    } 
}





checkBtn.addEventListener("click",showOutput)

