const canvas = document.querySelector('.canvas');
const body = document.querySelector('body');
const reset = document.getElementById('reset-btn')

canvas.addEventListener('click', function(e) {
    if (e.target.className === 'button') {
        body.style.backgroundColor = e.target.id;
    }
});

reset.addEventListener('click', function(a) {
   body.style.backgroundColor = 'white'
});