const list = document.querySelector('.list');
const btn = document.querySelector('.button');
const inpt = document.querySelector('.input');

btn.addEventListener('click', function(event) {

  const liNode = document.createElement('li');
  const textNode = document.createTextNode(inpt.value);
  liNode.appendChild(textNode);
  list.appendChild(liNode);
})
