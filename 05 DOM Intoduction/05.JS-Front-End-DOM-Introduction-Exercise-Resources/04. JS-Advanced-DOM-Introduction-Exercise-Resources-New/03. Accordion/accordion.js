function toggle() {
    const showMoreElement = document.querySelector('.button');
    const extraTextElement = document.getElementById('extra');

    const currentButtonText = showMoreElement.textContent;

    if(currentButtonText === "More"){
        showMoreElement.textContent = "Less";
        extraTextElement.style.display = 'block';
    } else {
        showMoreElement.textContent = 'More';
        extraTextElement.style.display = 'none';
    }
}