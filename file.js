let head = document.querySelectorAll(".heading");
let para = document.querySelector(".para");
let para1 = document.querySelector(".para1");
let para2 = document.querySelector(".para2");


let display1 = 0;
function hideshow1() {
if(display1 == 1)
{
para1.style.display = 'block';
display1 = 0;
} 
else{
para1.style.display = 'none';
display1 = 1;
}   
}
function hideshow() {
if(display1 == 1)
{
para.style.display = 'block';
display1 = 0;
} 
else{
para.style.display = 'none';
display1 = 1;
}   
}

function hideshow2() {
    if(display1 == 1)
    {
    para2.style.display = 'block';
    display1 = 0;
    } 
    else{
    para2.style.display = 'none';
    display1 = 1;
    }   
    }
