
var AllCards = document.querySelectorAll(".card");

var firstCard= null;
var secondCard = null;
var canclikc= true;
 var score = 0 ;

AllCards.forEach(card =>{
    card.addEventListener('click',handelcard);
})

function handelcard(){
if(!canclikc) return;
    if (this.classList.contains("flip")) return;

    this.classList.add("flip"); 
    if (!firstCard){
        firstCard = this;
    } else if(!secondCard) {
        secondCard = this
    }

    var img1 = firstCard ? firstCard.firstElementChild.src : null ;
    var img2 = secondCard ? secondCard.firstElementChild.src : null ;

    console.log(img1,img2)

    if(img1===img2){
        console.log("matching.......");
            firstCard= null;
            secondCard = null;

            score ++;
            if (score === 6){
                handelScore()

            }

    } else if ( img1 && img2){
        canclikc=false

        setTimeout(()=>{
            firstCard.classList.remove("flip");
            secondCard.classList.remove("flip");
            firstCard= null;
            secondCard = null;
            canclikc=true
        },1000)
        

      

    }

   function handelScore(){
    setTimeout(() => {
        var win = confirm ("you win  \ Play Agin ?");
        if (win === true){
            location.reload();
        }
        
    }, 1000);
   }

}

