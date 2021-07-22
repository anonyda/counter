let incrementButton = document.getElementById('increment');
let decrementButton = document.getElementById('decrement');
let resetButton = document.getElementById('reset')
let counter = document.getElementById('counter')

const increaseCounter = () => {
    counter.innerHTML = Number(counter.innerHTML) + 1;
}

const decreaseCounter = () => {
    if(Number(counter.innerHTML) > 0)
        counter.innerHTML = Number(counter.innerHTML) - 1;
}

const resetCounter = () => {
    counter.innerHTML = 0;
}

incrementButton.addEventListener('click', increaseCounter);
decrementButton.addEventListener('click', decreaseCounter);
resetButton.addEventListener('click', resetCounter);

