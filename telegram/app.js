const container = document.querySelector(".container");
const passwordbox = document.querySelector(".passwordbox");
const inputnumber = document.querySelector(".input_number");
const menyubox = document.querySelector(".menyu-box");
const form = document.querySelector("form");
const lockicon = document.querySelector("#lock-icon");
const unlockicon = document.querySelector("#unlock-icon");
const errortext = document.querySelector(".error-text");
const input1 = document.querySelector("#input1");
const h1 = document.querySelector(".h1");


//Story qismi//
const story1back = document.querySelector("#story-back");
const storyvid = document.querySelector('.story-vid');

const sircle1 = document.querySelector('.sircle1');
//Story back//

//Story2 qismi//
const story2back = document.querySelector("#story-back2");
const storyvid2 = document.querySelector('.story-vid2');

const sircle2 = document.querySelector('.sircle2');
//Story2 back//

story1back.addEventListener("click", () =>{
    menyubox.style.display = "block"
    storyvid.style.display = "none"
})

sircle1.addEventListener("click", () =>{
    menyubox.style.display = "none"
    storyvid.style.display = "block"
    story1.style.display = "block;"
})

story2back.addEventListener("click", () =>{
    menyubox.style.display = "block";
    storyvid2.style.display = "none";
})

sircle2.addEventListener("click", () =>{
    storyvid.style.display = "none"
    menyubox.style.display = "none"
    storyvid2.style.display = "block"

    
})


//story3 qismi
const storyvid3 = document.querySelector(".story-vid3");
const sircle3 = document.querySelector(".sircle3");
const storyback3 = document.querySelector("#story-back3");



sircle3.addEventListener('click', () =>{
    storyvid.style.display = "none"
    menyubox.style.display = "none"
    storyvid3.style.display = "block"
})
storyback3.addEventListener('click', () =>{
    menyubox.style.display = "block";
    storyvid3.style.display = "none";
})




//story4 qismi
const storyvid4 = document.querySelector(".story-vid4");
const sircle4 = document.querySelector(".sircle4");
const storyback4 = document.querySelector("#story-back4");



sircle4.addEventListener('click', () =>{
    storyvid.style.display = "none"
    menyubox.style.display = "none"
    storyvid4.style.display = "block"
})
storyback4.addEventListener('click', () =>{
    menyubox.style.display = "block";
    storyvid4.style.display = "none";
})








form.addEventListener('submit', (event) =>{
    event.preventDefault();
    let inputvalue = inputnumber.value


    if(inputvalue ==="123456789"){
        passwordbox.style = "display:none;";
        menyubox.style = "display:block;";
        
    }
    else{
        errortext.style = "display:block;";
    }
})
unlockicon.addEventListener("click", () =>{
    menyubox.style = "display:none;";
    passwordbox.style = "display:block;";
})




//pastki menyu 
const menyuboxitem4 = document.querySelector('.menyu-box-item4');
const settingbtn = document.querySelector('.setting-btn');
const settingbox = document.querySelector('.setting-box');
const cmenyu1icon = document.querySelector('#cmenyu1-icon');



settingbtn.addEventListener('click', () =>{
    menyubox.style = "display:none;";
    settingbox.style = "display:block;";
})


cmenyu1icon.addEventListener('click', () =>{
    menyubox.style = "display:block;";
    settingbox.style = "display:none;";
})




//lich ichi


const setting1boxitem3 = document.querySelector(".setting1-box-item3");
const Ozodjon = document.querySelector(".Ozodjon-lich");
const chiqish1 = document.querySelector("#chiqish1");
const lich1 = document.querySelector('.lich1')


lich1.addEventListener('click', ()=>{
    menyubox.style = "display:none"
    Ozodjon.style = "display:block"
})
chiqish1.addEventListener('click', () =>{
    menyubox.style = "display:block"
    Ozodjon.style = "display:none"
})


const Hayotbek = document.querySelector(".Hayotbek-lich");
const chiqish2 = document.querySelector("#chiqish2");
const lich2 = document.querySelector('.lich2');

lich2.addEventListener('click', () =>{
    menyubox.style = "display:none"
    Hayotbek.style = "display:block"
})
chiqish2.addEventListener('click', () =>{
    menyubox.style = "display:block"
    Hayotbek.style = "display:none"
})



const Jasur = document.querySelector(".Jasur-lich");
const chiqish3 = document.querySelector("#chiqish3");
const lich3 = document.querySelector('.lich3');

lich3.addEventListener('click', () =>{
    menyubox.style = "display:none"
    Jasur.style = "display:block"
})
chiqish3.addEventListener('click', () =>{
    menyubox.style = "display:block"
    Jasur.style = "display:none"
})



const Raxmatullox = document.querySelector(".Raxmatullox-lich");
const chiqish4 = document.querySelector("#chiqish4");
const lich4 = document.querySelector('.lich4');

lich4.addEventListener('click', () =>{
    menyubox.style = "display:none"
    Raxmatullox.style = "display:block"
})
chiqish4.addEventListener('click', () =>{
    menyubox.style = "display:block"
    Raxmatullox.style = "display:none"
})




