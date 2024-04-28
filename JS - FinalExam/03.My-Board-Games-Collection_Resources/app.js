const baseUrl = 'http://localhost:3030/jsonstore/games';

const loadBtnElement = document.getElementById('load-games');
const gamesContainer = document.getElementById('games-list');
const gameNameElement = document.getElementById('g-name');
const gameTypeElement = document.getElementById('type');
const maxPlayersElement = document.getElementById('players');
const addBtnElement = document.getElementById('add-game');
const editBtnElement = document.getElementById('edit-game');
const formElement = document.getElementById('form');

const loadGames = async () => {
    const response = await fetch(baseUrl);
    const data = await response.json();

    gamesContainer.innerHTML = '';

    for (const game of Object.values(data)) {
        const divContainerElement = document.createElement('div');
        divContainerElement.classList.add('board-game');

        const divContentElement = document.createElement('div');
        divContentElement.classList.add('content');

        const namePElement = document.createElement('p')
        namePElement.textContent = game.name;

        const typePElement = document.createElement('p');
        typePElement.textContent = game.type;

        const playersCountElement = document.createElement('p');
        playersCountElement.textContent = game.players;

        divContentElement.appendChild(namePElement);
        divContentElement.appendChild(typePElement);
        divContentElement.appendChild(playersCountElement);

        const changeButtonElement = document.createElement('button');
        changeButtonElement.textContent = 'Change';
        changeButtonElement.classList.add('change-btn');

        const deleteButtonElement = document.createElement('button');
        deleteButtonElement.textContent = 'Delete';
        deleteButtonElement.classList.add('delete-btn');

        const buttonContainerElement = document.createElement('div');
        buttonContainerElement.classList.add('buttons-container')
        buttonContainerElement.appendChild(changeButtonElement);
        buttonContainerElement.appendChild(deleteButtonElement);

        divContainerElement.appendChild(divContentElement);
        divContainerElement.appendChild(buttonContainerElement);

        gamesContainer.appendChild(divContainerElement);

        changeButtonElement.addEventListener('click', () => {
            // save current meal id
            formElement.setAttribute('data-id', game._id);

            //  populate input
            gameNameElement.value = game.name;
            gameTypeElement.value = game.type;
            maxPlayersElement.value = game.players;

            // activate edit button
            editBtnElement.removeAttribute('disabled');

            // deactivate add button
            addBtnElement.setAttribute('disabled', 'disabled');

            // remove from list
            divContainerElement.remove();

        });

        // Attach on delete
        deleteButtonElement.addEventListener('click', async () => {
            // delete http request
            await fetch(`${baseUrl}/${game._id}`, {
                method: 'DELETE'
            });

            // remove from list
            divContainerElement.remove();      
        });
    }
}

loadBtnElement.addEventListener('click', loadGames);

editBtnElement.addEventListener('click', async () => {
    // get data from inputs
    const { name, type, players } = getInputData();

    // get meal id
    const gameId = formElement.getAttribute('data-id');

    // make a put request
    const response = await fetch(`${baseUrl}/${gameId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            _id: gameId,
            name,
            type,
            players,
        })
    });

    if (!response.ok) {
        return;
    }
        // deactivate edit button
        editBtnElement.setAttribute('disabled', 'disabled');

        // activate addbutton
        addBtnElement.removeAttribute('disabled');
    
        // clear currentMealId
        formElement.removeAttribute('data-id');
    
        // clear inputs fields
        gameNameElement.value = '';
        gameTypeElement.value = '';
        maxPlayersElement.value = '';
        
        // load meals
        loadGames();
    });

    addBtnElement.addEventListener('click', async () => {
        // get input data
        const newGame = getInputData();
    
        // create post request
        const response = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newGame),
        });
    
        if (!response.ok) {
            return;
        }
    
        gameNameElement.value = '';
        gameTypeElement.value = '';
        maxPlayersElement.value = '';
        
        // load all meals
        await loadGames();
    });

    function getInputData() {
        const name = gameNameElement.value;
        const type = gameTypeElement.value;
        const players = maxPlayersElement.value;

        return {name, type, players}
    }