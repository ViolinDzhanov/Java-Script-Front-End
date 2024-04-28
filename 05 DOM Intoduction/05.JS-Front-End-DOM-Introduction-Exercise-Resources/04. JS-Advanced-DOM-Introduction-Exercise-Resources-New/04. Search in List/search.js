function search() {
   const townListElement = document.getElementById('towns');
   const resultElement = document.getElementById('result');
   const searchText = document.getElementById('searchText').value;

  
   let matchCount = 0;
   const townElements = Array.from(townListElement.children);

   for (const town of townElements) {
      if (town.textContent.toLowerCase().includes(searchText.toLocaleLowerCase())) {
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
         matchCount++;
      }
   }

   resultElement.textContent = `${matchCount} matches found`;
}
