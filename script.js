const gridContainer = document.getElementById('grid-container');
const resetButton = document.getElementById('reset-button');
const saveButton = document.getElementById('save-button');
let currentColor = '#000000';  

function createGrid(size = 16) {
    gridContainer.innerHTML = ''; 
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const gridCell = document.createElement('div');
        gridCell.classList.add('grid-cell');
        gridCell.addEventListener('click', changeColor);
        gridContainer.appendChild(gridCell);
    }
}

function changeColor(e) {
    e.target.style.backgroundColor = currentColor;  
}

document.querySelectorAll('.color').forEach(color => {
    color.addEventListener('click', function() {
        currentColor = color.getAttribute('data-color'); 
        document.querySelectorAll('.color').forEach(c => c.classList.remove('selected'));  
        this.classList.add('selected');  
    });
});

resetButton.addEventListener('click', () => {
    document.querySelectorAll('.grid-cell').forEach(cell => {
        cell.style.backgroundColor = '#fff';  
    });
});

saveButton.addEventListener('click', () => {
    html2canvas(gridContainer).then(canvas => {
        const link = document.createElement('a');
        link.download = 'pixel-art.png';  
        link.href = canvas.toDataURL();
        link.click(); 
    });
});

createGrid();
