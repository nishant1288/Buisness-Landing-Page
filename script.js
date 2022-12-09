const toggleButton = document.getElementsByClassName('toggle-button')[0];
const middleItems = document.getElementsByClassName('mid-items')[0];
const connectItems = document.getElementsByClassName('connect-items')[0];

toggleButton.addEventListener('click', () =>
{
    middleItems.classList.toggle('active');
    connectItems.classList.toggle('active');
})

