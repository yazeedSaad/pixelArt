// Select color input
const color = document.getElementById('colorPicker');
// Select size input
const form = document.getElementById('sizePicker');
const table = document.getElementById('pixelCanvas');
// When size is submitted by the user, call makeGrid()
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const height = document.getElementById('inputHeight').value;
    const width = document.getElementById('inputWidth').value;
    table.innerHTML = null;
    makeGrid(height, width)
})
function makeGrid(height, width) {
    for (i= 1; i <= height; ++i){
        const row = document.createElement('tr');
        table.appendChild(row);
        for (j = 1; j <= width; ++j) {
            const cell = document.createElement('td');
            row.appendChild(cell);
            cell.addEventListener('click', function(e){
                cell.style.backgroundColor = color.value;
            })
        }
    }
// Your code goes here!

}
