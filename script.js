
function changeText(){
    //changing an element
    let title = document.getElementById("title");
    title.textContent = "Hello Web Module Session One!"
    title.style.color = "blue";
    //adding an element
    let newDiv = document.createElement("div");
    newDiv.textContent = "Hey! I am new here before!!!";
    document.body.appendChild(newDiv);
}s