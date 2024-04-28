const baseUrl = 'http://localhost:3030/jsonstore/gifts/';

const loadBtnElement = document.getElementById('load-presents');
const giftsContainerElement = document.getElementById('gift-list');
const editBtnElement = document.getElementById('edit-present');
const addBtnElement = document.getElementById('add-present');
const presentElement = document.getElementById('gift');
const forElement = document.getElementById('for');
const priceElement = document.getElementById('price');
const formElement = document.getElementById('form');

const loadPresents = async () => {
    const response = await fetch(baseUrl);
    const data = await response.json();

    giftsContainerElement.innerHTML = '';

    for (const present of Object.values(data)) {
        const giftSockElement = document.createElement('div');
        giftSockElement.classList.add('gift-sock');

        const divContentElement = document.createElement('div')
        divContentElement.classList.add('content');

        const giftPElement = document.createElement('p');
        giftPElement.textContent = present.gift;

        const forPElement = document.createElement('p');
        forPElement.textContent = present.for;

        const pricePElement = document.createElement('p');
        pricePElement.textContent = present.price;

        divContentElement.appendChild(giftPElement);
        divContentElement.appendChild(forPElement);
        divContentElement.appendChild(pricePElement);

        giftSockElement.appendChild(divContentElement);

        const divBtnContainer = document.createElement('div');
        divBtnContainer.classList.add('buttons-container');

        const changeBtnElement = document.createElement('button');
        changeBtnElement.classList.add('change-btn');
        changeBtnElement.textContent = 'Change';

        const deleteBtnElement = document.createElement('button');
        deleteBtnElement.classList.add('delete-btn');
        deleteBtnElement.textContent = 'Delete';

        divBtnContainer.appendChild(changeBtnElement);
        divBtnContainer.appendChild(deleteBtnElement);

        giftSockElement.appendChild(divBtnContainer);

        giftsContainerElement.appendChild(giftSockElement);

        editBtnElement.setAttribute('disabled', 'disabled');

        deleteBtnElement.addEventListener('click',async () => {
            await fetch(`${baseUrl}/${present._id}`, {
                method: 'DELETE'
            });

            giftSockElement.remove()
        })
    }
}

loadBtnElement.addEventListener('click', loadPresents);

addBtnElement.addEventListener('click', async () => {
    const newPresent = getInput();

    await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(newPresent),
    })

    clearInput();
    await loadPresents();
})

function clearInput() {
    presentElement.value = '';
    forElement.value = '';
    priceElement.value = '';
}

function getInput() {
   const newPresent = {
    gift: presentElement.value,
    for: forElement.value,
    price: priceElement.value,
   }

   return newPresent;
}