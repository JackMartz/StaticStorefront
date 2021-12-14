const myButton = document.getElementById('clickMe');
const myInput = document.getElementById('listInput');

myButton.addEventListener('click', (event) => {
    console.log(event);
});

myInput.addEventListener('keyup', (event) => {
    console.log(event.target.value);
});
let userInput = "";

myInput.addEventListener('keyup', (event) => {
    userInput = event.target.value;
});
function createNewToRead (toreadText) {
    let newToRead = document.createElement('li');
    newToRead.innerText = toreadText;
    newToRead.classList.add('read-item');
    document.querySelector('#ToDo ol').appendChild(newToRead);
}

myButton.addEventListener('click', () => {
    createNewToRead(userInput);
})