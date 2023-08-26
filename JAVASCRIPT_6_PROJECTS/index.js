document.getElementById("singleClick").addEventListener("click",()=>{
  alert("Clicked");
});

document.getElementById("doubleClicked").addEventListener("dblclick",()=>{
  alert("Double Clicked");
});

document.getElementById("mouseOver").addEventListener("mouseover",()=>{
  alert("Save zone!!!!!");
});

document.getElementById("mouseOut").addEventListener("mouseout",()=>{
  alert("Out of save zone!!!!");
})

document.getElementById("onKeyPress").addEventListener("keypress",(e)=>{
  alert(`Key Pressed --> ${e.code}`);
});

document.getElementById("keyUp").addEventListener("keyup",(e)=>{
  alert(`Key Pressed --> ${e.code}`);
});

document.getElementById("keyDown").addEventListener("keydown",(e)=>{
  alert(`Key Pressed --> ${e.code}`);
});