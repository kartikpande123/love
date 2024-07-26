const yesBtn = document.getElementById("btnys");
const noBtn = document.getElementById("btnno")

yesBtn.addEventListener("click", ()=>{
    alert("I Love You Too! ❤️❤️❤️")
})

function positionNoButton() {
    const yesBtnRect = yesBtn.getBoundingClientRect();
    const bodyRect = document.body.getBoundingClientRect();
    
    const centerX = yesBtnRect.left + (yesBtnRect.width / 2) - (noBtn.offsetWidth / 2);
    const centerY = yesBtnRect.bottom + 10;
    
    noBtn.style.left = `${centerX}px`;
    noBtn.style.top = `${centerY}px`;
}


noBtn.addEventListener("mouseover", ()=>{
    const bodyRect = document.body.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();

    const maxX = bodyRect.width - btnRect.width;
    const maxY = bodyRect.height - btnRect.height;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
})

   window.addEventListener("load", positionNoButton);
   window.addEventListener("resize", positionNoButton);