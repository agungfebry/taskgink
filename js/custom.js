var addTask = document.getElementById("addTask");

addTask.addEventListener('click', () => {
    var slideAddTask = document.getElementById('slideAddTask');
    var close = document.getElementById('close');

    slideAddTask.classList.add('slideTop');
    slideAddTask.classList.remove('slideDown');

    close.addEventListener('click', () => {
        slideAddTask.classList.remove('slideTop');
        slideAddTask.classList.add('slideDown');
    })

});