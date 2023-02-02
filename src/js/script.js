const hamburger = document.querySelector(".hamburger"),
    menu = document.querySelector(".menu"),
    close = document.querySelector(".menu__close");
block = document.querySelector(".menu__block");

hamburger.addEventListener('click', () => {
    menu.classList.add("active");
    block.classList.add("active");
});

close.addEventListener('click', () => {
    menu.classList.remove('active');
    block.classList.remove("active");
});

const percent = document.querySelectorAll('.scale__pers'),
    lines = document.querySelectorAll('.scale__line span');

percent.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});
