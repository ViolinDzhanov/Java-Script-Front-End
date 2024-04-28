const baseUrl = 'http://localhost:3030/jsonstore/tasks/';

const loadBtnElement = document.getElementById('load-history');
const locationsContainerElement = document.getElementById('list');
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const dateElement = document.getElementById('date');
const addBtnElement = document.getElementById('add-weather');
const editBtnElement = document.getElementById('edit-weather');
const formElement = document.getElementById('form');

const loadWeather = async () => {
    const response = await fetch(baseUrl);
    const data = await response.json();

    locationsContainerElement.innerHTML = ''

    for (const city of Object.values(data)) {
        const locationH2Element = document.createElement('h2');
        locationH2Element.textContent = city.location;

        const dateH3Element = document.createElement('h3');
        dateH3Element.textContent = city.date;

        const temperatuteH3Element = document.createElement('h3');
        temperatuteH3Element.id = 'celsius';
        temperatuteH3Element.textContent = city.temperature;

        const buttonsContainerElement = document.createElement('div');
        buttonsContainerElement.classList.add('buttons-container');

        const changeBtnElement = document.createElement('button')
        changeBtnElement.classList.add('change-btn');
        changeBtnElement.textContent = 'Change';

        const deleteBtnElement = document.createElement('button');
        deleteBtnElement.classList.add('delete-btn');
        deleteBtnElement.textContent = 'Delete';

        buttonsContainerElement.appendChild(changeBtnElement);
        buttonsContainerElement.appendChild(deleteBtnElement);

        const divContainerElement = document.createElement('div');
        divContainerElement.classList.add('container');

        divContainerElement.appendChild(locationH2Element);
        divContainerElement.appendChild(dateH3Element);
        divContainerElement.appendChild(temperatuteH3Element);
        divContainerElement.appendChild(buttonsContainerElement);

        locationsContainerElement.appendChild(divContainerElement);

        changeBtnElement.addEventListener('click', () => {
            formElement.setAttribute('data-id', city._id);

            locationElement.value = city.location;
            dateElement.value = city.date;
            temperatureElement.value = city.temperature;

            divContainerElement.remove();

            editBtnElement.removeAttribute('disabled');
            addBtnElement.setAttribute('disabled', 'disabled');
        })

        deleteBtnElement.addEventListener('click', async() => {
            await fetch(`${baseUrl}/${city._id}`, {
                method: 'DELETE'
            });

            divContainerElement.remove();
        })
    }
}

loadBtnElement.addEventListener('click', loadWeather);

addBtnElement.addEventListener('click', async () => {
    const newAreaInfo = getInputData();

    await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(newAreaInfo),
    })

    clearInputData();

    await loadWeather();
})


function getInputData() {
    const location = locationElement.value;
    const temperature = temperatureElement.value;
    const date = dateElement.value;

    return {location, date, temperature};
}

function clearInputData() {
    locationElement.value = '';
    temperatureElement.value = '';
    dateElement.value = '';
}

editBtnElement.addEventListener('click', async () => {
    const {location, date, temperature} = getInputData();

    const locationId = formElement.getAttribute('data-id');

    await fetch(`${baseUrl}/${locationId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            _id: locationId,
            location,
            date,
            temperature,
        })
    });

    editBtnElement.setAttribute('disabled', 'disabled');

    addBtnElement.removeAttribute('disabled');

    clearInputData();

    loadWeather();
})