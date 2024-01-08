const text = document.querySelector('.input');
const list = document.querySelector('.list');
const button = document.querySelector('.button');
const buttonAllDel = document.querySelector('.buttonClearAll');

document.addEventListener('DOMContentLoaded', function() {
  const storedValues = localStorage.getItem('todoList');
  if (storedValues) {
    list.innerHTML = storedValues;
  }
})

const saveToStorage = () => {
  localStorage.setItem('todoList', list.innerHTML);
}

const addElement = () => {
  if (text.value.length == 0) {
    return;
  }

  const liNode = document.createElement('li');
  const generalDiv = document.createElement('div');
  const textNode = document.createElement('span');
  textNode.innerHTML = text.value;
  const buttonDiv = document.createElement('div');
  buttonDiv.classList.add('buttonDiv');
  const buttonCheck = document.createElement('button');
  buttonCheck.innerHTML = 'N';
  buttonCheck.classList.add('buttonCheck');
  const buttonDel = document.createElement('button');
  buttonDel.classList.add('buttonDel');
  buttonDel.innerHTML = 'Del';

  buttonDiv.appendChild(buttonCheck);
  buttonDiv.appendChild(buttonDel);
  generalDiv.appendChild(textNode);
  generalDiv.appendChild(buttonDiv);
  liNode.appendChild(generalDiv);
  list.appendChild(liNode);

  saveToStorage();
}

list.addEventListener('click', function(event) {
  const target = event.target;

  if (target.classList.contains('buttonDel')) {
    const liNode = target.closest('li');
    if (liNode) {
      list.removeChild(liNode);
      saveToStorage();
    }
  }
  if (target.classList.contains('buttonCheck')) {
    target.innerHTML = target.innerHTML == 'N' ? 'Y' : 'N';
  }
});

button.addEventListener('click', addElement);

buttonAllDel.addEventListener('click', function() {
  localStorage.clear();

  list.innerHTML = '';
})





