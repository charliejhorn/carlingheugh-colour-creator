document.addEventListener('DOMContentLoaded', () => {
    const colourForm = document.querySelector('#colour-form');
    colourForm.addEventListener('submit', createCoolorsEmbed);
})

const createCoolorsEmbed = function (event) {
    event.preventDefault();
    
    let input = event.target.colour.value;
    console.log(input);
    
    let hex = createColourHEX(input)

    const container = document.querySelector('#colours-container')
    container.style.backgroundColor = `#${hex}`;
}