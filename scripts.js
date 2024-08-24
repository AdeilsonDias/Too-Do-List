
function addTask(){
    let inputValue = document.querySelector(".inputValue").value;
    if(inputValue){
        let li = document.createElement("li")
        li.innerHTML=inputValue +`<span onclick="deletTask(this)">❌</span>`
        document.querySelector("ul").appendChild(li)
        document.querySelector(".inputValue").value=""
    }
}

function deletTask(li){

    li.parentElement.remove()
}