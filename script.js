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

var start=1,end=3 ;
posts(0)
function posts(i){
   console.log("object")
   var PostList = document.getElementsByClassName("post");
   if(start===1 && i===-1) return;
   if(end===PostList.length && i===1) return;
   else{
       start+=i;
       end+=i;
   }
   
   for(let i=0;i<PostList.length ; i++){
       if( ( i+1!==start  && i+1!==start+1 && i+1!==end ) )
           document.getElementById("post" + (i+1)).setAttribute("style", "display: none;")
        else
        document.getElementById("post" + (i+1)).setAttribute("style", "display: inline-block;")

       }
}