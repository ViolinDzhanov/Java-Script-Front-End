function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const trElements = document.querySelectorAll('tbody tr');
      const searchFieldElement = document.getElementById('searchField');
      const searchedText = searchFieldElement.value;

      for (const trElement of trElements) {
         const currentElements = trElement.querySelectorAll('td');
         var isSelected = false;

         trElement.classList.remove('select');

         for (const element of currentElements) {
            if(element.textContent.includes(searchedText)) {
               isSelected = true;
              break;
            }
         }

         if (isSelected) {
            trElement.className = 'select';
         }
      }
      searchFieldElement.value = ''
   }

}