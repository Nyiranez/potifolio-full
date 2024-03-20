const menu= document.getElementById("menu-icn");
const hidDiv=document.getElementById("hid-menu");

menu.addEventListener("click",function(){
    hidDiv.style.opacity=100;
});

const spa=document.getElementById("exit");

spa.addEventListener("click", function(){
 hidDiv.style.display="none";
});