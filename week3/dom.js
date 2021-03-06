let div = document.createElement('div');
let button = document.createElement('button');
console.log(div, button)

button.innerText = "click me"
button.addEventListener('click', ()=>{
  div.innerText = "text created with javascript"
});
document.body.appendChild(div);
document.body.appendChild(button);
