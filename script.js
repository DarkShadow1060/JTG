 var topbar = document.getElementsByClassName("topbar-menu-style");
 var subscribe = document.getElementById("subscribe");
 topbar[0].setAttribute("style", "color: orange;  border-width:0px 0px 1px 0px; ");
for(var i=0;i<topbar.length;i++){
    topbar[i].addEventListener('click',(event)=>{
        for(var i=0;i<topbar.length;i++){
            topbar[i].setAttribute("style", "color: black;");
        }
        event.target.setAttribute("style", "color: orange; border-width:0px 0px 1px 0px; ");
    });

}

subscribe.addEventListener('click',()=>{
    alert("No action performed");
})
  