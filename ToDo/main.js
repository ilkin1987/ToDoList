var inputdiv = document.querySelector(".inputdiv");
var input = document.getElementById("input");
var btn = document.getElementById("btn");
var contentdiv = document.querySelector(".contentdiv");

var calculate = 0;
btn.addEventListener("click",go)

function go(){
    if(input.value !=""){
        calculate++;
var paragraf = document.createElement("p");
var deleteBtn = document.createElement("div");
deleteBtn.classList.add("deleteBtn");
deleteBtn.innerText = "Delete"
paragraf.innerText = calculate +"."+ input.value;
contentdiv.appendChild(paragraf);
paragraf.appendChild(deleteBtn);
input.value = "";

deleteBtn.addEventListener("click",function(){
    calculate--;
contentdiv.removeChild(paragraf);
});

}
}