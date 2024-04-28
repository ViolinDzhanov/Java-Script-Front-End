const baseUrl = 'http://localhost:3030/jsonstore/tasks/';

const loadMealsBtn = document.getElementById('load-meals');
const mealsListElement = document.getElementById('list');
const foodElement = document.getElementById('food');
const timeElement = document.getElementById('time');
const caloriesElement = document.getElementById('calories');
const addMealbtnElement = document.getElementById('add-meal');
const editMealBtnElement = document.getElementById('edit-meal');
const formElement = document.getElementById('form');


const loadMeals = async () => {
        const response = await fetch(baseUrl);
        const data = await response.json();

        mealsListElement.innerHTML = ''

        for (const meal of Object.values(data)) {
            const divBtnElement = document.createElement('div');
            divBtnElement.id = 'meal-buttons';
            
            const changeBtnElement = document.createElement('button')
            changeBtnElement.classList.add('change-meal');
            changeBtnElement.textContent = 'Change';

            const deleteBtnElement = document.createElement('button')
            deleteBtnElement.classList.add('delete-meal');
            deleteBtnElement.textContent = 'Delete';

            divBtnElement.appendChild(changeBtnElement);
            divBtnElement.appendChild(deleteBtnElement);

            const divMealsElement = document.createElement('div');
            divMealsElement.classList.add('meal');

            const foodH2Element = document.createElement('h2');
            foodH2Element.textContent = meal.food;

            const timeH3Element = document.createElement('h3');
            timeH3Element.textContent = meal.time;

            const caloriesH3Element = document.createElement('h2');
            caloriesH3Element.textContent = meal.calories;

            divMealsElement.appendChild(foodH2Element);
            divMealsElement.appendChild(timeH3Element);
            divMealsElement.appendChild(caloriesH3Element);
            divMealsElement.appendChild(divBtnElement);

            mealsListElement.appendChild(divMealsElement);

            changeBtnElement.addEventListener('click', () => {
                formElement.setAttribute('data-id', meal._id);

                foodElement.value = meal.food;
                timeElement.value = meal.time;
                caloriesElement.value = meal.calories;

                divMealsElement.remove();

                editMealBtnElement.removeAttribute('disabled');
                addMealbtnElement.setAttribute('disabled', 'disabled');
            })

            deleteBtnElement.addEventListener('click', async() => {
                await fetch(`${baseUrl}/${meal._id}`, {
                    method: 'DELETE'
                });

                divMealsElement.remove();
            })
        }
}

loadMealsBtn.addEventListener('click', loadMeals);

editMealBtnElement.addEventListener('click', async () => {
    const {food, calories, time} = getInputData();

    const mealId = formElement.getAttribute('data-id');

    const response = await fetch(`${baseUrl}/${mealId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            _id: mealId,
            food,
            calories,
            time,
        })
    });

    editMealBtnElement.setAttribute('disabled', 'disabled');

    addMealbtnElement.removeAttribute('disabled');

    clearInputData();

    loadMeals();
})

addMealbtnElement.addEventListener('click', async () => {
    const newMeal = getInputData();

    await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(newMeal),
    })

    clearInputData();

    await loadMeals();
})

function getInputData() {
    const food = foodElement.value;
    const time = timeElement.value;
    const calories = caloriesElement.value;

    return {food, time, calories };
}

function clearInputData() {
    foodElement.value = '';
    timeElement.value = '';
    caloriesElement.value = '';
}