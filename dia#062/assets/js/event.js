'use strict'
const priceData = 
[
    {
        title: "Basic",
        price: 5
    },
    {
        title: "Pro",
        price: 10
    },
    {
        title: "Premium",
        price: 20
    },
]

const progressData = 
[
    {
        leftSide: "5 Users",
        rightSide: "100 Users"
    },
    {
        leftSide: "20 GB",
        rightSide: "200 GB"
    },
    {
        leftSide: "1 Project",
        rightSide: "50 Projects"
    },
]
window.onload = function() {
    for (let index = 0; index < priceData.length; index++) {
        let priceTemplate = 
        `
            <div class="Price_Card card_${priceData[index].title}">
                <h4 class="price_title">${priceData[index].title}</h4>
                <div class="grayLines_container">
                    <div>
                        <h1 class="price">$${priceData[index].price}</h1>
                        <p>per month</p>
                    </div>
                    <div>
                        <div class="long_line"></div>
                        <div class="lowMedium_line"></div>
                        <div class="medium_line"></div>
                        <div class="small_line"></div>
                    </div>
                </div>
            </div>
        `
        document.getElementsByClassName("price_cards_container")[0].innerHTML += priceTemplate

        let progressTemplate = 
       `
       <div class="progress_container">
            <div class="Progress_titles">
                <p>${progressData[index].leftSide}</p>
                <p>${progressData[index].rightSide}</p>
            </div>
            <div class="grayProgress_container">
                <div class="Progress${index}">
                </div>
            </div>
        </div>
       `
       document.getElementsByClassName("progresses_container")[0].innerHTML += progressTemplate

        
    } 
       
    const cardClasses = ["card_Basic","card_Pro","card_Premium"]

    cardClasses.forEach( (item) => {
        document.getElementsByClassName(item)[0].addEventListener("mouseleave", function()
        {
            document.getElementsByClassName("Progress0")[0].style.width = 0 + "%"
            document.getElementsByClassName("Progress1")[0].style.width = 0 + "%"
            document.getElementsByClassName("Progress2")[0].style.width = 0 + "%"
        })
    })
    
    document.getElementsByClassName("card_Basic")[0].addEventListener("mouseenter", function(){
        document.getElementsByClassName("Progress0")[0].style.width = 10 + "%"
        document.getElementsByClassName("Progress1")[0].style.width = 10 + "%"
        document.getElementsByClassName("Progress2")[0].style.width = 10 + "%"
    })

    document.getElementsByClassName("card_Pro")[0].addEventListener("mouseenter", function(){
        document.getElementsByClassName("Progress0")[0].style.width = 45 + "%"
        document.getElementsByClassName("Progress1")[0].style.width = 75 + "%"
        document.getElementsByClassName("Progress2")[0].style.width = 60 + "%"
    })

    document.getElementsByClassName("card_Premium")[0].addEventListener("mouseenter", function(){
        document.getElementsByClassName("Progress0")[0].style.width = 100 + "%"
        document.getElementsByClassName("Progress1")[0].style.width = 100+ "%"
        document.getElementsByClassName("Progress2")[0].style.width = 100+ "%"
    })

    
 
}

