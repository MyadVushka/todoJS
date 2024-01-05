const list = document.querySelector('.list');
const btn = document.querySelector('.button');
const inpt = document.querySelector('.input');

document.addEventListener('DOMContentLoaded', function() {
  list.innerHTML = window.localStorage.myitems || '';
})

btn.addEventListener('click', function(event) {

  
  if (inpt.value == '') {
    return 0;
  }
  
  // creating general nodes
  const liNode = document.createElement('li');
  liNode.classList.add('liTodo');
  const divNode = document.createElement('div');
  const textNode = document.createTextNode(inpt.value);
  const buttonDivNode = document.createElement('div');
  buttonDivNode.classList.add('buttonDiv');
  // button to check if complete
  const buttonConfNode = document.createElement('button');
  buttonConfNode.innerText = 'N';

  // button to delete
  const buttonDelNode = document.createElement('button');
  buttonDelNode.classList.add('btnToDelete');
  buttonDelNode.innerText = 'Delete';

  buttonDivNode.appendChild(buttonConfNode);
  buttonDivNode.appendChild(buttonDelNode);

  divNode.appendChild(textNode);
  divNode.appendChild(buttonDivNode);

  liNode.appendChild(divNode);
  list.appendChild(liNode);

  window.localStorage.myitems = list.innerHTML;

  buttonDelNode.addEventListener('click', function() {
    buttonDelNode.parentNode.parentNode.parentNode.remove();
    localStorage.clear();
  })

  buttonConfNode.addEventListener('click', function() {
    buttonConfNode.innerText = buttonConfNode.innerText == 'N' ? 'Y' : 'N';
    buttonConfNode.style.color = buttonConfNode.innerText == 'N' ? 'white' : 'hsl(25, 97%, 53%)';
  })
  
  buttonConfNode.addEventListener('mouseenter', function() {
    if (buttonConfNode.innerText == 'Y') {
      return;
    }
    else {
      buttonConfNode.style.color = 'hsl(25, 97%, 53%)';
    }
  })
  buttonConfNode.addEventListener('mouseleave', function() {
    if (buttonConfNode.innerText == 'Y') {
      return;
    }
    else {
      buttonConfNode.style.color = 'white';
    }
  })

  inpt.value = '';
})


