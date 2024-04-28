function sumTable() {
    let rows = document.querySelectorAll('table tr')

    let sum = 0;

    for (let i = 0; i < rows.length; i++) {
        let cols = table[i].children;
        let cost = cols[cols.length - 1].textContent;

        total += Number(cost);
    }
  
    document.getElementById('sum').textContent = sum
}