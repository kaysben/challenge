//var text=document.querySelector("text")

var input=document.querySelector("input");
var add=document.querySelector("button");
var list=document.querySelector("ul");





function addtext()
{ 
    let text=document.createTextNode(input.value);
    var newlist = document.createElement("li");

    console.log(text);

    list.appendChild(newlist);
    newlist.appendChild(text);
    var remove = document.createElement("button");
    newlist.appendChild(remove);
    remove.innerHTML="remove";
    remove.addEventListener("click",function(){
        newlist.remove()
        
    });
    

};

