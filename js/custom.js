var addTask = document.getElementById("addTask");

var overlay = document.getElementById('overlay');
overlay.classList.remove('overlay');

addTask.addEventListener('click', () => {
    var slideAddTask = document.getElementById('slideAddTask');
    var close = document.getElementById('close');

    slideAddTask.classList.add('slideTop');
    slideAddTask.classList.remove('slideDown');
    overlay.classList.add('overlay');

    close.addEventListener('click', () => {
        slideAddTask.classList.remove('slideTop');
        slideAddTask.classList.add('slideDown');
        overlay.classList.remove('overlay');
    })
});
