window.addEventListener("load", solve);

function solve() {
    const addButtonElement = document.getElementById('add-btn');
    const expenseElement = document.getElementById('expense');
    const amountElement = document.getElementById('amount');
    const dateElement = document.getElementById('date');
    const previewElement = document.getElementById('preview-list');
    const expensesListElement = document.getElementById('expenses-list');
    const deletebtnElement = document.querySelector('.btn.delete');

    addButtonElement.addEventListener('click', () => {
        const expense = expenseElement.value;
        const amount = amountElement.value;
        const date = dateElement.value;

        if (!expense || !amount || !date){
            return;
        }

        const liElement = document.createElement('li');
        liElement.classList.add('expense-item');

        const articleElement = document.createElement('article');

        const pTypeElement = document.createElement('p');
        pTypeElement.textContent = `Type: ${expense}`;

        const pAmountElemet = document.createElement('p');
        pAmountElemet.textContent = `Amount: ${amount}$`;

        const pDateElement = document.createElement('p');
        pDateElement.textContent = `Date: ${date}`;

        articleElement.appendChild(pTypeElement);
        articleElement.appendChild(pAmountElemet);
        articleElement.appendChild(pDateElement);

        const divElementContainer = document.createElement('div');
        divElementContainer.classList.add('buttons');

        const editBtnElement = document.createElement('button');
        editBtnElement.classList.add("btn", "edit");
        editBtnElement.textContent = 'edit';

        const okBtnElement = document.createElement('button');
        okBtnElement.classList.add('btn', 'ok');
        okBtnElement.textContent = 'ok';

        divElementContainer.appendChild(editBtnElement);
        divElementContainer.appendChild(okBtnElement);

        liElement.appendChild(articleElement);
        liElement.appendChild(divElementContainer);
        previewElement.appendChild(liElement);

        addButtonElement.setAttribute('disabled', 'disabled');
        expenseElement.value = '';
        amountElement.value = '';
        dateElement.value = '';

        editBtnElement.addEventListener('click', () => {
            expenseElement.value = expense;
            amountElement.value = amount;
            dateElement.value = date;

            addButtonElement.removeAttribute('disabled');

            liElement.remove();
        })

        okBtnElement.addEventListener('click', () => {
            const expenseLiElement = document.createElement('li');
            expenseLiElement.classList.add('expense-item');

            const article = document.createElement('article');

            const pType = document.createElement('p');
            pType.textContent = `Type: ${expense}`;

            const pAmount = document.createElement('p');
            pAmount.textContent = `Amount: ${amount}$`;

            const pDate = document.createElement('p');
            pDate.textContent = date;

            article.appendChild(pType);
            article.appendChild(pAmount);
            article.appendChild(pDate);

            expenseLiElement.appendChild(article);

            expensesListElement.appendChild(expenseLiElement);

            addButtonElement.removeAttribute('disabled');

            liElement.remove();
        })

        deletebtnElement.addEventListener('click', () => {
            expensesListElement.innerHTML = '';
        })
    })
}