function addItem() {
    const inputElement = document.getElementById('newItemText');
    const ulElement = document.getElementById('items');

    let li = document.createElement('li');
    li.appendChild(document.createTextNode(inputElement.value));

    ulElement.appendChild(li);

    inputElement.value = '';
}