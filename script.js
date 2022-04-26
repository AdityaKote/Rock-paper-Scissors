'use strict'

const userscoreE1=document.getElementById("user-score");
const computerscoreE1=document.getElementById("computer-score");
const weaponcontainer=document.getElementById("weapon-container");
const userweaponE1=document.getElementById("user-weapon");
const computerweaponE1=document.getElementById("computer-weapon");
const resultcontainer=document.getElementById("result-container");
const resultE1=document.getElementById("result");


let userscore=0;
let computerscore=0;
let userchoice=" ";
let computerchoice=" ";

const weapons=['rock','paper','scissors'];

const init=function(){
    userscoreE1.textContent=userscore;
    computerscoreE1.textContent=computerscore;
};

const displayweapons=function(){
    weapons.forEach((weapon)=>{
        const weaponE1=document.createElement('button');

        weaponE1.classList.add('weapon');
        weaponE1.setAttribute('value',`${weapon}`);
        weaponE1.innerHTML= `<img src="./assest/image/${weapon}.png"  alt = "${weapon}"/>`;
        weaponcontainer.appendChild(weaponE1);

    });
};

const showResult=function(userchoice,computerchoice,result){
    resultcontainer.classList.add('show');
    userweaponE1.textContent=userchoice.toUpperCase();
    computerweaponE1.textContent=computerchoice.toUpperCase();
    if (result==='draw'){
        resultE1.textContent="Game draw";
    }
    else if(result==='win'){
        resultE1.textContent="you won";
        userscore++;
    }
    else if(result==="lost"){
        resultE1.textContent="you lost";
        computerscore++;
    }
   userscoreE1.textContent=userscore;
   computerscoreE1.textContent=computerscore;

};

const getresult=function(userchoice,computerchoice){
    let resultString=`${userchoice}${computerchoice}`;
    if(userchoice===computerchoice){
        showResult(userchoice,computerchoice,'draw');
    }
    else if(
        resultString==='rockscissors' ||
         resultString==='paperrock' ||
         resultString==='scissorspaper'
    ){
        showResult(userchoice,computerchoice,'win');
    }
    else if(
        resultString==='scissorsrock' ||
        resultString==='rockpaper' ||
        resultString==='paperscissors'

    ){
        showResult(userchoice,computerchoice,'lost');
    }
};

init();

displayweapons();

document.querySelectorAll('button').forEach((weapon) => {
    weapon.addEventListener('click',()=>{
        userchoice=weapon.value;
        computerchoice=weapons[Math.trunc(Math.random()* weapons.length)];
        getresult(userchoice,computerchoice);
    }
    );
});


