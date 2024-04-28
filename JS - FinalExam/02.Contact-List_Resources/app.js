window.addEventListener("load", solve);

function solve() {
    const nameElement = document.getElementById('name');
    const numberElement = document.getElementById('phone');
    const addButtonElement = document.getElementById('add-btn')
    const categoryElement = document.getElementById('category');
    const checkListElement = document.getElementById('check-list');
    const contactList = document.getElementById('contact-list');

    addButtonElement.addEventListener('click', () => {

      const newName = nameElement.value;
      const newNumber = numberElement.value;
      const newCategory = categoryElement.value

      const liElement = document.createElement('li');
      const articleElement = document.createElement('article');

      const namePElement = document.createElement('p');
      namePElement.textContent = `name:${nameElement.value}`;

      const phonePElement = document.createElement('p');
      phonePElement.textContent = `phone:${numberElement.value}`;

      const categoryPElement = document.createElement('p');
      categoryPElement.textContent = `category:${categoryElement.value}`;

      const editBtnElement = document.createElement('button');
      editBtnElement.classList.add('edit-btn');

      const saveBtnElement = document.createElement('button');
      saveBtnElement.classList.add('save-btn');

      const buttonsContainer = document.createElement('div');
      buttonsContainer.classList.add('buttons')
      buttonsContainer.appendChild(editBtnElement);
      buttonsContainer.appendChild(saveBtnElement);

      articleElement.appendChild(namePElement);
      articleElement.appendChild(phonePElement);
      articleElement.appendChild(categoryPElement);

      liElement.appendChild(articleElement);
      liElement.appendChild(buttonsContainer);
      checkListElement.appendChild(liElement);

      nameElement.value = '';
      numberElement.value = '';
      categoryElement.value = '';


      editBtnElement.addEventListener('click', () => {
        nameElement.value = newName;
        numberElement.value = newNumber;
        categoryElement.value = newCategory;

        liElement.remove();
      })

      saveBtnElement.addEventListener('click', () => {

        const newLiElement = document.createElement('li');
        newLiElement.appendChild(articleElement)
        
        checkListElement.remove(liElement);

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('del-btn');

        newLiElement.appendChild(deleteBtn);

        contactList.appendChild(newLiElement);

        deleteBtn.addEventListener('click', () => {
          contactList.remove(newLiElement);
        })
      })

    })
  }
  