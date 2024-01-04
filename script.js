const list = document.querySelector('.list');
const btn = document.querySelector('.button');
const inpt = document.querySelector('.input');

btn.addEventListener('click', function(event) {

  const liNode = document.createElement('li');
  liNode.classList.add('liTodo');
  const divNode = document.createElement('div');
  const textNode = document.createTextNode(inpt.value);
  const buttonNode = document.createElement('button');
  buttonNode.classList.add('btnToDelete');
  buttonNode.innerText = 'Delete';

  divNode.appendChild(textNode);
  divNode.appendChild(buttonNode);
  liNode.appendChild(divNode);
  list.appendChild(liNode);

  inpt.value = '';

  buttonNode.addEventListener('click', function() {
    buttonNode.parentNode.parentNode.remove();
  })

})

