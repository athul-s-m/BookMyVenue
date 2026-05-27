const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');

button1.addEventListener('click', () => {
    button1.textContent = 'Booked';
    button1.style.backgroundColor = 'red';
})

button2.addEventListener('click', () => {
    button2.textContent = 'Booked';
    button2.style.backgroundColor = 'red';
})

button3.addEventListener('click', () => {
    button3.textContent = 'Booked';
    button3.style.backgroundColor = 'red';
})