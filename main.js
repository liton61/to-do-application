document.getElementById('add-btn').addEventListener('click', function () {
  
    const inputField = document.getElementById('input-field');
    const addItems = inputField.value;

    const listItems = document.getElementById('list-items');
    const li = document.createElement('li');
    li.innerText = addItems;
    listItems.appendChild(li);

    li.style.backgroundColor = 'burlywood';
    li.style.width = '70%';
    li.style.padding = '10px 0px';
    li.style.textAlign = 'center';
    li.style.marginTop = '10px';
    li.style.borderRadius = '5px';
    li.style.color = 'white';

    inputField.value = '';

})