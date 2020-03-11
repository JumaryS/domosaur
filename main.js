const spanItUp = document.querySelector('.mess-with-me');
spanItUp.style.fontSize = '3em';

const pMS = document.querySelector('p.mess-with-me');
pMS.style.backgroundColor = 'yellow';

const hiddenImage = document.querySelector('#hide-me');
hiddenImage.style.display = 'none';

const theFirstIMG = document.querySelector("#triceratops");
theFirstIMG.style.width = '324px';

const makeBlue = function(){
spanItUp.style.color = 'blue';
};
spanItUp.addEventListener('click',makeBlue);

const border = function(){
theFirstIMG.style.border = 'thin dotted red';
};
theFirstIMG.addEventListener('click',border);
// need some help with const ...(something)= function 
const dino = document.querySelector('#feathers')
const half = function(){
dino.style.opacity = '0.5';
};

dino.addEventListener('click',half)