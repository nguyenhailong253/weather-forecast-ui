// Select text input
const textInput = document.getElementById('city');

// Store the value of the input in a variable
let cityName = textInput.value;

// When an input event is triggered update cityName
textInput.addEventListener('input', function(e) {
    cityName = e.target.value;
});

// Select our form
const form = document.querySelector('form');

// When form is submitted print 'submitted' to the browser console
form.addEventListener('submit', function(e) {
    // prevent form default behaviour
    e.preventDefault();

    // Print your input value
    console.log(cityName);

    // Clear input
    textInput.value = '';
});