let noteText = document.querySelector("#notes");
let colorVal = document.querySelector('#color');
let notesContainer = document.querySelector('#notes-container');

let button = document.querySelector('.left-top-div button');

function addNotes(){
    // alert("click event activate");
    let div = document.createElement('div');
    let cutButton = document.createElement('button');
    cutButton.innerText='X';
    let p = document.createElement('p');
    div.style.backgroundColor=colorVal.value;
    div.classList.add('note-container');
    p.innerText=noteText.value;
    div.appendChild(cutButton);
    div.appendChild(p);

    // Add an event listener to the slider
    colorVal.addEventListener('input', function () {
    // Get the current value of the slider
    const sliderValue = colorVal.value;
    
    // Convert the value to a color (for example, changing hue in HSL format)
    const color = `hsl(${sliderValue}, 70%, 50%)`; // Adjust hue, saturation, and lightness as needed

    div.style.backgroundColor=color;

    
    
});

    notesContainer.appendChild(div);

}

button.addEventListener('click',addNotes);

// Get the range input and the content div
const colorSlider = document.getElementById('color');
const contentDiv = document.querySelector('.main'); // Assuming the whole main div is the content div