const Muslimbek = document.querySelector(".Muslimbek-lich");
const chiqish5 = document.querySelector("#chiqish5");
const lich5 = document.querySelector('.lich5');

lich5.addEventListener('click', () =>{
    menyubox.style = "display:none"
    Muslimbek.style = "display:block"
})
chiqish5.addEventListener('click', () =>{
    menyubox.style = "display:block"
    Muslimbek.style = "display:none"
})





const Shoxjaxon = document.querySelector(".Shoxjaxon-lich");
const chiqish6 = document.querySelector("#chiqish6");
const lich6 = document.querySelector('.lich6');

lich6.addEventListener('click', () =>{
    menyubox.style = "display:none"
    Shoxjaxon.style = "display:block"
})
chiqish6.addEventListener('click', () =>{
    menyubox.style = "display:block"
    Shoxjaxon.style = "display:none"
})





const Azizbek = document.querySelector(".Azizbek-lich");
const chiqish7 = document.querySelector("#chiqish7");
const lich7 = document.querySelector('.lich7');

lich7.addEventListener('click', () =>{
    menyubox.style = "display:none"
    Azizbek.style = "display:block"
})
chiqish7.addEventListener('click', () =>{
    menyubox.style = "display:block"
    Azizbek.style = "display:none"
})






const Teacher= document.querySelector(".Teacher-lich");
const chiqish8 = document.querySelector("#chiqish8");
const lich8 = document.querySelector('.lich8');

lich8.addEventListener('click', () =>{
    menyubox.style = "display:none"
    Teacher.style = "display:block"
})
chiqish8.addEventListener('click', () =>{
    menyubox.style = "display:block"
    Teacher.style = "display:none"
})





const sardor = document.querySelector(".sardor-lich");
const chiqish9 = document.querySelector("#chiqish9");
const lich9 = document.querySelector('.lich9');

lich9.addEventListener('click', () =>{
    menyubox.style = "display:none"
    sardor.style = "display:block"
})
chiqish9.addEventListener('click', () =>{
    menyubox.style = "display:block"
    sardor.style = "display:none"
})








const Abdugani = document.querySelector(".Abdugani-lich");
const chiqish10 = document.querySelector("#chiqish10");
const lich10 = document.querySelector('.lich10');

lich10.addEventListener('click', () =>{
    menyubox.style = "display:none"
    Abdugani.style = "display:block"
})
chiqish10.addEventListener('click', () =>{
    menyubox.style = "display:block"
    Abdugani.style = "display:none"
})




const rejim1 = document.querySelector("#rejim1");
const rejim2 = document.querySelector("#rejim2");
const menyuboxitem1 = document.querySelector('.menyu-box-item1');
const lorem1 = document.querySelector(".lorem1");
const lorem2 = document.querySelector(".lorem2");
const lorem3 = document.querySelector(".lorem3");
const lorem4 = document.querySelector(".lorem4");
const lorem5 = document.querySelector(".lorem5");
const lorem6 = document.querySelector(".lorem6");
const lorem7 = document.querySelector(".lorem7");
const lorem8 = document.querySelector(".lorem8");
const lorem9 = document.querySelector(".lorem9");
const lorem10 = document.querySelector(".lorem10");

rejim1.addEventListener('click', () =>{
    lich1.style = "background:black"
    lich2.style = "background:black"
    lich3.style = "background:black"
    lich4.style = "background:black"
    lich5.style = "background:black"
    lich6.style = "background:black"
    lich7.style = "background:black"
    lich8.style = "background:black"
    lich9.style = "background:black"
    lich10.style = "background:black"
    lorem1.style = "color:white"
    lorem2.style = "color:white"
    lorem3.style = "color:white"
    lorem4.style = "color:white"
    lorem5.style = "color:white"
    lorem6.style = "color:white"
    lorem7.style = "color:white"
    lorem8.style = "color:white"
    lorem9.style = "color:white"
    lorem10.style = "color:white"
    menyuboxitem4.style = "background:black";
    menyuboxitem1.style = "background:black";
})



const settingboxitem1 = document.querySelector(".setting1-box-item1");
const settingboxitem2 = document.querySelector(".setting1-box-item2");
const setting2boxitem1 = document.querySelector(".setting2-box-item1")


rejim1.addEventListener('click', () =>{
    settingboxitem1.style = "background:black";
    settingboxitem2.style = "background:black";
    setting2boxitem1.style = "background:black";
    
})



rejim2.addEventListener('click', () =>{
    lich1.style = "background:white"
    lich2.style = "background:white"
    lich3.style = "background:white"
    lich4.style = "background:black"
    lich5.style = "background:black"
    lich6.style = "background:black"
    lich7.style = "background:black"
    lich8.style = "background:black"
    lich9.style = "background:black"
    lich10.style = "background:black"
    lorem1.style = "color:white"
    lorem2.style = "color:white"
    lorem3.style = "color:white"
    lorem4.style = "color:white"
    lorem5.style = "color:white"
    lorem6.style = "color:white"
    lorem7.style = "color:white"
    lorem8.style = "color:white"
    lorem9.style = "color:white"
    lorem10.style = "color:white"
    menyuboxitem4.style = "background:black";
    menyuboxitem1.style = "background:black";
})






















