function addItem() {
    const inputElement = document.getElementById('newItemText');
    const ulElement = document.getElementById('items');

    let inputText = inputElement.value;
    const liElement = document.createElement('li');
    liElement.textContent = inputText;

    const deleteElement = document.createElement('a');
    deleteElement.textContent = '[Delete]';
    deleteElement.href = '#';

    ulElement.appendChild(liElement);
    liElement.appendChild(deleteElement);

    deleteElement.addEventListener('click', () => liElement.remove());

    inputElement.value = '';
}