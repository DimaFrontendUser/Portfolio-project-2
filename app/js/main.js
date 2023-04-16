'use strict';


if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    document.body.classList.add('_touch');
  } else {
    document.body.classList.add('_pc');
}


let burger = document.querySelector('.header__burger');
if (burger) {
  let menuBurger = document.querySelector('.menu');
  burger.addEventListener('click', function(e) {
    menuBurger.classList.toggle('_active');
    burger.classList.toggle('_active');
    document.body.classList.toggle('_lock');
  });
}

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('element-show');
    }
  });
}

let options = {
  threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
  observer.observe(elm);
}
