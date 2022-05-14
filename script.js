const card = document.querySelector('.container');

card.addEventListener("mousemove", efeitoCard);
card.addEventListener("mouseleave", voltarCartao)
card.addEventListener("mouseenter", entrarCartao)

function efeitoCard(event)
{
    const cardLargura = card.offsetWidth;
    const cardAltura = card.offsetHeight;
    const centerX = card.offsetLeft + cardLargura/2;
    const centerY = card.offsetTop + cardAltura/2;
    const positionX = event.clientX - centerX;
    const positionY = event.clientY - centerY;
    
    const rotateX = ((+1)*25*positionY/(cardAltura/2)).toFixed(2);
    const rotateY = ((-1)*25*positionX/(cardLargura/2)).toFixed(2);

    console.log(rotateX, rotateY)

    card.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
}

function voltarCartao(event){
    card.style.transform = `perspective(500px) rotateX(0deg) rotateY(0deg)`;
    cardTransition();
}

function cardTransition(){
    clearInterval(car.transitionId)
    card.style.cardTransition = 'transform 600ms'
    setTimeout(() =>{
        card.style.transition = '';
    }, 600)
}

function entrarCartao(event){
    cardTransition();
}